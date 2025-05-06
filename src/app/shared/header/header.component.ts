import { Component, HostListener, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs';
import { IUser } from '../interfaces/IUser';
import { TimeOfDayGreetingPipe } from '../pipes/time-of-day-greeting.pipe';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  user$: Observable<IUser | null>;

  constructor(private userService: UserService) {
    this.user$ = this.userService.user$;
  }

  ngOnInit() {
    this.userService.login({
      name: 'John Doe',
      email: 'john@example.com'
    });
  }

  openProfileMenu() {

  }

  openNavMenu() {

  }
}
