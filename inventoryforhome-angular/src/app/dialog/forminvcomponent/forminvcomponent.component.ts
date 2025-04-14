import { Component } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-forminvcomponent',
  standalone: true,
  imports: [ MatDialogModule, CommonModule, MatButtonModule, MatInputModule, MatFormFieldModule, FormsModule],
  templateUrl: './forminvcomponent.component.html',
  styleUrl: './forminvcomponent.component.css'
})
export class ForminvcomponentComponent {

}
