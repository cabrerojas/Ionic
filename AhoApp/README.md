# AhoApp

_App para organizar tus gastos_

## Comenzando 🚀

_Deberas crear los siguientes archivos con sus respectivos contenidos.._
Como obtener los datos de firebaseConfig: [LINK](https://www.positronx.io/set-up-firebase-database-in-ionic-angular/) 

```
/app/environments/environment.ts
```
```
export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    databaseURL: "<your-database-url>",
    projectId: "<your-cloud-firestore-project>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-sender-id>",
    appId: "<your-app-id>",
    measurementId: "<your-measurement-id>"
  }
};

```
```
/app/environments/environment.prod.ts
```
```
export const environment = {
  production: true,
  firebaseConfig: {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    databaseURL: "<your-database-url>",
    projectId: "<your-cloud-firestore-project>",
    storageBucket: "<your-storage-bucket>",
    messagingSenderId: "<your-sender-id>",
    appId: "<your-app-id>",
    measurementId: "<your-measurement-id>"
  }
};
```
