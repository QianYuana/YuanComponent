import React, { useEffect } from "react";
import MonthSelect from "./MonthSelect";
import hljs from "highlight.js";
import { Collapse, Form,Button,message } from "antd";
import "highlight.js/styles/default.css"; // 引入默认样式
const { Panel } = Collapse;
function index(props) {
  const onChange = (key) => {
    // console.log(key);
    hljs.initHighlightingOnLoad();
  };
  const content = `
// 封装自定义月份组件
import React, { useEffect, useState } from 'react';
import { InputNumber, Select, message } from 'antd';
const MonthSelect = props => {
  const [month, setmonth] = useState(false); //自定义时长
  const [time, settime] = useState(12); //月份
  useEffect(() => {
    props.onChange(time);
    props.changTime(time);
  }, [time]);
  useEffect(()=>{
    props.onChange(time);
  },[])
  useEffect(() => {
    if (props.value == undefined) {
      settime(12);
    }
  }, [props.value]);
  const handleChange = value => {
    //自定义时长
    if (value == '自定义时长') {
      setmonth(true);
      settime(12);
    } else {
      month == true ? setmonth(false) : console.log();
      value == '一年（12个月）'
        ? settime(12)
        : value == '二年（24个月）'
        ? settime(24)
        : value == '三年（36个月）'
        ? settime(36)
        : '';
    }
  };
  const changemonth = value => {
    if (value != null) {
      settime(value);
    } else {
      message.info('月份不能为空');
    }
  };
  return (
    <>
      <Select
        defaultValue="一年（12个月）"
        style={{
          width: 300
        }}
        onChange={handleChange}
        options={[
          {
            value: '一年（12个月）',
            label: '一年（12个月）'
          },
          {
            value: '二年（24个月）',
            label: '二年（24个月）'
          },
          {
            value: '三年（36个月）',

            label: '三年（36个月）'
          },
          {
            value: '自定义时长',
            label: '自定义时长'
          }
        ]}
      />
      <span style={{ display: month == true ? '' : 'none' }}>
        <InputNumber min={1} max={12} defaultValue={12} onChange={changemonth} /> &nbsp;&nbsp;个月
      </span>
    </>
  );
};

export default MonthSelect;
	`;
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="自定义月份组件" key="1">
        <Form>
          <Form.Item label={"自定义月份组件"} name={"time"}>
            <MonthSelect
              changTime={(time) => {
                // console.log(time);
              }}
            ></MonthSelect>
          </Form.Item>
        </Form>
        <Collapse onChange={onChange}>
          <Panel header="代码" key="11">
          <Button type="primary" shape="round" onClick={()=>navigator.clipboard.writeText(content).then(()=>{ message.success('复制成功')})}>
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
<Form>
  <Form.Item label={"自定义月份组件"} name={"time"}>
    <MonthSelect
      changTime={(time) => {
        console.log(time);
      }}
    ></MonthSelect>
  </Form.Item>
</Form>`}</code>
            </pre>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
}

export default index;
