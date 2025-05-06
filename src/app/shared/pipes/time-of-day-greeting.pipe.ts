import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'timeOfDayGreeting',
  standalone: false
})
export class TimeOfDayGreetingPipe implements PipeTransform {

  transform(value?: any): string {

    const currentTime = new Date().getHours();

    if (currentTime >= 18 || currentTime < 4) {
      return 'Good evening';
    }
    else if (currentTime >= 12) {
      return 'Good afternoon';
    }
    else if (currentTime >= 4) {
      return 'Good morning';
    }
    else {
      return 'Good night';
    }
  }

}
