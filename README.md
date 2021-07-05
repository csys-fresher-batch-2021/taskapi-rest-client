# taskapi-rest-client

```
npm init -y
```

##### Dependencies:

```
npm i axios
npm i typescript -D
```


##### Initialize typescript project 
* It will create tsconfig.json file ( TypeScript Configuration file)

```
npx tsc --init
```

* tsconfig.json
```
{
  "compilerOptions": {
    "target": "ES2015",                          /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016', 'ES2017', 'ES2018', 'ES2019', 'ES2020', or 'ESNEXT'. */
    "module": "ES2020",     
    "moduleResolution": "node",
    "declaration": true,                /* Specify module code generation: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext'. */   
    "strict": true,                           /* Enable all strict type-checking options. */
    "esModuleInterop": true,                  /* Enables emit interoperability between CommonJS and ES Modules via creation of namespace objects for all imports. Implies 'allowSyntheticDefaultImports'. */    
    "skipLibCheck": true,                     /* Skip type checking of declaration files. */
    "forceConsistentCasingInFileNames": true,  /* Disallow inconsistently-cased references to the same file. */
    "outDir": "./dist/esm",    

  },
  "include": ["./src"]
}

```

* tsconfig-cjs.json

```
{
    "extends": "./tsconfig.json",
    "compilerOptions": {
      "module": "CommonJS",
      "outDir": "./dist/cjs"
    },
}
```


##### Package.json

```
{
  "name": "@ks-sdk-client/rest",
  "version": "1.0.0",
  "description": "",
  "main": "./dist/cjs/index.js",
  "types": "./dist/esm/index.d.ts",
  "module": "./dist/esm/index.js",
  "files": [
    "dist/"
  ],
  "scripts": {
    "tsc": "tsc -p tsconfig.json && tsc -p tsconfig-cjs.json",
    "publish": "npm run tsc"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "typescript": "^4.1.4"
  },
  "dependencies": {
    "axios": "^0.21.1",
    "lodash": "^4.17.20",
    "rxjs": "^6.6.7"
  }
}

```
