export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      modules: [
        {
          moduleName: "Chat",
          mapper: "corona-bot1",
          iconName: "robot",
          connection: {
            url: "https://corona.brain4x.de",
            init: "/chatbot-init",
            send: "/chatbot",
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
          mapper: "default",
          iconName: "view-list",
          moduleConfig: {
            tableTitle: "Generic Data Table",
            tableFields: ["Name", "Quantität", "Einheit", "Verfallsdatum"],
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
          mapper: "default",
          iconName: "desktop-mac-dashboard",
          runningPrograms: [
            {
              moduleInfo: {
                pModuleName: "LabeledProgress",
              },
              instanceConfig: {
                name: "Bake",
                title: "Backen...",
                iconName: "chef-hat",
                connection: {
                  statusUrl: "http://localhost:3000/oven1/bake1/status",
                  startUrl: "...",
                  stopUrl: "...",
                },
                mapper: "default",
              },
            },
            {
              moduleInfo: {
                pModuleName: "LabeledProgress",
              },
              instanceConfig: {
                name: "Vacuum1",
                title: "Cleaning livining room...",
                iconName: "robot-vacuum",
                connection: {
                  statusUrl: "http://localhost:3000/vacuum1/status",
                  startUrl: "...",
                  stopUrl: "...",
                },
                mapper: "default",
              },
            },
          ],
        },
        {
          moduleName: "Chat",
          mapper: "corona-bot1",
          iconName: "robot",
          connection: {
            url: "https://corona.brain4x.de",
            init: "/chatbot-init",
            send: "/chatbot",
          },
        },
      ],
    },
  ],
};
