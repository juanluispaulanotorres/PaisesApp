import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
      li {
        cursor: pointer;
      }
    `
  ]
})

export class SidebarComponent {

  constructor() { }

  addCss(item:HTMLLIElement) {
    item.classList.add("animate__pulse");
  }

  removeCss(item:HTMLLIElement) {
    item.classList.remove("animate__pulse");
  }
}
