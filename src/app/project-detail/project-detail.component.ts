import { Component, OnInit, Input } from '@angular/core';
import { Project } from '../models/projects';
import { ColorThemeService } from '../services/color-theme.service';
import { ProjectDetailService } from '../services/project-detail.service';
import { DomSanitizer,SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  project: Project;

  constructor(
    public sanitizer: DomSanitizer,
    public colorTheme: ColorThemeService,
    private projectDetail: ProjectDetailService) { }

  ngOnInit() {
    this.project = this.projectDetail.selectedProject;
  }

  deselectProject(): void {
    this.projectDetail.deselectProject();
  }

  getEmbedUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.project.video);
  }

}
