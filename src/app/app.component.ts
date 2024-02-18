import { Component, OnInit } from '@angular/core';
import { Category } from './category.model';
import { Skill } from './skills.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    const slideValue: any = document.querySelector('span');
    const inputSlider: any = document.querySelector('input');
    inputSlider.oninput = () => {
      let value = inputSlider.value;
      slideValue.textContent = value;
      slideValue.style.left = value / 2 + '%';
      slideValue.classList.add('show');
    };
    inputSlider.onblur = () => {
      slideValue.classList.remove('show');
    };
  }
}
