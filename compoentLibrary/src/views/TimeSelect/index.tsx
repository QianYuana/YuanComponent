import React from "react";
import TimeSelect from "./TimeSelect";
import ReleaseSelect from "./ReleaseSelect";
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
  const content1 = `
  import React, { Component } from 'react';
  import { InputNumber, message, Select, DatePicker,Space } from 'antd';
  import moment from 'moment';
  export default class ReleaseSelect extends Component {
    state = {
        type: 'day', //day 天，monents 日期
        dayNum: 0,
        time:null
    };
    render() {
      return (
        <>
          <Select
            defaultValue={this.state.type}
            style={{
              width: 80,
              marginRight: 10,
            }}
            onChange={value => this.onRelease(value)}
            options={[
              {
                value: 'day',
                label: '几天以后',
              },
              {
                value: 'monents',
                label: '固定时间',
              },
            ]}
          />
          <InputNumber
            style={{ width: 150, marginRight: 10, display: this.state.type == 'day' ? 'block' : 'none' }}
            placeholder="请输入"
            min={0}
            value={this.state.dayNum}
            onChange={value => {
              if (value < 0 || value == null) {
                message.error('时间不能为空或不合法');
                value = 0;
              }
              this.setState({ type: 'day', dayNum: value },()=>this.props.onChange(this.state));
              console.log(value);
            }}
          />
          <Space direction="vertical">
            <DatePicker
              style={{ width: 150, marginRight: 10, display: this.state.type == 'monents' ? 'block' : 'none' }}
              showTime={{
                format: 'HH:mm',
              }}
              value={this.state.time ? this.state.time : null}
              format="YYYY-MM-DD HH:mm:ss"
              disabledDate={this.disabledDate}
              onChange={this.onChangeData}
              onOk={this.onChangeData}
            />
          </Space>
        </>
      );
    }
    onRelease = value => {
      if(value != this.state.type){
          this.setState({
              type: value,
              time: null,
              dayNum: 0
          },()=>this.props.onChange(this.state))
      }
    };
    onChangeData = (value) => {
      console.log(value);
      let datas = value ? moment(value._d).format('YYYY-MM-DD HH:mm:ss') : value;
      this.setState(
        {
            type: 'monents',
            time: value,
          },
        () => {
          this.props.onChange({type:this.state.type,time:datas});
        }
      );
    };
    disabledDate = current => {
      return current && current < Date.now();
    };
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
      <Panel header="可选择几天后或具体日期" key="2">
        <Form>
          <Form.Item label={"可选择几天后或具体日期"} name={"time"}>
            <ReleaseSelect
              onChange={(value) => {
                console.log(value);
              }}
            />
          </Form.Item>
        </Form>
        <Collapse onChange={onChange}>
          <Panel header="代码" key="21">
            <Button
              type="primary"
              shape="round"
              onClick={() =>
                navigator.clipboard.writeText(content1).then(() => {
                  message.success("复制成功");
                })
              }
            >
              复制
            </Button>
            <pre>
              <code className="javascript">{content1}</code>
            </pre>
          </Panel>
        </Collapse>
        <Collapse onChange={onChange}>
          <Panel header="使用" key="22">
            <pre>
              <code className="javascript">{`  
 <ReleaseSelect
  onChange={value => {
    console.log(value);
  }}
/>
`}</code>
            </pre>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
}

export default index;
