export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      modules: [
        {
          moduleName: "Chat",
          customApi: "default",
          iconName: "robot",
          moduleConfig: {
            headerType: "customImage", // default or customImage
            customHeaderImage: "DAI_Corona_Header",
            headerOptions: {
              icon: "robot",
              title: "Corona Bot",
            },
            connection: {
              url: "https://corona.brain4x.de",
              init: "/chatbot-init",
              send: "/chatbot",
            },
          },
        },
      ],
    },

    /*

          Oven

       */

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
              supportedPrograms: "/programsInfo",
              runningPrograms: "/runningPrograms",
              startProgram: "/startProgram",
              stopProgram: "/stopProgram",
              updateProgram: "/updateProgram",
            },
          },
        },
        {
          moduleName: "Chat",
          customApi: "default",
          iconName: "robot",
          moduleConfig: {
            headerType: "customImage", // default or customImage
            customHeaderImage: "DAI_Corona_Header",
            headerOptions: {
              icon: "robot",
              title: "Corona Bot",
            },
            connection: {
              url: "https://corona.brain4x.de",
              init: "/chatbot-init",
              send: "/chatbot",
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
      ],
    },

    /*


      Coffee machine


    */

    {
      name: "Coffee machine",
      icon: "coffee-maker",
      modules: [
        {
          moduleName: "ProgramHub",
          customApi: "default",
          iconName: "desktop-mac-dashboard",
          moduleConfig: {
            connection: {
              baseUrl: "http://localhost:3000/coffee1",
              supportedPrograms: "/programsInfo",
              runningPrograms: "/runningPrograms",
              startProgram: "/startProgram",
              stopProgram: "/stopProgram",
              updateProgram: "/updateProgram",
            },
          },
        },
        {
          moduleName: "Chat",
          customApi: "default",
          iconName: "robot",
          moduleConfig: {
            headerType: "default", // default or customImage
            customHeaderImage: false,
            headerOptions: {
              icon: "robot",
              title: "Coffee Talk",
            },
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
