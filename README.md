# Simple UI

#### Generically connect assistant systems - Cross Plattorm


### Development

To run the application with expo you need to

- Have node, npm and yarn installed on your system

- Run ```yarn``` to install the required npm packages

- Run ```yarn start``` to start the expo client

Then you can choose to open a web application or use mobile devices/ simulators.
To use the simulators they need to be installed via Android Studio and XCode.

Main entrypoint in the code is the ```App.tsx``` file


### Basic configuration

You can use the config.ts file to configure your first device

Basic example:

```
{
      name: "Corona Chat",
      icon: "robot",
      moduleName: "Chatbot",
      mapper: "default",
      connection: {
        url: "https://corona.brain4x.de",
        init: "/chatbot-init",
        send: "/chatbot",
      },
},
```

Every module has its own configuration. Please see the individual modules types for details.


### Adding a new device

- Extend the ```config.ts``` file with the new device  


# Adding custom elements

### Custom module

- Import a module and add it to the customModules list in ``custom-elements-register.ts`` file
  

  Every module needs a index.tsx file in is root folder. It has to export the module object with two parameters ```moduleName``` and ``getView``. The latter gets the moduleConfig and optionally a custom api as inputs.

### Custom api

- Import a api and add it to the customAPIs list in ``custom-elements-register.ts`` file


Every API needs to export at least a ```name``` and ``relatedModule`` field. The latter should specifies with which module the API can be used with.  

### Custom image

- Add an image to the custom-images folder, import and add it to the customImages list in the ``custom-elements-register.ts`` file


Every image needs to export a ``imageName`` and a ``imageSource`` parameter, which points to the image.
