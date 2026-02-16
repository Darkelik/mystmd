import { GenericNode, RoleData, RoleSpec } from "myst-common";

export const buttonWidgetRole: RoleSpec = {
  name: 'buttonWidget',
  body: {
    type: String,
    required: true,
  },
  run(data: RoleData): GenericNode[] {
    return [
        {
          type: 'buttonWidget',
          value: data.body as string
        }
    ];
  }
};