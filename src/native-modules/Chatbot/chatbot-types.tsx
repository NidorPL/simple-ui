export interface ModuleConfig {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ChatConfig extends ModuleConfig {
  moduleConfig: {
    headerType: "customImage" | "default";
    customHeaderImage: string;
    headerOptions: {
      icon: string;
      title: string;
    };
    connection: {
      url: string;
      init: string;
      send: string;
    };
  };
}

export interface ChatMessage {
  type: string;
  text?: string;
  fromChatbot?: boolean;
  linkedRequest?: string | string[];
}

export interface ChatbotApi {
  loadFirstMessages: (config: ChatConfig) => Promise<ChatMessage[]>;
  sendMessage: (
    messageInput: string,
    location: object,
    chatConfig: ChatConfig
  ) => Promise<ChatMessage[]>;
  sendLinkedRequest: (
    link: string | string[],
    params: object,
    chatConfig: ChatConfig
  ) => Promise<ChatMessage[]>;
}
