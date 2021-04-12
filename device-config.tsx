export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      moduleName: "Chatbot",
      moduleConfig: {
        url: "https://corona.brain4x.de",
        init: "/chatbot-init",
        send: "/chatbot",
      },
    },
  ],
};
