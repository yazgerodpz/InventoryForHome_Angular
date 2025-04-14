import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { TablaInventarioComponent } from '../../components/tabla-inventario/tabla-inventario.component';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { ForminvcomponentComponent } from '../../dialog/forminvcomponent/forminvcomponent.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [MatTableModule, TablaInventarioComponent, MatButtonModule, MatDialogModule],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {
sayHello() {
    alert('Hola desde Home Page!');
  }

  constructor(private dialog: MatDialog) {}

  openDialog() {
    this.dialog.open(ForminvcomponentComponent);
  }
}
