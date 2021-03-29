export default {
  /*
        name: name of the device
        icon: corresponding icon name of the Material Community Icons package https://materialdesignicons.com/
     */
  name: "Corona Chatbot",
  icon: "robot",
  connection: {
    url: "https://corona.brain4x.de",
    init: "/chatbot-init",
    send: "/chatbot",
  },
};
