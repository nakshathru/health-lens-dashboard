import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age',
})
export class AgePipe implements PipeTransform {
  transform(date: Date): string {
    const now = new Date('01-01-2023');

    const yearDiff = now.getFullYear() - date.getFullYear();
    const monthDiff = now.getMonth() - date.getMonth();
    const dayDiff = now.getDate() - date.getDate();

    if (yearDiff) {
      if (monthDiff < 0) {
        if (yearDiff - 1)
          return yearDiff - 1 > 1
            ? `${yearDiff - 1} years`
            : `${yearDiff - 1} year`;
        if (12 - monthDiff * -1 > 1)
          12 - monthDiff * -1 > 1
            ? `${12 - monthDiff * -1} months`
            : `${12 - monthDiff * -1} month`;
        const days =
          new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() -
          date.getDate() +
          now.getDate();
        return days > 1 ? `${days} days` : `${days} day`;
      }
      return yearDiff > 1 ? `${yearDiff} years` : `${yearDiff} year`;
    }
    if (monthDiff)
      return monthDiff > 1 ? `${monthDiff} months` : `${monthDiff} month`;
    if (dayDiff) return dayDiff > 1 ? `${dayDiff} days` : `${dayDiff} day`;

    return '0 days';
  }
}
