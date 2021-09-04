import { Injectable } from '@angular/core';

export interface Post {
  Title: string;
  Autor: string;
  Category: string;
}

@Injectable({
  providedIn: 'root'
})

export class RepositoryService {
  res: Post[] = [{ Title: "Title 1", Autor: "Autor Name 1", Category: "Category 1" },
  { Title: "Title 2", Autor: "Autor Name 2", Category: "Category 2" },
  { Title: "Title 3", Autor: "Autor Name 3", Category: "Category 3" }];

  constructor() { }

  public getItemsForHomeSceen(): Post[] {

    return this.res;
  }

}