import { P } from '@antv/g2plot';
import { defaultOptions, adaptor } from '../src';
const data = [
  { year: '1951 年', sales: 38 },
  { year: '1952 年', sales: 52 },
  { year: '1956 年', sales: 61 },
  { year: '1957 年', sales: 145 },
  { year: '1958 年', sales: 48 },
  { year: '1959 年', sales: 38 },
  { year: '1960 年', sales: 38 },
  { year: '1962 年', sales: 38 },
];

const column = new P(
  'app',
  {
    data,
    autoFit: true,
    height: 500,
    curvature: 1,
  },
  adaptor,
  defaultOptions,
);

column.render();
