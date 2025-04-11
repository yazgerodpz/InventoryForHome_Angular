import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-empaques',
  imports: [MatTableModule],
  templateUrl: './tabla-empaques.component.html',
  styleUrl: './tabla-empaques.component.css'
})
export class TablaEmpaquesComponent {
  displayedColumns: string[] = ['id_e', 'name_e', 'activo'];
  dataSource = new MatTableDataSource([
    { id_e: 1, name_e: 'Hydrogen', activo: 1 },
    { id_e: 2, name_e: 'Helium', activo: 1 },
    { id_e: 3, name_e: 'Lithium', activo: 1 }
  ]);
}
