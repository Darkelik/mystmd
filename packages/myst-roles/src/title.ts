import { GenericNode, RoleData, RoleSpec } from "myst-common";

export const titleRole: RoleSpec = {
  name: 'title',
  body: {
    type: String,
    required: true,
  },
  run(data: RoleData): GenericNode[] {
    return [
        {
          type: 'title',
          value: data.body as string
        }
    ];
  }
};