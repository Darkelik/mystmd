import { LearnerModelMock } from './learner_model.js';
/*
  Displays a prototype learning object using a web component and a mock learner model.
*/
class LearningObjectWidget extends HTMLElement {
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
    this.shadowRoot.appendChild(style);
    this.shadowRoot.appendChild(this.container);
    this.model = new LearnerModelMock();
    this.loId = this.getAttribute('lo-id') || 'examples/course/bar/apply0.md';
    this.connectedCallback();
  }
  static get observedAttributes() {
    return ['lo-id'];
  }
  attributeChangedCallback(name, _oldV, newV) {
    if (name === 'lo-id' && newV) {
      this.loId = newV;
      this.connectedCallback();
    }
  }
  connectedCallback() {
    this.loadAndRender();
  }
  loadAndRender() {
    const title = this.model.learning_object_title(this.loId);
    const data = this.model.learning_object_status(this.loId, Date.now());
    this.render(title, data);
  }
  render(name, dict) {
    console.log('Learning object:', name); // DEBUG
    console.log('Widget rendu:', dict); // DEBUG
    let success = dict['predicted_success'] || '⚪⚪⚪';
    let prerequisites_text = dict['prerequisites'] || 'prérequis:\n- none';
    let objectives_text = dict['objectives'] || 'objectifs:\n- none';
    let progress = dict['progress'] || '⬜⬜⬜⬜';

    let tooltip = `${prerequisites_text}\n${objectives_text}`;
    this.container.innerHTML = `
      <span class="lo-text">Learning object : ${name} | </span>
      <span class="lo-text-tooltip" title="${tooltip}">Prérequis: ${success}</span>
      <span class="lo-text"> | Avancement: ${progress}</span>
    `;
  }
}
customElements.define('learner-model-widget', LearningObjectWidget);
