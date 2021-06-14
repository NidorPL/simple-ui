export interface Module {
  moduleName: string;
  customApi: string;
  iconName: string;
  moduleConfig: object;
}

export interface ChatConfig extends Module {
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
  type: "simple-message";
  text: string;
  fromChatbot?: boolean;
  linkedRequest?: string;
}

export interface ChatbotApi {
  loadFirstMessages: (config: ChatConfig) => ChatMessage[];
  sendMessage: (
    messageInput: string,
    location: object,
    chatConfig: ChatConfig
  ) => ChatMessage[];
}
