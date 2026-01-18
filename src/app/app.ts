import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero';
import { AboutComponent } from './components/about/about';
import { ExperienceComponent } from './components/experience/experience';
import { SkillsComponent } from './components/skills/skills';
import { ProjectsComponent } from './components/projects/projects';
import { EducationComponent } from './components/education/education';
import { ContactComponent } from './components/contact/contact';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, ExperienceComponent, SkillsComponent, ProjectsComponent, EducationComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  title = 'portfolio';
}
