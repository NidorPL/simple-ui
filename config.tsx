export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      moduleName: "Chatbot",
      icon: "robot",
      connection: {
        url: "https://corona.brain4x.de",
        init: "/chatbot-init",
        send: "/chatbot",
      },
    },
    {
      name: "Oven Chat",
      moduleName: "Chatbot",
      icon: "stove",
      connection: {
        url: "https://corona.brain4x.de",
        init: "/chatbot-init",
        send: "/chatbot",
      },
    },
  ],
};
