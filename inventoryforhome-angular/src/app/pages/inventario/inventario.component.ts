import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TablaInventarioComponent } from '../../components/tabla-inventario/tabla-inventario.component';

@Component({
  selector: 'app-inventario',
  standalone: true,
  imports: [MatTableModule, TablaInventarioComponent],
  templateUrl: './inventario.component.html',
  styleUrl: './inventario.component.css'
})
export class InventarioComponent {

}
