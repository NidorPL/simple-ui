export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      modules: [
        {
          moduleName: "Chat",
          customApi: "corona-bot1",
          iconName: "robot",
          moduleConfig: {
            connection: {
              url: "https://corona.brain4x.de",
              init: "/chatbot-init",
              send: "/chatbot",
            },
          },
        },
      ],
    },
    {
      name: "Intelligent Oven",
      icon: "stove",
      modules: [
        {
          moduleName: "ProgramHub",
          customApi: "default",
          iconName: "desktop-mac-dashboard",
          moduleConfig: {
            connection: {
              baseUrl: "http://localhost:3000/oven1",
              supportedPrograms: "/supportedPrograms",
              runningPrograms: "/runningPrograms",
              startProgram: "/startProgram",
              stopProgram: "/stopProgram",
            },
          },
        },
        {
          moduleName: "DataTable",
          customApi: "default",
          iconName: "view-list",
          moduleConfig: {
            tableTitle: "Generic Data Table",
            tableFields: ["Name", "Quantity", "Unit", "BBF"],
            connection: {
              baseUrl: "http://localhost:3000",
              get: "/table1/data",
              edit: "/table1/edit",
              delete: "/table1/delete",
            },
          },
        },
        {
          moduleName: "Chat",
          customApi: "corona-bot1",
          iconName: "robot",
          moduleConfig: {
            connection: {
              url: "https://corona.brain4x.de",
              init: "/chatbot-init",
              send: "/chatbot",
            },
          },
        },
      ],
    },
  ],
};
