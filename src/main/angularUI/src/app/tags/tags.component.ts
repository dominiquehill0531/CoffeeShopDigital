import { Component, OnInit } from '@angular/core';
import { Tag } from '../models/Tag';
import { DrinkService } from '../_services/drink.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags: Tag[] = [];
  constructor(private drinkService:DrinkService) { }

  ngOnInit(): void {
    this.tags = this.drinkService.getAllTags();
  }

}
