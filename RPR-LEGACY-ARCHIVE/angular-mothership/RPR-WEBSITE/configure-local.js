const fs = require('fs');
const path = require('path');

console.log('Initializing local Angular configuration...');

// 1. Generate angular.json
const angularConfig = {
  "$schema": "./node_modules/@angular/cli/lib/config/schema.json",
  "version": 1,
  "newProjectRoot": "projects",
  "projects": {
    "rpr-communications-spa": {
      "projectType": "application",
      "schematics": {},
      "root": "",
      "sourceRoot": "src",
      "prefix": "app",
      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:application",
          "options": {
            "outputPath": "dist/rpr-communications-spa",
            "index": "src/index.html",
            "browser": "src/main.ts",
            "polyfills": [],
            "tsConfig": "tsconfig.app.json",
            "assets": [],
            "styles": [
              "src/styles.css"
            ],
            "scripts": []
          },
          "configurations": {
            "production": {
              "budgets": [
                {
                  "type": "initial",
                  "maximumWarning": "500kb",
                  "maximumError": "1mb"
                },
                {
                  "type": "anyComponentStyle",
                  "maximumWarning": "2kb",
                  "maximumError": "4kb"
                }
              ],
              "outputHashing": "all"
            },
            "development": {
              "optimization": false,
              "extractLicenses": false,
              "sourceMap": true
            }
          },
          "defaultConfiguration": "production"
        },
        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",
          "configurations": {
            "production": {
              "buildTarget": "rpr-communications-spa:build:production"
            },
            "development": {
              "buildTarget": "rpr-communications-spa:build:development"
            }
          },
          "defaultConfiguration": "development"
        }
      }
    }
  }
};

// 2. Generate tsconfig.json
const tsConfig = {
  "compileOnSave": false,
  "compilerOptions": {
    "baseUrl": "./",
    "outDir": "./dist/out-tsc",
    "forceConsistentCasingInFileNames": true,
    "strict": true,
    "noImplicitOverride": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "sourceMap": true,
    "declaration": false,
    "downlevelIteration": true,
    "experimentalDecorators": true,
    "moduleResolution": "node",
    "importHelpers": true,
    "target": "ES2022",
    "module": "ES2022",
    "useDefineForClassFields": false,
    "lib": [
      "ES2022",
      "dom"
    ]
  },
  "angularCompilerOptions": {
    "enableI18nLegacyMessageIdFormat": false,
    "strictInjectionParameters": true,
    "strictInputAccessModifiers": true,
    "strictTemplates": true
  }
};

// 3. Generate tsconfig.app.json
const tsConfigApp = {
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./dist/out-tsc",
    "types": []
  },
  "files": [
    "src/main.ts"
  ],
  "include": [
    "src/**/*.d.ts"
  ]
};

// Write files
fs.writeFileSync('angular.json', JSON.stringify(angularConfig, null, 2));
fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
fs.writeFileSync('tsconfig.app.json', JSON.stringify(tsConfigApp, null, 2));

console.log('✅ Configuration files created: angular.json, tsconfig.json, tsconfig.app.json');
console.log('👉 You can now run "npm start"');
