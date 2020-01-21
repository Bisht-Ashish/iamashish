import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class AppHeader {
    public navigationOptions = [
        { name: 'HOME', path: '/home', sectionId: '#homeWrapper' },
        { name: 'ABOUT', path: '/about', sectionId: '#aboutWrapper' },
        { name: 'GALLERY', path: '/gallery', sectionId: '#galleryWrapper'  },
        { name: 'CONTACT ME', path: '/contact', sectionId: '#contactWrapper' }];
}

