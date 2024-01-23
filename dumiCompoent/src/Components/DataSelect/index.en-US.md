---
toc: content
order: 14
group:
  title: Components
  
nav:
  title: Components
  path: /components
---

# DataSelect

## Introduction

In work, many dropdown boxes are not fixed in value but are provided by a certain data source, so we need to process the data into a dropdown box data source. Therefore, DataSelect is a component developed to solve this problem.

## Code Demonstration

### Basic Usage


```tsx
import * as React from 'react';
import { DataSelect } from 'dumiCompoent';;

const App: React.FC = () => {
  const options = [
    { code: '1', name: '1号楼' },
    { code: '2', name: '2号楼' },
    { code: '3', name: '3号楼' },
    { code: '4', name: '4号楼' },
  ];
  return (
    <DataSelect
      option={options}
      onChange={(val) => {
        console.log(val);
      }}
    />
  );
};
export default App;
```
### Usage in Forms

```tsx
import * as React from 'react';
import { InputNumber } from 'dumiCompoent';
import { message,Form } from 'antd';

const App: React.FC = () => {
  return (
    <Form>
      <Form.Item label="排序号" name="sort">
        <InputNumber
          placeholder="请输入排序号"
          style={{ width: '180px' }}
          onChanges={(val) => {
            if (val < 0) {
              message.destroy();
              message.error('排序号必须大于0');
              return Promise.reject();
            }
            return Promise.resolve(val);
          }}
        />
      </Form.Item>
    </Form>
  );
};
export default App;
```

### API

| Parameter | Explanation | Type | Default Value |
| :--- | :--- | :--- | :--- |
| value | The value of the input box. | number | '' |
| defaultValue | The default value of the input box. | number | '' |
| onChange | The callback function triggered when the value of the Form box changes. | (value: number) => void | - |
| onChanges | The callback function triggered when the value of the input box changes. | (value: number) => void | - |
| placeholder | The placeholder of the input box. | string | '' |
| disabled | Whether to disable the input box. | boolean | false |

## Precautions

- This component is based on the `Input` component of `antd`, so all the properties of `Input` can be used directly.

## Finally

If you think it's good, you can click the "Star" button on the top right to support it, thank you.
