---
toc: content
order: 1
nav:
  title: Hooks
  path: /hooks
  order: 4
---

# useFocus 

```tsx
import React, { useEffect, useState, useRef } from 'react';
import useFocus from './index.tsx';

const App: React.FunctionComponent = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState(false);
  let Bool = useFocus(divRef);
  return (
    <div
      onClick={() => {
        setStatus(Bool);
      }}
    >
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', backgroundColor: 'red' }}
      >
        div1区域
      </div>
      <p style={{ marginTop: '20px' }}>
        当前点击位置是否在div1区域：{status.toString()}
      </p>
    </div>
  );
};

export default App;
```
