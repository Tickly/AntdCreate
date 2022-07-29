import Vue, { VNode } from 'vue';
import { ColumnConfig, Slot } from '..';

export interface AntdvColumnConfig {
  title?: string | Slot;
  customRender?: (text: any, record: any, index: number) => void;
}

export default class Column {
  public config: ColumnConfig;
  public vm = new Vue();

  constructor(config: ColumnConfig) {
    this.config = config;
  }

  customRender(text: any, record: any, index: number): VNode | number | string {
    return text;
  }

  toAntdColumn(): AntdvColumnConfig {
    return Object.assign(
      {},
      {
        customRender: this.customRender.bind(this.vm),
      },
      this.config
    );
  }
}
