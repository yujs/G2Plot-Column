import { Options, Data } from '@antv/g2plot';

export interface ColumnOptions extends Options {
  /** 数据源 [{symbol:string}] 其中symbol是设置图标字段 */
  readonly data: Data;
  /** x轴字段 */
  readonly xField: string;
  /** y轴字段 */
  readonly yField: string;
  /** 曲率 0-1 最小曲率为0时是三角形*/
  readonly curvature?: number;
  /** 顶部图片尺寸 [width,height] */
  readonly symbolSize?: number[];
}
