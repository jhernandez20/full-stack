import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform {

  now: any = moment().format('DD/MM/YYYY HH:mm:ss');
  midnight: any = moment().startOf('day');
  midnightBefore: any = moment().subtract(1, 'day');

  transform(createAd: Date): any {

    if (createAd) {

      const seconds = Math.floor((+new Date() - +new Date(createAd)) / 1000);
      const timeToday = moment(this.now, 'DD/MM/YYYY HH:mm:ss').diff(moment(this.midnight, 'DD/MM/YYYY HH:mm:ss'));
      const timebefore = moment(this.now, 'DD/MM/YYYY HH:mm:ss').diff(moment(this.midnightBefore, 'DD/MM/YYYY HH:mm:ss'));
      const today = moment(timeToday).unix();
      const antesdeayer = moment(timebefore).unix();
      const beforeYesterday = antesdeayer + today;

      if (today > seconds) {
        return moment(createAd).format('HH:mm a');
      }
      if (seconds < beforeYesterday) {
        return moment(createAd).subtract('days').calendar({ lastDay: '[Yesterday]' });
      }
      if (seconds > beforeYesterday) {
        return moment(createAd).format('MMM DD');
      }
    }
    return createAd;
  }

}
