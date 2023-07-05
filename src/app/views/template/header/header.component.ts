import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NavItem } from 'src/app/models/NavItem';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [
    trigger('slide', [
      state(
        'closed',
        style({
          left: '100%',
          opacity: '0',
        })
      ),
      state(
        'open',
        style({
          left: 0,
          opacity: '1',
        })
      ),
      transition('closed <=> open', animate('300ms ease-in-out')),
    ]),
  ],
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  list: NavItem[] = [
    { route: '/', label: 'Home', active: true },
    { route: '/experiences', label: 'Experience', active: false },
    { route: 'courses/', label: 'Courses', active: false },
    { route: '/skills', label: 'Skills', active: false },
    { route: '/projects', label: 'Projects', active: false },
  ];
  sidenav: boolean = false;

  @Output() contactClick = new EventEmitter();

  selectNavItem(item: string | null) {
    this.list.map((i) => {
      if (i.label === item) {
        i.active = true;
        return;
      }
      i.active = false;
    });
  }

  contactClicked() {
    this.contactClick.emit();
  }

  toggleSidenav() {
    console.log('aside');
    this.sidenav = !this.sidenav;
  }
}
