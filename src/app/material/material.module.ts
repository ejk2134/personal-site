import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatIconModule, 
  MatTooltipModule,
  MatCardModule, 
  MatTabsModule
} from '@angular/material';
//Flex package
import {FlexLayoutModule} from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatTooltipModule,
    MatCardModule, 
    MatTabsModule,
    FlexLayoutModule
  ],
  exports: [
    CommonModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatIconModule,
    MatTooltipModule,
    MatCardModule,
    MatTabsModule,
    FlexLayoutModule,
  ],
  declarations: []
})
export class MaterialModule { }
