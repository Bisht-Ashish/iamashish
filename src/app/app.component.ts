import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'iamashish';
  socialNetworks = [
    { name: 'Facebook', path: 'https://www.facebook.com/AshishBisht68' },
    { name: 'Instagram', path: 'https://www.instagram.com/__bishtashish__/'},
    { name: 'LinkedIn', path: 'https://www.linkedin.com/in/ashish-bisht-84142a9a/'},
  ];
}
