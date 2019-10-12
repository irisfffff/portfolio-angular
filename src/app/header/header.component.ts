import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from '../services/color-theme.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  showMenu: boolean = false;

  constructor(public colorTheme: ColorThemeService) { }

  ngOnInit() {
  }

  toggleShowMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
