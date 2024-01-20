import React,{useState,useEffect} from "react";
import { Select } from "antd";

interface IAppProps {
  option: any;
  onChange?: any;
}

const App: React.FunctionComponent<IAppProps> = (props) => {
  const [items,setItems]=useState<any[]>([])
  const filiter = (option: any[]): any[] => {
    let arr=option.map((item: any) => {
     return {value:item.code,label:item.name}
    });
    return arr;
  };
  useEffect(() => {
    setItems(filiter(props.option));
  }, [props.option]);
  return (
    <Select
      defaultValue={items[0]}
      style={{ width: 120 }}
      onChange={props.onChange}
      options={items}
      {...props}
    />
  );
};

export default App;
