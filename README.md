# G2Plot-Column

> G2Plot-QRCode: plugin based on G2Plot v2. 

## Install

```bash
$ npm i --save g2plot-column
```


## Usage

 - render

```ts
import { P } from '@antv/g2plot';
import { defaultOptions, adaptor } from '../src';

const data = [
  { name: 'Internet Explorer',value: 26,symbol: 'https://gw.alipayobjects.com/zos/rmsportal/eOYRaLPOmkieVvjyjTzM.png'},
  { name: 'Chrome', value: 40, symbol: 'https://gw.alipayobjects.com/zos/rmsportal/dWJWRLWfpOEbwCyxmZwu.png' },
  { name: 'Firefox', value: 30, symbol: 'https://gw.alipayobjects.com/zos/rmsportal/ZEPeDluKmAoTioCABBTc.png' },
  { name: 'Safari', value: 24, symbol: 'https://gw.alipayobjects.com/zos/rmsportal/eZYhlLzqWLAYwOHQAXmc.png' },
  { name: 'Opera', value: 15, symbol: 'https://gw.alipayobjects.com/zos/rmsportal/vXiGOWCGZNKuVVpVYQAw.png' },
  { name: 'Undetectable', value: 8, symbol: 'https://gw.alipayobjects.com/zos/rmsportal/NjApYXminrnhBgOXyuaK.png' },
];

const column = new P(
  'app',
  {
    data,
    xField: 'name',
    yField: 'value',
    height: 600,
    curvature: 0.2,
    autoFit: true,
    symbolSize: [40, 40],
    //padding: 40, //发现顶部图标被挡住的时候 暂时可以设置一个padding解决
  },
  adaptor,
  defaultOptions,
);

column.render();

```


