---
toc: content
order: 13
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# DragTel 拖拽模版

## 介绍

在工作中可能需要遍历很多标签，需要封一个组件直接传递数据，方便使用。

## 代码演示

### 基础用法

```tsx
import React, { useState } from 'react';
import { DragTel, TagTel } from 'dumiCompoent';

const App: React.FC = () => {
  const [list, setlist] = useState<{ id: string; value: string }[]>([
    { id: '123121231', value: 'Jack' },
    { id: '345345', value: 'Join' },
    { id: '2312', value: 'xiaohong' },
    { id: '7867', value: 'ming' },
  ]);
  return (
    <div className="down" style={{ display: 'flex', alignItems: 'center' }}>
      <DragTel
        list={list}
        onChange={(items) => {
          console.log(items, 'dnd');
          setlist(items);
        }}
      />
    </div>
  );
};
export default App;
```


## API

| 参数     | 说明         | 类型                    | 默认值 |
| :------- | :----------- | :---------------------- | :----- |
| list     | 需要拖拽的数组 | Array<{ id: string; value: string }> | []     |
| onChange | 拖拽完成后的回调 | (items: Array<{ id: string; value: string }>) => void | -      |

## 注意事项

- 组件内部使用了 `TagTel`，当自己开发的时候需要把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 拖拽完成后的回调会返回拖拽完成后的数组，记得更新一下`list`数组.
- 如果需要自定义组件，请把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 最重要的一点你的数据中必须包含 `id` 这个字段，因为内部使用了 `id` 来判断是否是同一个元素。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
