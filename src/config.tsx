export default {
  connectedDevices: [
    {
      name: "Corona Chat",
      icon: "robot",
      modules: [
        {
          // 1. Geräte-Konfiguration
          moduleName: "Chat",
          customApi: "default",
          iconName: "robot",

          // 2. Modul-Konfiguration
          moduleConfig: {
            headerType: "customImage", // default or customImage
            customHeaderImage: "DAI_Corona_Header",
            headerOptions: {
              icon: "robot",
              title: "Corona Bot",
            },

            // Beinhaltet Verbindung
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
          moduleName: "DataTable",
          customApi: "default",
          iconName: "view-list",
          moduleConfig: {
            tableTitle: "Zutatenliste",
            tableFields: ["Name", "Menge", "Einheit", "Haltbarkeit"],
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
    /*


Chat Assistants


*/
    {
      name: "Chat Assistants",
      icon: "account-group-outline",
      modules: [
        {
          moduleName: "Chat",
          customName: "Arzt Chatbot",
          customApi: "default",
          iconName: "doctor",
          moduleConfig: {
            headerType: "default", // default or customImage
            customHeaderImage: false,
            headerOptions: {
              icon: "doctor",
              title: "Arzt Chatbot",
            },
            connection: {
              url: "http://localhost:3000/doctor-bot1",
              init: "/init",
            },
          },
        },

        {
          moduleName: "Chat",
          customName: "Corona Chatbot",
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
          moduleName: "Chat",
          customName: "News Chatbot",
          customApi: "default",
          iconName: "newspaper-variant",
          moduleConfig: {
            headerType: "default", // default or customImage
            customHeaderImage: false,
            headerOptions: {
              icon: "newspaper-variant",
              title: "News Chatbot",
            },
            connection: {
              url: "http://localhost:3000/news-bot1",
              init: "/init",
            },
          },
        },
      ],
    },
  ],
};
