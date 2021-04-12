export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      moduleName: "Chatbot",
      mapper: "corona-bot1",
      connection: {
        url: "https://corona.brain4x.de",
        init: "/chatbot-init",
        send: "/chatbot",
      },
    },
  ],
};
