export class Menu {

  /**
   *
   */
  constructor(title: string, icon: string, menu: Menu[]) {
    this.Title = title;
    this.Icon = icon;
    this.Menu = menu;
  }

  Title: string | undefined;
  Icon: string | undefined;
  Menu: Menu[] | undefined;
}
