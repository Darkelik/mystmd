const titreRole = {
  name: 'titre',
  doc: 'Un rôle qui affiche "{titre}" en grand et rouge, où {titre} est le contenu du rôle.',
  body: {
    type: 'myst',
    required: false,
  },
  run(data) {
    let titre = '';
    if (data.body && data.body.length > 0) {
      titre = data.body
        .map((node) => node.value || '')
        .join('')
        .trim();
    }

    const message = titre
      ? `<span style="color: red; font-size: 2em; text-decoration: underline;">${titre}</span>`
      : '<span style="color: red; font-size: 2em; text-decoration: underline;">titre</span>';
    return [{ type: 'html', value: message }];
  },
};

const plugin = { name: 'Extension Titre', roles: [titreRole] };

export default plugin;
