import Column from './Column';

export default class SerialColumn extends Column {
  constructor() {
    super({
      title: '#',
    });
  }

  customRender(text: any, record: any, index: number): number {
    return index + 1;
  }
}
