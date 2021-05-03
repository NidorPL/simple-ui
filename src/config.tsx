export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      modules: [
        {
          moduleName: "Chat",
          mapper: "corona-bot1",
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
          moduleName: "ProgramHub",
          mapper: "default",
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
      ],
    },
  ],
};
