import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('contactSection', { static: true, read: ElementRef })
  contactSection!: ElementRef;

  scrollToContact(): void {
    console.log('Scrolling to contact');
    this.contactSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }
}
