import { Component, inject } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@Component({
  selector: 'app-forminvcomponent',
  standalone: true,
  imports: [ MatDialogModule, CommonModule, MatButtonModule, MatInputModule,
    MatFormFieldModule, FormsModule, MatSelectModule, MatDatepickerModule, MatNativeDateModule],
  templateUrl: './forminvcomponent.component.html',
  styleUrl: './forminvcomponent.component.css'
})
export class ForminvcomponentComponent {

  dialogRef = inject(MatDialogRef<ForminvcomponentComponent>);

  priorityRules = [
    { value: 1, label: 'Alta' },
    { value: 2, label: 'Media' },
    { value: 3, label: 'Baja' }
  ];

  selectedPriority: number | null = null;

  typestock = [
    { value: 1, label: 'caja' },
    { value: 2, label: 'botella' },
    { value: 3, label: 'sobre' }
  ];

  selectedstock: number | null = null;

  purchaseDate: Date | null = null;

  expirationDate: Date | null = null;

  cerrarDialogo() {
    this.dialogRef.close();
  }
}
