import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HomeService {

  configUrl = 'http://api.openweathermap.org/data/2.5/weather?units=metric&q=';

  constructor(private http: HttpClient) { }

  getWeather(cityName, apiKey) {
    return this.http.get(this.configUrl + cityName + '&APPID=' + apiKey);
  }
}
