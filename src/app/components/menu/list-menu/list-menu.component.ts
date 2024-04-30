import { Component } from '@angular/core';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-list-menu',
  templateUrl: './list-menu.component.html',
  styleUrls: ['./list-menu.component.scss']
})
export class ListMenuComponent {
    menuData ={
      "menu": [
        {
          "id": 1,
          "title": "Coffee",
          "sub_title": "Coffee,Milk",
          "price": "300"
        }
      ]
    }


  constructor(private menuService: MenuService) { }

  ngOnInit(): void {
    this.getAllMenuItems();
  }

  getAllMenuItems(): void {
    this.menuService.getAllMenuItems().subscribe(
      (data) => {
        this.menuData = data;
      },
      (error) => {
        console.error('Error fetching menu items:', error);
      }
    );
  }

  deleteItem(id: number): void {
    this.menuService.deleteMenuItem(id).subscribe(
      () => {
        console.log('Menu item deleted successfully.');
        // After deleting, refresh the menu list
        this.getAllMenuItems();
      },
      (error) => {
        console.error('Error deleting menu item:', error);
      }
    );
  }

}
