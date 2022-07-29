import moment from 'moment';
import Column from './Column';

export default class DateColumn extends Column {
  customRender(text: any, record: any, index: number): string {
    return moment(text).format('YYYY-MM-DD');
  }
}
