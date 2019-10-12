import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ColorThemeService {
  isLight: boolean = true;

  constructor() { }

  toggleColorTheme(): void {
    this.isLight = !this.isLight;
  }
}
