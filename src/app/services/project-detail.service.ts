import { Injectable } from '@angular/core';
import { Project } from '../models/projects';

@Injectable({
  providedIn: 'root'
})
export class ProjectDetailService {
  selectedProject: Project = null;

  constructor() { }

  public selectProject(project: Project): void {
    this.selectedProject = project;
  }

  public deselectProject(): void {
    this.selectedProject = null;
  }
}
