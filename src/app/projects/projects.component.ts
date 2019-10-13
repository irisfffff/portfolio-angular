import { Component, OnInit } from '@angular/core';
import { PROJECTS, Project } from '../models/projects';
import { ColorThemeService } from '../services/color-theme.service';
import { ProjectDetailService } from '../services/project-detail.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = PROJECTS;

  constructor(public colorTheme: ColorThemeService, private projectDetail: ProjectDetailService) { }

  ngOnInit() {
  }

  selectProject(project: Project): void {
    this.projectDetail.selectProject(project);
  }
}
