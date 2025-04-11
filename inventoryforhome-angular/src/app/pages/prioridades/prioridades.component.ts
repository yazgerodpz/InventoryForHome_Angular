import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TablaPrioridadComponent } from '../../components/tabla-prioridad/tabla-prioridad.component';

@Component({
  selector: 'app-prioridades',
  standalone: true,
  imports: [MatTableModule, TablaPrioridadComponent],
  templateUrl: './prioridades.component.html',
  styleUrl: './prioridades.component.css'
})
export class PrioridadesComponent {

}
