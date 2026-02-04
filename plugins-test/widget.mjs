const widgetRole = {
  name: 'mywidget',
  doc: 'Un rôle qui affiche un petit widget JavaScript avec un bouton.',
  body: {
    type: 'myst',
    required: false,
  },
  run(data) {
    let message = 'Cliquez-moi!';
    if (data.body && data.body.length > 0) {
      message = data.body
        .map((node) => node.value || '')
        .join('')
        .trim();
    }

    const html = `
<div style="border: 1px solid #ccc; padding: 10px; margin: 10px 0;">
  <button onclick="alert('${message}')">${message}</button>
</div>
    `.trim();

    return [{ type: 'html', value: html }];
  },
};

const plugin = { name: 'Extension Widget', roles: [widgetRole] };

export default plugin;
