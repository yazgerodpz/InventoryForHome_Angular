// import { bootstrapApplication } from '@angular/platform-browser';
// import { appConfig } from './app/app.config';
// import { AppComponent } from './app/app.component';

// bootstrapApplication(AppComponent, appConfig)
//   .catch((err) => console.error(err));

import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app/app.component';
import { InventarioComponent } from './app/pages/inventario/inventario.component';
import { EmpaquesComponent } from './app/pages/empaques/empaques.component';
import { PrioridadesComponent } from './app/pages/prioridades/prioridades.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter([
      // { path: '', redirectTo: 'inventario', pathMatch: 'full' },
      { path: 'inventario', component: InventarioComponent },
      { path: 'empaques', component: EmpaquesComponent },
      { path: 'prioridades', component: PrioridadesComponent }
    ])
  ]
});

