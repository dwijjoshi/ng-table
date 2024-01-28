import { Skill } from './skills.model';

export class Category {
  public category: string;
  public skills: Skill[];

  constructor(category: string, skills: Skill[]) {
    this.category = category;
    this.skills = skills;
  }
}
