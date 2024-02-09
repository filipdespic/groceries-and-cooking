import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test desc', 'https://www.eatingwell.com/thmb/0RZlB0S2IgjqYHjFFXUPMxpYT3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg  '),
    new Recipe('Another Recipe', 'This is simply another test desc', 'https://www.eatingwell.com/thmb/0RZlB0S2IgjqYHjFFXUPMxpYT3w=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/chickpea-curry-chhole-1x1-41ea4d53c7df4fddabd83caa5b57718e.jpg')
  ];

  constructor() {

  }

  ngOnInit() {

  }
}
