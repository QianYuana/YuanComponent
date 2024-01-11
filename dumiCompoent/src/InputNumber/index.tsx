
import { Input } from 'antd';
import React,{useState} from 'react';

interface IProps {
    value: any;
    onChange: (value: any) => Promise<void>;
    placeholder?: string;
}
const App: React.FC<IProps> = (props) =>{
    const [state, setState] = useState(props.value || null);

const onChange = (e: any) => {
    props.onChange(e.target.value).then((value) => {
        setState(value);
    });
};
    return <Input type = "number" {...props}  value={state} onChange={onChange} placeholder={props.placeholder || "请输入"} />;
} 

export default App;