import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { environment } from '../environments/environment.development';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), 
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() => getFirestore()), provideAnimationsAsync(),
    provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "database-unimar", appId: "1:337937790321:web:063850597584743f3b72d0", storageBucket: "database-unimar.firebasestorage.app", apiKey: "AIzaSyA1eY_2JRww6RqUFXhEATQkBu7ItVQI2us", authDomain: "database-unimar.firebaseapp.com", messagingSenderId: "337937790321" })), provideFirestore(() => getFirestore())
  ]
};
