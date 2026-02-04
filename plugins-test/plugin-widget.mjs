const learningObjectWidgetRole = {
  name: 'learning_object_widget',
  doc: 'Add a learner models widget to the document.',
  alias: ['widget'],
  body: {
    type: 'myst',
    doc: 'The ID of the learner models widget to display.',
    required: false,
  },
  run(data) {
    let loId = '';
    if (data.body && data.body.length > 0) {
      loId = data.body
        .map((node) => node.value || '')
        .join('')
        .trim();
    }
    if (!loId) {
      loId = 'examples/course/bar/apply0.md';
      console.log('No lo-id provided, using default:', loId);
    }

    const widget = `<learner-model-widget lo-id="${loId}"></learner-model-widget>`;

    return [{ type: 'html', value: widget }];
  },
};

const plugin = {
  name: 'widget tests',
  roles: [learningObjectWidgetRole],
};

export default plugin;
