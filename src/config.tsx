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
              baseUrl: "https://simple-ui-mock-server.herokuapp.com/oven1",
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
              baseUrl: "https://simple-ui-mock-server.herokuapp.com",
              get: "/table1/data",
              edit: "/table1/edit",
              delete: "/table1/delete",
            },
          },
        },
      ],
    },
  ],
};
