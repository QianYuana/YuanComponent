---
toc: content
order: 2
group:
  title: 创建React元素
nav:
  title: React源码
  path: /sourceCode
  order: 5
---
# reactElement

当 createElement 函数被调用的时候, 最后会调用  ReactElement 方法返回 ReactElement 对象
```ts
/**
 * 接收参数 返回 ReactElement
 */
const ReactElement = function (type, key, ref, self, source, owner, props) {
  const element = {
    /**
     * 组件的类型, 十六进制数值或者 Symbol 值
     * React 在最终在渲染 DOM 的时候, 需要确保元素的类型是 REACT_ELEMENT_TYPE
     * 需要此属性作为判断的依据
     */
    $$typeof: REACT_ELEMENT_TYPE,

    /**
     * 元素具体的类型值 如果是元素节点 type 属性中存储的就是 div span 等等
     * 如果元素是组件 type 属性中存储的就是组件的构造函数
     */
    type: type,
    /**
     * 元素的唯一标识
     * 用作内部 vdom 比对 提升 DOM 操作性能
     */
    key: key,
    /**
     * 存储元素 DOM 对象或者组件 实例对象
     */
    ref: ref,
    /**
     * 存储向组件内部传递的数据
     */
    props: props,

    /**
     * 记录当前元素所属组件 (记录当前元素是哪个组件创建的)
     */
    _owner: owner,
  };
  // 返回 ReactElement
  return element;
};
```