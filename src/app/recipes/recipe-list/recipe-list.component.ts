import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test', 'description text', 'https://lh3.googleusercontent.com/KQlVT3lrsGGQTcx9CXi_tHFLl0na9OSo_oGqRzF-iObzfR5IZvgHU051g0iwDPrWG23ZQKCSEggibdswiEOM=w1200-h900-c-rj-v1-e365'),
    new Recipe('Test 2', 'description text', 'https://res.cloudinary.com/hksqkdlah/image/upload/ar_1:1,c_fill,dpr_2.0,f_auto,fl_lossy.progressive.strip_profile,g_faces:auto,q_auto:low,w_344/37757_sfs-sousvideribeyesteak-92')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
