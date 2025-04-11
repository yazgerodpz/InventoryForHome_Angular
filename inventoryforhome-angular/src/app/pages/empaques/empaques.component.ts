import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { TablaEmpaquesComponent } from '../../components/tabla-empaques/tabla-empaques.component';

@Component({
  selector: 'app-empaques',
  standalone: true,
  imports: [MatTableModule, TablaEmpaquesComponent],
  templateUrl: './empaques.component.html',
  styleUrl: './empaques.component.css'
})
export class EmpaquesComponent {

}
