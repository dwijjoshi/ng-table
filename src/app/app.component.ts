import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Skill } from './skills.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'table';

  skillArray = ['Java', 'JS', 'C++', '.net'];
  // skillArray: Category[] = [
  //   new Category('Java', [new Skill('java', 5)]),
  //   new Category('JS', [new Skill('java', 5)]),
  //   new Category('.net', [new Skill('java', 5)]),
  //   new Category('test', [new Skill('java', 5)]),
  // ];

  columnOneArray: string[] = [];
  columnTwoArray: string[] = [];
  columnThreeArray: string[] = [];

  ngOnInit(): void {
    for (let i = 0; i < this.skillArray.length; i += 3) {
      this.columnOneArray.push(this.skillArray[i]);
      this.columnTwoArray.push(this.skillArray[i + 1]);
      this.columnThreeArray.push(this.skillArray[i + 2]);
    }
  }
}
