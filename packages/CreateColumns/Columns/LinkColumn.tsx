import { VNode } from 'vue';
import Column from './Column';

export default class LinkColumn extends Column {
  customRender(text: any, record: any, index: number): string | number | VNode {
    return <a>{text}</a>;
  }
}
