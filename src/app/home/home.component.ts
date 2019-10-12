import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from '../services/color-theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public colorTheme: ColorThemeService) { }

  ngOnInit() {
  }

}
