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

现在项目中有很多需要下拉查询的场景，比如搜索框，下拉选择框等，这些场景是用户在搜索数据的时候，不知道系统有哪些数据，所以需要做一个下拉模糊查询组件，当用户输入字符和列表中的字符不匹配时，下面就会提示暂无数据，如果匹配的话就会出现模糊查询的数据。

## 代码演示

### get请求用法

```tsx
import React, { useState,useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
    useEffect(()=>{
        Http.get('http://47.97.251.117:3000/h_patient', {
            data: {
                doctor: '贾梦源',
                val1: '请选择',
                val2: '请选择',
                val3: '请选择',
                val4: '请选择',
                page: 1,
                size: 10,
            },
        }).then((res) => {
            console.log(res,'GET请求')
        })
    },[])
    return (
        <div className="down" style={{ display: 'flex', alignItems: 'center' }}>
            GET请求
        </div>
    );
};
export default App;
```
### post请求用法
```tsx
import React, { useState,useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
    useEffect(()=>{
        Http.post('http://47.97.251.117:8100/add', {
            data: {
                doctor: '贾梦源',
                val1: '请选择',
                val2: '请选择',
                val3: '请选择',
                val4: '请选择',
                page: 1,
                size: 10,
            },
        }).then((res) => {
            console.log(res,'POST请求')
        })
    },[])
    return (
        <div className="down" style={{ display: 'flex', alignItems: 'center' }}>
            POST请求
        </div>
    );
};
export default App;
```
### ajax请求用法
```tsx
import React, { useState,useEffect } from 'react';
import { Http } from 'qianyuanx';

const App: React.FC = () => {
    useEffect(()=>{
        Http.ajax('http://47.97.251.117:3000/h_patient', {
            method: "GET",
            data: {
                doctor: '贾梦源',
                val1: '请选择',
                val2: '请选择',
                val3: '请选择',
                val4: '请选择',
                page: 1,
                size: 10,
            },
        }).then((res) => {
            console.log(res,'ajax请求')
        })
    },[])
    return (
        <div className="down" style={{ display: 'flex', alignItems: 'center' }}>
            ajax请求
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
