import { VNode } from 'vue';
import Column, { AntdvColumnConfig } from './Columns/Column';
import SerialColumn from './Columns/SerialColumn';
import DateColumn from './Columns/DateColumn';
import LinkColumn from './Columns/LinkColumn';

export type Slot = () => VNode;

interface ColumnSlotsConfig {
  title: string;
}
interface ColumnScopedSlotsConfig {
  customRender: string;
}

export interface ColumnConfig {
  type?: string;
  key?: string;
  title?: string | Slot;
  dataIndex?: string;
  slots?: ColumnSlotsConfig;
  scopedSlots?: ColumnScopedSlotsConfig;
}

export function UseColumns(
  cols: Array<string | ColumnConfig>
): Array<AntdvColumnConfig> {
  return cols.map((col) => {
    if (typeof col === typeof '') {
      if (col === '#') {
        const c = new SerialColumn();
        return c.toAntdColumn();
      }
    } else {
      col = col as ColumnConfig;
      if (col.type === 'date') {
        const c = new DateColumn(col);
        return c.toAntdColumn();
      }
      if (col.type === 'link') {
        return new LinkColumn(col).toAntdColumn();
      }
    }

    return col as AntdvColumnConfig;
  });
}

export const ColumnManager = {};

export function RegisterColumn(type: string, columnClass: Column): void {}
