---
toc: content
order: 1
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useFocus 焦点

## 介绍

`useFocus` 是一个用于判断当前点击位置是否在指定区域内的`Hooks`，可以用于判断点击位置是否在指定区域，从而实现一些功能。
在工作中，我们经常会遇到焦点事件，又因为他处理起来比较麻烦，所以把它封装起来，欢迎大家使用`useFocus`来处理焦点事件。

## 代码演示

### 基础用法

```tsx
import React, { useState } from 'react';
import { useKey } from 'qianyuanx';

const App: React.FunctionComponent = () => {
  const [num, setNum] = useState(0);
  const onSearch = () => {
    setNum(num + 1);
    console.log('您按下了回车键盘！');
  };
  useKey('Enter', onSearch);
  return (
    <>
      <p>请按回车</p>
      <p>计数：{num}</p>
    </>
  );
};

export default App;
```

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
