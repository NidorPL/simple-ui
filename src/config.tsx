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
          moduleName: "ProgramHub",
          customApi: "default",
          iconName: "desktop-mac-dashboard",
          moduleConfig: {
            runningPrograms: [
              {
                programInfo: {
                  pModuleName: "LabeledProgress",
                },
                programConfig: {
                  name: "Bake",
                  title: "Backen...",
                  iconName: "chef-hat",
                  connection: {
                    statusUrl: "http://localhost:3000/oven1/bake1/status",
                    startUrl: "...",
                    stopUrl: "...",
                  },
                  customApi: "default",
                },
              },
              {
                programInfo: {
                  pModuleName: "LabeledProgress",
                },
                programConfig: {
                  name: "Vacuum1",
                  title: "Cleaning living room...",
                  iconName: "robot-vacuum",
                  connection: {
                    statusUrl: "http://localhost:3000/vacuum1/status",
                    startUrl: "...",
                    stopUrl: "...",
                  },
                  customApi: "default",
                },
              },
            ],
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
