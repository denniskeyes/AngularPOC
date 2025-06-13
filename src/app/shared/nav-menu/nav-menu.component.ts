import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';

@Component({
  selector: 'app-nav-menu',
  standalone: false,
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.scss',
  exportAs: 'navMenuComponent'
})
export class NavMenuComponent {

  constructor() { }

  @ViewChild(MatMenu, { static: true }) menu: MatMenu;

}
