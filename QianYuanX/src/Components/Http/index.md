---
toc: content
order: 18
group:
  title: 组件

nav:
  title: 组件
  path: /components
---

# Http 数据请求

## 介绍

每个项目在搭建时都需要封装该项目的`http请求`,这里封装了一下大部分场景的`原生Ajax`,目前封装了`get`,`post`,还有`ajax(通用)`,在使用的时候可以直接在源码中进行修改，封装符合项目的`http`

## 代码演示

### get 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Http.get('http://47.97.251.117:3000/h_patient', {
      data: {
        doctor: '贾梦源',
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 1,
      },
    })
      .then((res) => {
        console.log(res, 'GET请求');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.log(err, 'GET请求错误');
        setText('GET请求错误');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>GET请求:</p>
      <p>结果：{text}</p>
    </div>
  );
};
export default App;
```

### post 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Http.post('http://47.97.251.117:8100/add', {
      data: {
        doctor: '贾梦源',
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 1,
      },
    })
      .then((res) => {
        console.log(res, 'POST请求');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.log(err, 'POST请求错误');
        setText('POST请求错误');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p>POST请求:</p>

      <p>结果：{text}</p>
    </div>
  );
};
export default App;
```

### ajax 请求用法

```tsx
import React, { useState, useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
  const [text, setText] = useState('');
  useEffect(() => {
    Http.ajax('http://47.97.251.117:3000/h_patient', {
      method: 'GET',
      data: {
        doctor: '贾梦源',
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 1,
      },
    })
      .then((res) => {
        console.log(res, 'ajax请求');
        setText(JSON.stringify(res.response));
      })
      .catch((err) => {
        console.log(err, 'ajax请求错误');
        setText('ajax请求错误');
      });
  }, []);
  return (
    <div className="down" style={{ alignItems: 'center' }}>
      <p> ajax请求：</p>
      <p>结果：{text}</p>
    </div>
  );
};
export default App;
```

## API

| 参数     | 说明             | 类型                                                  | 默认值 |
| :------- | :--------------- | :---------------------------------------------------- | :----- |
| list     | 需要拖拽的数组   | Array<{ id: string; value: string }>                  | []     |
| onChange | 拖拽完成后的回调 | (items: Array<{ id: string; value: string }>) => void | -      |

## 注意事项

- 组件内部使用了 `TagTel`，当自己开发的时候需要把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 拖拽完成后的回调会返回拖拽完成后的数组，记得更新一下`list`数组.
- 如果需要自定义组件，请把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 最重要的一点你的数据中必须包含 `id` 这个字段，因为内部使用了 `id` 来判断是否是同一个元素。

## 最后

如果您觉得不错，可以点击右上角**Star**支持一下，谢谢。
