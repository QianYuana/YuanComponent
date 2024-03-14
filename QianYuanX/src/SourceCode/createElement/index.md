---
toc: content
order: 1
group:
  title: 创建React元素
nav:
  title: React源码
  path: /sourceCode
  order: 5
---

# createElement

## 创建元素

为了了解 React.createElement 这个方法，我们自己手动去实现一个简易版的。

OK，首先我们通过 React.createElement 方法创建一个 React 元素，并且打印出来：

<!-- <code src="./demo.ts"></code> -->

```tsx
import React from 'react';
const APP = () => {
  const b = React.createElement('div', { data: '1234' }, '创建的div元素');
  console.log(b);
  return b;
};
export default APP;
```

**打开控制台查看结果**

项目中使用：

```ts
const _getTable = (sizeDisplayMethod) => {
  return React.createElement(AntdTable, {
    key: tableKey,
    maxHeight: tableHeight,
    isMultiLine: isMultiLine,
    rowKey,
    columns: getTableColumns(),
    dataSource: datas.data || [],
    totalData: datas.summary,
    rowSelection:
      rowSelection === false
        ? false
        : {
            fixed: true,
            type: rowType,
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
              setState({ selectedRowKeys, selectedRows });
            },
          },
    isShowTotal: (props.extraDatas || {}).summary,
    isSubTotalEnable,
  });
};
```

## 源码解析

**源码中 16.8 比 16.3 多了一种开发环境中元素类型的判断来触发警告**  
**注意：** 在 React 16.8 版本中引入了 `enableRefAsProp` 控制属性的原因是为了在过渡阶段提供更好的向后兼容性。这个属性的作用是控制是否启用 `ref` 作为属性（即将 `ref` 视为普通属性）。

在 React 16.3 之前，`ref` 是作为一个特殊的属性处理的，即你可以直接在元素上定义 `ref` 属性来获取对该元素的引用。但是从 React 16.3 开始，React 引入了新的 `ref` API，允许通过 `React.createRef`() 或回调函数的方式来创建 `ref`，以替代直接定义 `ref` 属性。这样做的目的是为了提高 React 中对 `ref` 的处理一致性和可预测性。

因此，在 React 16.8 中，引入了 `enableRefAsProp` 控制属性，以便于开发者可以逐步迁移到新的 `ref` API。当 `enableRefAsProp` 被打开时，React 会忽略 `ref` 属性，而是使用 props.`ref` 作为 `ref` 的来源。这样可以让开发者在不修改现有代码的情况下，逐步将 `ref` 替换为新的 API。

至于删除 `self` 和 `source` 属性，这是因为它们在 React 内部并没有被广泛使用，而且可能导致一些开发工具或环境的兼容性问题。因此，在 React 18 中，为了简化代码并减少潜在的问题，决定删除了这两个属性。通常情况下，这些属性对于 React 应用的开发者并不重要，因此删除它们不会对现有代码产生太大影响。

```ts
/**
 * 创建 React Element
 * type      元素类型
 * config    配置属性
 * children  子元素
 * 1. 分离 props 属性和特殊属性
 * 2. 将子元素挂载到 props.children 中
 * 3. 为 props 属性赋默认值 (defaultProps)
 * 4. 创建并返回 ReactElement
 */
export function createElement(type, config, children) {
  if (__DEV__) {
    if (!isValidElementType(type)) {
      // 这是一个无效的元素类型。
      //
      // 我们会在这种情况下发出警告，但不会抛出错误。我们期望元素的创建会成功，
      // 但可能在渲染时会出现错误。
      let info = '';
      if (
        type === undefined ||
        (typeof type === 'object' &&
          type !== null &&
          Object.keys(type).length === 0)
      ) {
        info +=
          ' 你可能忘记从定义组件的文件中导出你的组件，或者可能混淆了默认导出和命名导入。';
      }

      let typeString;
      if (type === null) {
        typeString = 'null';
      } else if (isArray(type)) {
        typeString = 'array';
      } else if (type !== undefined && type.$$typeof === REACT_ELEMENT_TYPE) {
        typeString = `<${getComponentNameFromType(type.type) || '未知'} />`;
        info = ' 你是否意外地导出了一个 JSX 字面量而不是一个组件？';
      } else {
        typeString = typeof type;
      }

      console.error(
        'React.createElement: 类型无效 -- 期望一个字符串（用于 ' +
          '内置组件）或一个类/函数（用于复合组件），但得到了: %s.%s',
        typeString,
        info,
      );
    } else {
      // 这是一个有效的元素类型。

      // 如果类型无效，则跳过键值警告，因为我们的键值验证逻辑不希望接收非字符串/函数类型，
      // 这可能会导致混乱的错误。我们不希望开发和生产环境的异常行为不同。
      // （渲染将抛出带有有用信息的错误，并且一旦类型被修复，键值警告将出现。）
      for (let i = 2; i < arguments.length; i++) {
        validateChildKeys(arguments[i], type);
      }
    }

    // 与 jsx() 运行时不同，createElement() 不会警告键值扩展。
  }

  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;

  if (config != null) {
    if (hasValidRef(config)) {
      if (!enableRefAsProp) {
        ref = config.ref;
      }

      if (__DEV__ && !disableStringRefs) {
        warnIfStringRefCannotBeAutoConverted(config, config.__self);
      }
    }
    if (hasValidKey(config)) {
      if (__DEV__) {
        checkKeyStringCoercion(config.key);
      }
      key = '' + config.key;
    }

    // Remaining properties are added to a new props object
    for (propName in config) {
      if (
        hasOwnProperty.call(config, propName) &&
        // Skip over reserved prop names
        propName !== 'key' &&
        (enableRefAsProp || propName !== 'ref') &&
        // Even though we don't use these anymore in the runtime, we don't want
        // them to appear as props, so in createElement we filter them out.
        // We don't have to do this in the jsx() runtime because the jsx()
        // transform never passed these as props; it used separate arguments.
        propName !== '__self' &&
        propName !== '__source'
      ) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  const childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    const childArray = Array(childrenLength);
    for (let i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    if (__DEV__) {
      if (Object.freeze) {
        Object.freeze(childArray);
      }
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type && type.defaultProps) {
    const defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (props[propName] === undefined) {
        props[propName] = defaultProps[propName];
      }
    }
  }
  if (__DEV__) {
    if (key || (!enableRefAsProp && ref)) {
      const displayName =
        typeof type === 'function'
          ? type.displayName || type.name || 'Unknown'
          : type;
      if (key) {
        defineKeyPropWarningGetter(props, displayName);
      }
      if (!enableRefAsProp && ref) {
        defineRefPropWarningGetter(props, displayName);
      }
    }
  }

  const element = ReactElement(
    type,
    key,
    ref,
    undefined,
    undefined,
    ReactCurrentOwner.current,
    props,
  );

  if (type === REACT_FRAGMENT_TYPE) {
    validateFragmentProps(element);
  }

  return element;
}
```
