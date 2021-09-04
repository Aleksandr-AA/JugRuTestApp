import { Component, OnInit } from '@angular/core';
import { RepositoryService, Post } from './service/repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {
  title = 'jugrutestapp';
  Posts = Array<Post>();

  ngOnInit(): void {
    this.Posts = new RepositoryService().getItemsForHomeSceen();

  }
}
