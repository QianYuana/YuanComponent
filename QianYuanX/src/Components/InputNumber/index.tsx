import { Input } from 'antd';
import React, { useEffect, useState } from 'react';

interface IProps<T> {
  value: string | number | readonly string[] | undefined;
  onChanges: (value: T) => Promise<T>;
  placeholder?: string;
  style?: any;
  onChange: (value: any) => void;
}

const App: React.FC<IProps<string | number | readonly string[] | undefined>> = (props) => {
  const [state, setState] = useState(props.value || undefined);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    props.onChanges(e.target.value).then((value:string | number | readonly string[] | undefined) => {
      return setState(value);
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
