import React, { useEffect, useState } from 'react';

interface IAppProps {
  current: any;
}

const App: React.FunctionComponent<IAppProps> = (RomRef) => {
  let [Bool, setBool] = useState(false);
  const handleClickOutSide = (e: MouseEvent) => {
    // 判断用户点击的对象是否在DOM节点内部
    if (RomRef.current?.contains(e.target as Node)) {
      // console.log("点击了DOM里面区域");
      setBool(true);
      return true;
    }
    //   console.log("点击DOM外面区域");
    setBool(false);
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  }, []);
  return Bool;
};

export default App;
