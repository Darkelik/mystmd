const bonjourRole = {
  name: 'bonjour',
  doc: 'Un rôle qui affiche "bonjour {nom}" où {nom} est le contenu du rôle.',
  body: {
    type: 'myst',
    required: false,
  },
  run(data) {
    let nom = '';
    if (data.body && data.body.length > 0) {
      nom = data.body
        .map((node) => node.value || '')
        .join('')
        .trim();
    }

    const message = nom ? `bonjour ${nom}` : 'bonjour';
    return [{ type: 'html', value: message }];
  },
};

const plugin = { name: 'Extension Bonjour', roles: [bonjourRole] };

export default plugin;
