import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-logo',
  template: `
    <div
      class="cursor-pointer flex flex-row prompt text-primary items-center"
      routerLink="/"
    >
      <div class="text-6xl mr-3">&#123;</div>
      <div class="flex justify-center items-center flex-col text-2xl">
        <span>Gustavo</span>
        <span>Reimche</span>
      </div>
      <div class="text-6xl ml-3">&#125;</div>
    </div>
  `,
  styles: [],
})
export class LogoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
