import { Params, G2 } from '@antv/g2plot';
import { ColumnOptions } from './types';

let currentOptions: ColumnOptions;
const defaultSymbolSize = [10, 10];

G2.registerShape('interval', 'custom', {
  // @ts-ignore
  getPoints(cfg) {
    const x = cfg.x;
    const y = cfg.y;
    const y0 = cfg.y0;
    const width = cfg.size;
    return [
      // @ts-ignore
      { x: x - width / 2, y: y0 },
      { x: x, y: y },
      // @ts-ignore
      { x: x + width / 2, y: y0 },
    ];
  },
  // 2. 绘制
  draw(cfg, group) {
    const { data } = cfg;
    let { symbolSize = defaultSymbolSize, curvature } = currentOptions;
    const symbolWidth = symbolSize[0];
    const symbolHeight = symbolSize[1];
    const points = this.parsePoints(cfg.points);
    const r = points[1].x - points[0].x;
    if (curvature > 1) {
      curvature = 1;
    }
    group.addShape('image', {
      attrs: {
        x: points[1].x - symbolWidth / 2,
        y: points[1].y - symbolHeight,
        width: symbolWidth,
        height: symbolHeight,
        img: data['symbol'],
      },
      ...cfg.defaultStyle,
    });
    group.addShape('path', {
      attrs: {
        path: [
          ['M', points[0].x, points[0].y],
          ['Q', points[1].x - r * curvature, points[0].y, points[1].x, points[1].y],
          ['Q', points[1].x + r * curvature, points[2].y, points[2].x, points[2].y],
        ],
        ...cfg.defaultStyle,
      },
    });
    return group;
  },
});

/**
 * 默认配置
 * @param options
 */
export const defaultOptions = {
  data: [],
  curvature: 0.2,
  autoFit: false,
  symbolSize: defaultSymbolSize,
};

/**
 * 适配器
 * @param params
 */
export function adaptor(params: Params<ColumnOptions>): Params<ColumnOptions> {
  const { chart, options } = params;
  const { data, xField, yField } = options;
  currentOptions = options;
  chart.data(data);
  chart.scale('sales', {
    nice: true,
  });
  chart.tooltip({
    showMarkers: false,
  });
  chart.interval().position(`${xField}*${yField}`).shape('custom');
  return params;
}
