import { Component, OnInit } from '@angular/core';
import { PROJECTS } from '../models/projects';
import { ColorThemeService } from '../services/color-theme.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects = PROJECTS;

  constructor(public colorTheme: ColorThemeService) { }

  ngOnInit() {
  }

}
