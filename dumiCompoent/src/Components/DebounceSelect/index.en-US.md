---
toc: content
order: 15
group:
  title: Components
  
nav:
  title: Components
  path: /components
---

# DebounceSelect

## Introduction

There are many scenarios in the project that require dropdown queries, such as search boxes, dropdown selection boxes, etc. These scenarios are when users are searching for data and do not know what data the system has, so they need to create a dropdown fuzzy query component. When the user inputs a character that does not match the character in the list, the following will prompt that there is currently no data. If there is a match, the fuzzy query data will appear.

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
| list     | 需要拖拽的数组 | Array<{ id: string; value: string }> | []     |
| onChange | 拖拽完成后的回调 | (items: Array<{ id: string; value: string }>) => void | -      |

## 注意事项

- 组件内部使用了 `TagTel`，当自己开发的时候需要把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 拖拽完成后的回调会返回拖拽完成后的数组，记得更新一下`list`数组.
- 如果需要自定义组件，请把源码内部的组件换成需要拖拽的组件，例如 `TagTel`。
- 最重要的一点你的数据中必须包含 `id` 这个字段，因为内部使用了 `id` 来判断是否是同一个元素。
## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
