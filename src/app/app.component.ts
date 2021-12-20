import { Component } from '@angular/core';
import { Menu } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  menuList: Menu[] = [];
  title = 'blog-portal';
  showFiller: boolean = false;
  constructor() {
  }

  getBlogMenu() {
    this.menuList = [
      { Title: "前端", Icon: "", Menu: undefined },
      {
        Title: "后端", Icon: "", Menu: [

        ]
      },
      { Title: "其他", Icon: "", Menu: undefined },
    ]
    this.menuList.push()
  }

}
