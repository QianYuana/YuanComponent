import React from "react";
import TimeSelect from "./TimeSelect";
import hljs from "highlight.js";
import { Collapse, Form, Button, message } from "antd";
import "highlight.js/styles/default.css"; // 引入默认样式
const { Panel } = Collapse;
function index(props) {
  const onChange = (key) => {
    // console.log(key);
    hljs.initHighlightingOnLoad();
  };
  const content = `
    import { DatePicker } from 'antd';
    import React, { useEffect, useState } from 'react';
    import styled from './main.module.less';
    
    //封装的日期组件
    const TimeSelect = props => {
      const [vals, setvals] = useState([]);
      useEffect(() => {
        props.onChange(vals);
      }, [vals]);
      useEffect(() => {
        // console.log(props.value);
        if (props.value == undefined) {
          setvals([]);
        }
      }, [props.value]);
      const disabledDate = current => {
        return current && current < vals[0];
      };
      const starttimechange = val => {
        //Wed Nov 08 2023 09:43:03 GMT+0800 (中国标准时间)
        vals.splice(0, 1, val);
      };
      const removetimechange = val => {
        //Wed Nov 08 2023 09:43:03 GMT+0800 (中国标准时间)
        vals.splice(1, 1, val);
      };
    
      return (
        <div className={styled.search}>
          <DatePicker
            onChange={starttimechange}
            format="YYYY-MM-DD "
            defaultValue={props.value ? props.value[0] : ''}
            value={vals[0]}
          />
          <span>-</span>
          <DatePicker
            format="YYYY-MM-DD "
            defaultValue={props.value ? props.value[1] : ''}
            disabledDate={disabledDate}
            onChange={removetimechange}
            value={vals[1]}
          />
        </div>
      );
    };
    export default TimeSelect;

    .search {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 500px;
      }
      .search span {
        display: flex;
        margin: 0 12px;
      }
      
      `;
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="分开的开始结束日期" key="1">
        <Form>
          <Form.Item label={"分开的开始结束日期"} name={"time"}>
            <TimeSelect />
          </Form.Item>
        </Form>
        <Collapse onChange={onChange}>
          <Panel header="代码" key="11">
            <Button
              type="primary"
              shape="round"
              onClick={() =>
                navigator.clipboard.writeText(content).then(() => {
                  message.success("复制成功");
                })
              }
            >
              复制
            </Button>
            <pre>
              <code className="javascript">{content}</code>
            </pre>
          </Panel>
        </Collapse>
        <Collapse onChange={onChange}>
          <Panel header="使用" key="12">
            <pre>
              <code className="javascript">{`  
<Form.Item label={"分开的开始结束日期"} name={"time"}>
   <TimeSelect/>
</Form.Item>`}</code>
            </pre>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
}

export default index;
