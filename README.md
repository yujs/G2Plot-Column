# G2Plot-Column

> Plugin based on G2Plot v2. 更多配置请参考[G2Plot文档](https://g2plot.antv.vision/zh/examples/column/basic#basic)

<img src="asset/demo.png" />

## Install

```bash
$ npm i --save g2plot-column
```

## Usage

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
    data,// 数据源，字段symbol设置图标
    xField: 'name',// x轴字段
    yField: 'value',// y轴字段
    height: 600,
    curvature: 0.8,//曲率，取值范围0—1，取0时是三角形
    autoFit: true,//自适应宽度
    symbolSize: [40, 40],// symbol图标尺寸[width,height]
    //padding: 40, //发现顶部图标被挡住的时候 暂时可以设置一个padding解决
  },
  adaptor,
  defaultOptions,
);

column.render();

```


