# Front

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.1.7.

Runs with 
`ng dev --host=0.0.0.0`

In development uses `http://localhost:4200`

Environments need to be located in variables following `ngx-env/builder` style: 
```
NG_APP_ENV=production
NG_APP_API_URL="https://back-production.com"
NG_APP_STORAGE_KEY
```
Avoid locating sensitive keys in the environment package offer by Angular. These files are being uploaded to the github repo.

`front/src/enviroments/enviroments.development.ts`
```ts
export const environment = {
    apiUrl: "http://localhost:8080"
};
   
```

