import Column from './Column';
import numeral from 'numeral';
export default class NumberColumn extends Column {
  public customRender(value: number): string {
    return numeral(value).format('0,0');
  }
}
