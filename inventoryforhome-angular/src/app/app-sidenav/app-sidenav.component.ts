import {Component} from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatSidenavModule} from '@angular/material/sidenav';

@Component({
  selector: 'app-app-sidenav',
  imports: [MatSidenavModule, MatButtonModule],
  templateUrl: './app-sidenav.component.html',
  styleUrl: './app-sidenav.component.css'
})
export class AppSidenavComponent {
  showFiller = false; // Propiedad que faltaba

}
