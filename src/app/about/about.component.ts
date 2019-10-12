import { Component, OnInit } from '@angular/core';
import { ColorThemeService } from '../services/color-theme.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  constructor(public colorTheme: ColorThemeService) { }

  ngOnInit() {
  }

}
