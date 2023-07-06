import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact-me-button',
  template: `
    <a
      class="bg-primary rounded-full py-3 px-5 text-xl cursor-pointer"
      (click)="contactClicked()"
    >
      Contact Me
    </a>
  `,
  styles: [],
})
export class ContactMeButtonComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() buttonContactClicked = new EventEmitter();

  contactClicked() {
    this.buttonContactClicked.emit(null);
  }
}
