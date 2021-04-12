export interface ChatbotConfig {
  name: string;
  icon: string;
  moduleName: string;
  mapper: string;
  connection: {
    url: string;
    init: string;
    send: string;
  };
}

export interface ChatbotMessage {
  type: "simple-message";
  text: string;
  fromChatbot?: boolean;
  linkedRequest?: string;
}

export interface ChatbotMapper {
  loadFirstMessages: ChatbotMessage[];
  sendMessage: ChatbotMessage[];
}
