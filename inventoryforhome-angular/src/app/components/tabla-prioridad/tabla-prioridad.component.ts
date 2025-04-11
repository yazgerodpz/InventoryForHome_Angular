import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-prioridad',
  imports: [MatTableModule],
  templateUrl: './tabla-prioridad.component.html',
  styleUrl: './tabla-prioridad.component.css'
})
export class TablaPrioridadComponent {
  displayedColumns: string[] = ['id_p', 'name_p', '_descripcion', 'activo'];
  dataSource = new MatTableDataSource([
    { id_p: 1, name_p: 'Alta', _descripcion: 'Artículos de uso cotidiano o con un periodo de uso/vida cortos a muy cortos', activo: 1 },
    { id_p: 2, name_p: 'Helium', _descripcion: 4.0026, activo: 1 },
    { id_p: 3, name_p: 'Lithium', _descripcion: 6.94, activo: 1 }
  ]);
}
