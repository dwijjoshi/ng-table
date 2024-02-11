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

  user: any = {
    id: '2506',
    name: 'Dwij',
    categories: [
      {
        categoryId: '1',
        categoryName: 'Java',
        skills: [
          {
            skillName: 'Spring',
            level: 3,
          },
          {
            skillName: 'Hibernate',
            level: 5,
          },
        ],
      },
      {
        categoryId: '2',
        categoryName: 'Javascript',
        skills: [
          {
            skillName: 'React',
            level: '2',
          },
        ],
      },
    ],
  };

  skillCategories = [
    {
      categoryId: '1',
      categoryName: 'Java',
      skills: [
        {
          skillName: 'Spring',
        },
        {
          skillName: 'Hibernate',
        },
      ],
    },
    {
      categoryId: '2',
      categoryName: 'Javascript',
      skills: [
        {
          skillName: 'React',
        },
        {
          skillName: 'NodeJS',
        },
      ],
    },
  ];

  ngOnInit(): void {}

  skillEdit(category: any, skill: any, $event: any): any {
    // if (this.user.categories.length < 1) {
    //   const categoryObj: any = {
    //     categoryId: category.categoryId,
    //     categoryName: category.categoryName,
    //     skills: [
    //       {
    //         skillName: skill.skillName,
    //         level: $event.target.value,
    //       },
    //     ],
    //   };
    //   this.user.categories.push(categoryObj);
    //   console.log(this.user);
    // } else {
    console.log(this.user, 'Before user');
    console.log(category.categoryId);
    const categoryInUser: any = this.user.categories.find(
      (cat: any) => cat.categoryId === category.categoryId
    );
    if (categoryInUser) {
      const index = this.user.categories.indexOf(categoryInUser);
      console.log(categoryInUser, 'Before');
      console.log(skill.skillName);

      const skillInCategory: any = categoryInUser.skills.find(
        (sk: any) => sk.skillName === skill.skillName
      );

      console.log(skillInCategory, 'Present or not');
      if (skillInCategory) {
        const skillIndex = categoryInUser.skills.indexOf(skillInCategory);
        console.log(skillIndex);
        categoryInUser.skills[skillIndex].level = $event.target.value;
        console.log(categoryInUser, 'After');
        this.user.categories[index] = categoryInUser;
        console.log(this.user, 'After user');
      } else {
        const skillObj = {
          skillName: skill.skillName,
          level: $event.target.value,
        };
        this.user.categories[index].skills.push(skillObj);
        console.log(this.user, 'After User');
      }
    } else {
      const categoryObj: any = {
        categoryId: category.categoryId,
        categoryName: category.categoryName,
        skills: [
          {
            skillName: skill.skillName,
            level: $event.target.value,
          },
        ],
      };
      this.user.categories.push(categoryObj);
      console.log(this.user);
    }
  }
  // }

  getValue(category: any, skill: any) {
    const categoryInUser: any = this.user.categories.find(
      (cat: any) => cat.categoryId === category.categoryId
    );
    if (categoryInUser) {
      const skillInCategory: any = categoryInUser.skills.find(
        (sk: any) => sk.skillName === skill.skillName
      );
      if (skillInCategory) {
        return skillInCategory.level;
      } else {
        return 1;
      }
    }
    return 1;
  }
}
