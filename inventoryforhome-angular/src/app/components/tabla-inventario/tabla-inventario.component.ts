import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-tabla-inventario',
  imports: [MatTableModule],
  templateUrl: './tabla-inventario.component.html',
  styleUrl: './tabla-inventario.component.css'
})
export class TablaInventarioComponent {
  displayedColumns: string[] = ['id_i', 'name_i', 'stock', 'prioridad', 'tipo_emp', 'pdate', 'edate', 'activo'];
  dataSource = new MatTableDataSource([
    { id_i: 1, name_i: 'Hydrogen', stock: 1.008, prioridad: 'H', tipo_emp: 'caja', pdate:'10-04-2025', edate: '30-10-2026', activo: 1 },
    { id_i: 2, name_i: 'Helium', stock: 4.0026, prioridad: 'He', tipo_emp: 'botella', pdate: '10-04-2025', edate: '30-10-2026', activo: 1 },
    { id_i: 3, name_i: 'Lithium', stock: 6.94, prioridad: 'Li', tipo_emp: 'bote 1L', pdate: '10-04-2025', edate: '30-10-2026', activo: 1 }
  ]);
}
