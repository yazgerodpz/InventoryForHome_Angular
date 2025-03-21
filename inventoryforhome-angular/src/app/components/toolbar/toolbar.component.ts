import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { RouterModule } from '@angular/router'; // ✅ IMPORTANTE

@Component({
  selector: 'toolbar',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule, RouterModule],
  templateUrl: './toolbar.component.html',
  styleUrl: './toolbar.component.css'
})
export class ToolbarComponent {

}

// import { Component, ViewChild } from '@angular/core';
// import { MatSidenav } from '@angular/material/sidenav';
// import { MatIconModule } from '@angular/material/icon';
// import { MatButtonModule } from '@angular/material/button';
// import { MatToolbarModule } from '@angular/material/toolbar';
// import { MatSidenavModule } from '@angular/material/sidenav';
// import { MatListModule } from '@angular/material/list';

// @Component({
//   selector: 'toolbar',
//   standalone: true,
//   imports: [MatToolbarModule, MatButtonModule, MatIconModule, MatSidenavModule, MatListModule],
//   templateUrl: './toolbar.component.html',
//   styleUrl: './toolbar.component.css'
// })
// export class ToolbarComponent {
//   @ViewChild('sidenav') sidenav!: MatSidenav;

//   closeSidenav() {
//     this.sidenav.close();
//   }
// }
