import { Component, Input, OnInit } from '@angular/core';
import { Post } from 'src/app/service/repository.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.scss']
})
export class PostItemComponent implements OnInit {

  @Input() post : Post = { Title: "Title 1", Autor: "Autor Name 1", Category: "Category 1" }

  constructor() {
    //this.post = new Post;
   }

  ngOnInit(): void {
  }

}
