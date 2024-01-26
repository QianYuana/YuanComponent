---
toc: content
order: 13
group:
  title: Components
  
nav:
  title: Components
  path: /components
---

# DragTel

## Introduction

In work, it may be necessary to traverse many tags, and a component needs to be sealed to directly pass data, which is convenient to use.

## Code Demonstration

### Basic Usage

```tsx
import * as React from 'react';
import { TagTel } from 'dumiCompoent';
import { ArrowUpOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  return (
    <TagTel
      title="库存调成"
      icon={<ArrowUpOutlined style={{ color: 'rgba(112, 182, 3, 1)' }} />}
      onremove={(e) => {
        console.log(e);
      }}
    ></TagTel>
  );
};
export default App;
```
### Change icon
```tsx
import  React ,{useState} from 'react';
import { TagTel } from 'dumiCompoent';
import { ArrowUpOutlined,ArrowDownOutlined } from '@ant-design/icons';

const App: React.FC = () => {
  const [Lifting,setLifting]=useState("asc");
  return (
    <TagTel
      title="库存调成"
      onremove={(e) => {
        console.log(e);
      }}
      icon={
        Lifting == "asc" ? (
          <ArrowUpOutlined style={{ color: "rgba(112, 182, 3, 1)",fontWeight: "700" ,fontSize:14}} />
        ) : (
          <ArrowDownOutlined
            style={{ color: "rgba(2, 167, 240, 1)" ,fontWeight: "700",fontSize:14 }}
          />
        )
      }
      onSwitch={() => {
        let arr =Lifting == "asc" ? "desc" : "asc";
        setLifting(arr);
      }}
    ></TagTel>
  );
};
export default App;
```
### API

| Parameter | Description | Type | Default Value |
| --- | --- | --- | --- |
| title | Title | string | - |
| icon | Icon | ReactNode | - |
| onRemove | Click to delete callback | (e: MouseEvent) => void | - |
| onSwitch | Switch button callback | () => void | - |

## 注意事项

- 组件内部使用了 `TagTel`，当自己开发的时候需要把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 拖拽完成后的回调会返回拖拽完成后的数组，记得更新一下`list`数组.
- 如果需要自定义组件，请把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 最重要的一点你的数据中必须包含 `id` 这个字段，因为内部使用了 `id` 来判断是否是同一个元素。
## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
