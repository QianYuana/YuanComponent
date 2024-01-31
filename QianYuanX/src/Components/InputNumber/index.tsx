import { Input } from 'antd';
import React, { useEffect, useState } from 'react';

interface IProps {
  value: any;
  onChanges: (value: any) => Promise<void>;
  placeholder?: string;
  style?: any;
  onChange: (value: any) => void;
}
const App: React.FC<IProps> = (props) => {
  const [state, setState] = useState(props.value || null);

  const onChange = (e: any) => {
    props.onChanges(e.target.value).then((value) => {
      setState(value);
    });
  };
  useEffect(() => {
    if (state !== null) {
      if (Object.keys(props).includes('onChange')) {
        props.onChange(state);
      }
    }
  }, [state]);
  return (
    <Input
      type="number"
      {...props}
      value={state}
      onChange={onChange}
      placeholder={props.placeholder || '请输入'}
    />
  );
};

export default App;
