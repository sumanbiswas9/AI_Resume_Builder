import type { Schema, Struct } from '@strapi/strapi';

export interface ChatNameChatName extends Struct.ComponentSchema {
  collectionName: 'components_chat_name_chat_names';
  info: {
    description: '';
    displayName: 'ChatName';
    icon: 'earth';
  };
  attributes: {
    content: Schema.Attribute.Text;
    msgid: Schema.Attribute.String;
    sender: Schema.Attribute.String;
    timestamp: Schema.Attribute.DateTime;
    type: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'chat-name.chat-name': ChatNameChatName;
    }
  }
}
