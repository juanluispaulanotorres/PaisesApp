import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent        // Se utilizará fuera de este módulo
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})

export class SharedModule { }
