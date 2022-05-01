import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';
  value = '';
  username = '';
  selected = true;

  classObj = {
    unselected: true,
    selected: true,
  };

  fruits = ['apple', 'orange', 'mango', 'grapes'];

  selectedTabValue = 'Shopping List';

  public onChange(event: Event) {
    const element = event.target as HTMLInputElement;
    this.value = element.value;
    console.log(this.value);
  }

  childFn(value: string) {
    this.title = value;
  }

  selectedTab(value: string) {
    this.selectedTabValue = value;
  }
}
