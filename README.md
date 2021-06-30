# generic-smart-assistant


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

Every module has its own configuration. Please see the individual modules README for details.


### Adding a new device

- Extend the ```config.ts``` file with the new device  


### Adding a custom module

- Import a module and add it to the customModules list in ``custom-elements-register.ts`` file


### Adding a custom api

- Import a api and add it to the customAPIs list in ``custom-elements-register.ts`` file


### Creating own npm module

- Navigate to packageDeployer directory
- Configure the package name and version as desired.
  

Then run:
`yarn build`
`yarn publish`
