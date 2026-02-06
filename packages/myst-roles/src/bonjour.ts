import type { RoleSpec, RoleData, GenericNode } from 'myst-common';

export const bonjourRole: RoleSpec = {
  name: 'bonjour',
  body: {
    type: String,
    required: true,
  },
  run(data: RoleData): GenericNode[] {
    return [
        {
          type: 'bonjour',
          value: data.body as string
        }
    ];
  }
};