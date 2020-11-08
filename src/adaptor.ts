import { Params, G2 } from '@antv/g2plot';
import { ColumnOptions } from './types';

let currentOptions: ColumnOptions;

G2.registerShape('interval', 'curve', {
  // @ts-ignore
  getPoints(cfg) {
    console.log(cfg);
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
    const points = this.parsePoints(cfg.points); // 将0-1空间的坐标转换为画布坐标
    const r = points[1].x - points[0].x;
    let { curvature } = currentOptions;
    if (curvature > 1) {
      curvature = 1;
    }
    console.log(currentOptions);
    const polygon = group.addShape('path', {
      attrs: {
        path: [
          ['M', points[0].x, points[0].y],
          ['Q', points[1].x - r * curvature, points[0].y, points[1].x, points[1].y],
          ['Q', points[1].x + r * curvature, points[2].y, points[2].x, points[2].y],
        ],
        ...cfg.defaultStyle,
      },
    });
    return polygon;
  },
});

/**
 * 默认配置
 * @param options
 */
export const defaultOptions = {
  curvature: 0.2,
  autoFit: true,
};

/**
 * 适配器
 * @param params
 */
export function adaptor(params: Params<ColumnOptions>): Params<ColumnOptions> {
  const { chart, options } = params;
  currentOptions = options;
  const { data } = options;
  chart.data(data);
  chart.scale('sales', {
    nice: true,
  });
  chart.tooltip({
    showMarkers: false,
  });
  chart.interaction('active-region');
  chart.interval().position('year*sales').shape('curve');
  return params;
}
