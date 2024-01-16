---
toc: content
order: 10
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# InputNumber 数字输入框

## 介绍

数字输入框类型组件，在工作中使用该组件是最常见的。但是在控制限制输入时往往是最麻烦的，这边已经给你封装好了，只需要传入一个`onChange`事件，然后在里面进行控制即可。

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { InputNumber } from 'dumiCompoent';
import { message} from 'antd';

const App: React.FC = () => {
  return (
    <InputNumber
      style={{ width: '180px' }}
      onChange={(e: any) => {
        if (e > 100) {
          message.destroy()
          message.error('超出最大数量100');
          return Promise.reject();
        }
        return Promise.resolve(e);
      }}
      value={''}
    />
  );
};
export default App;
```
## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| value | 输入框的值 | number | '' |
| defaultValue | 输入框的默认值 | number | '' |
| onChange | 输入框的值变化时触发的回调函数 | (value: number) => void | - |
| placeholder | 输入框的占位符 | string | '' |
| disabled | 禁用 | boolean | false |

## 注意事项

- 该组件是基于`antd`的`Input`组件封装的，所以`Input`的所有属性都可以直接使用。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
