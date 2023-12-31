import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon'
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [ ],
  imports: [
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    CurrencyMaskModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  exports: [
    CommonModule,
    MatTabsModule,
    MatSelectModule,
    FormsModule,
    MatIconModule,
    MatDialogModule,
    MatDividerModule,
    MatInputModule,
    CurrencyMaskModule,
    MatRadioModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatButtonModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatSlideToggleModule
  ],
  providers: [],
  entryComponents: []
})
export class SharedModule {}
