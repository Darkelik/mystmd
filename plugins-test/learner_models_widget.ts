import { LearnerModelMock } from './learner_models.js';

/*
  Displays a prototype learning object using a web component and a mock learner model.
*/

class LearningObjectWidget extends HTMLElement {
  private container: HTMLElement;
  private model: LearnerModelMock;
  private loId: string;

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.container = document.createElement('div');
    this.container.className = 'text-widget';
    const style = document.createElement('style');
    style.textContent = `
        .text-widget {
          display: inline-block;
        }

        .lo-text {
          /* margin-right: 10px; */
        }

        .lo-text-tooltip {
          font-weight: bold;
          cursor: help;
        }
    `;
    this.shadowRoot!.appendChild(style);
    this.shadowRoot!.appendChild(this.container);
    this.model = new LearnerModelMock();
    this.loId = this.getAttribute('lo-id') || 'examples/course/bar/apply0.md';
    this.connectedCallback();
  }

  static get observedAttributes() {
    return ['lo-id'];
  }

  attributeChangedCallback(name: string, _oldV: string | null, newV: string | null) {
    if (name === 'lo-id' && newV) {
      this.loId = newV;
      this.connectedCallback();
    }
  }

  connectedCallback() {
    this.loadAndRender();
  }

  private async loadAndRender() {
    this.render();
  }

  render() {
    let data = this.model.learning_object_status(this.loId);
    let title = this.model.learning_object_title(this.loId);

    let predicted_success = data['predicted_success'];

    let prerequisites_text = data['prerequisites'];

    let objectives_text = data['objectives'];

    let progress = data['progress'];

    let tooltip = `${prerequisites_text}\n${objectives_text}`;

    this.container.innerHTML = `
      <span class="lo-text">Learning object : ${title} | </span>
      <span class="lo-text-tooltip" title="${tooltip}">Prérequis: ${predicted_success}</span>
      <span class="lo-text"> | Avancement: ${progress}</span>
    `;
  }
}

customElements.define('learner-model-widget', LearningObjectWidget);
