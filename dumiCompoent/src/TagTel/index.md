---
toc: content
order: 11
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# TagTel 标签模版

## 介绍

在工作中可能需要遍历很多标签，需要封一个组件直接传递数据，方便使用。

## 代码演示

### 基础用法

```tsx
import * as React from 'react';
import { TagTel } from 'dumiCompoent';
import { ArrowUpOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  return (
    <TagTel
      title="库存调成"
      icon={<ArrowUpOutlined style={{ color: 'rgba(112, 182, 3, 1)' }} />}
      onRemove={(e) => {
        console.log(e);
      }}
    ></TagTel>
  );
};
export default App;
```

## API

| 参数 | 说明 | 类型 | 默认值 |
| :--- | :--- | :--- | :--- |
| title | 标题 | string | - |
| icon | 图标 | ReactNode | - |
| onRemove | 点击删除回调 | (e: MouseEvent) => void | - |

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
