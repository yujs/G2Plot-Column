import { Options, Data } from '@antv/g2plot';

export interface ColumnOptions
  extends Omit<Options, 'data' | 'xField' | 'yField' | 'xAxis' | 'yAxis' | 'axis' | 'legend' | 'tooltip' | 'label'> {
  readonly data: Data;
  /** 曲率 0-1 最大曲率为1时是三角形*/
  readonly curvature?: number;
}
