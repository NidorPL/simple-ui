# generic-smart-assistant


### Basic configuration

You can use the config.tsx file to configure your first device

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

Every module has its own configuration. Please see the individual modules page for details.


### Adding a new device

- Extend the ```config.ts``` file with the new device  


### Adding a new module

- Add the module to the 'modules/custom-modules' folder
- Register the module in the module-register

Later the application will resolve the name from the modules automatically, which will make the module-registration obsolete


### Adding a new mapper

- Add the mapper to the 'modules/custom-mappers' folder
- Register the mapper in 'modules/mapper-register'

Later in development the registration will become obsolete

A mapper must be inside a folder and contain an index.ts file, which exports the following properties:
```
name: Unique name of the mapper
relatedModule: Name of the module the mapper can be used with

...Functions to override the modules default functionality.  

```



### Creating own npm module

- Navigate to packageDeployer directory
- Configure the package name and version as desired.
  

Then run:
`yarn build`
`yarn publish`
