import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service';
import { Tab } from '../tab';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  providers: [HomeService]
})
export class HomeComponent implements OnInit {

  apiKey: string = '7ac446b33b2915acc028069633de58af';
  city: string = 'Vilnius';
  cityData: any;
  tabs: Tab[] = [];
  selectedIndex : number = 0;
  errors = [];

  constructor(private hs: HomeService) { }

  ngOnInit() {
  }

  onSubmit(): void {
    if (this.city) {
      this.hs.getWeather(this.city, this.apiKey)
        .subscribe(
          data => this.addNewTab(data),
          error => {
            this.errors.push(error.error.message);
        });

        this.city = '';
    }
  }

  addNewTab(cityData) {
    let newTab = new Tab(cityData);
    let cityExists = false;
    let cityTabIndex = 0;

    this.tabs.filter(function(tab, index){
      if (tab.city.name === cityData.name) {
        cityExists = true;
        cityTabIndex = index + 2;
      }
    });

    if (cityExists) {
      this.selectedIndex = cityTabIndex;
    } else {
      this.tabs.push(newTab);
      this.selectedIndex = this.tabs.length + 2;
    }
  }

}
