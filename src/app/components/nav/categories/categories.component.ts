import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NavigationProviderService } from '../../../services/navigation-provider.service';
import { NavigationService } from '../../../services/navigation.service';
import { Categories } from '../../../utils/models/nav';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {
  categories$: Observable<Categories>;

  isNewClicked = false;

  constructor(private navProvider: NavigationProviderService, private navService: NavigationService) {
  }

  ngOnInit(): void {
    this.categories$ = this.navService.getCategories();
  }

  toggle(): void {
    this.isNewClicked = !this.isNewClicked;
  }

  addCategory(input: HTMLInputElement): void {
    if (input.value.length > 0) {
      const upperCasedInputValue = input.value[0].toUpperCase() + input.value.slice(1);
      const lowerCasedInputValue = input.value.toLowerCase();
      const category = {
        link: lowerCasedInputValue,
        displayName: upperCasedInputValue,
        name: lowerCasedInputValue,
        color: CategoriesComponent.randomColor()
      };
      this.navProvider.addCategory(category).subscribe(() => this.navService.refreshCategories());
      input.value = '';
      this.isNewClicked = false;
    }
  }

  deleteCategory(event: MouseEvent, id: string) {
    event.stopPropagation();
    this.navProvider.deleteCategory(id).subscribe(() => this.navService.refreshCategories());
  }

  private static randomColor = () => '#'.concat(Math.random().toString(16).substr(2, 6));
}
