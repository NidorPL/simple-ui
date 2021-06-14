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

You will need to have the package.json and tsconfig.json files set up. Then you can build and and publish the module.
Example files:

package.json
```
{
  "name": "simple_ui_data-table",
  "version": "1.1.0",
  "description": "",
  "author": "nidorpl",
  "main": "lib/index.js",
  "types": "lib/index.d.ts",
  "scripts": {
    "build": "tsc --project ./tsconfig.json",
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "license": "ISC",
  "repository": {
    "type": "git",
    "url": "git+https://github.com/NidorPL/simple_ui-data-table.git"
  },
  "bugs": {
    "url": "https://github.com/NidorPL/simple_ui-data-table/issues"
  },
  "homepage": "https://github.com/NidorPL/simple_ui-data-table#readme",
  "dev-dependencies": {
    "axios": "^0.21.1",
    "react-native-vector-icons": "^8.1.0",
    "react-query": "^3.13.12",
    "styled-components": "^5.2.3",
    "typescript": "^4.3.2",
    "@expo/vector-icons": "^12.0.0",
    "@material-ui/icons": "^4.11.2"
    "@types/styled-components": "^5.1.9",
    "@types/styled-components-react-native": "^5.1.1",
    "ramda": "^0.27.1",
  },
  "peerDependencies": {
    "react": "17.0.2",
    "react-dom": "16.13.1",
    "react-native": "react-native",
  },
  "dependencies": {
    "simple_ui_data-table-extracted": "^1.0.1"
  }
}

```

tsconfig.json
```
{
  "compilerOptions": {
    "target": "es6",
    "module": "es6",
    "declaration": true,
    "outDir": "./lib",
    "strict": true,
    "jsx": "react-native",
    "skipLibCheck": true,
    "moduleResolution": "node"
  },
  "include": [
    "src/*"
  ],
  "exclude": [
    "node_modules",
    "**/__tests__/*"
  ]
}

```
