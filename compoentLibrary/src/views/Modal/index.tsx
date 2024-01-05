import React, { useState } from "react";
import ModalList from "./Modal.js";
import hljs from "highlight.js";
import { Collapse, Form, Button, message } from "antd";
import "highlight.js/styles/default.css"; // 引入默认样式
const { Panel } = Collapse;
function index(props) {
  const [loading, setloading] = useState(false);
  const [open, setopen] = useState(false);
  const onChange = (key) => {
    hljs.initHighlightingOnLoad();
  };
  const onFinish = (values) => {
    setloading(true)
    setTimeout(()=>{
        setloading(false)
        setopen(false)
    },3000)
  };
  const modalCols = (modalKey) => {
    return [
      {
        title: "自定义标题",
        layout: "horizontal",
        initialValues: { licenseCode: "设置默认值" },
        listData: [
          {
            label: "自定义名称",
            name: "licenseCode",
            render: <span>插入需要放的组件（受控组件）</span>,
          },
          {
            label: "自定义名称",
            name: "time",
            render: <span>插入需要放的组件（受控组件）</span>,
          },
        ],
      },
    ][modalKey];
  };
  const content = `
  import React, { useEffect, useState } from "react";
  import { Button, Modal, Form} from "antd";
  import styled from "./main.module.css";
  function ModalList(props) {
    const { visible, loading } = props;
    const [List, setList] = useState([]);
    const [form] = Form.useForm();
    useEffect(() => {
      setList(props.data.listData);
    }, [props]);
    const onFinish = (values) => {
      props.onFinish(values);
    };
    return (
      <>
        {/* 续期 */}
        <Modal
          visible={visible}
          title={props.data.title}
          onCancel={() => props.onCancel()}
          footer={null}
          width={450}
        >
          <Form
            layout={props.data.layout}
            initialValues={props.data.initialValues}
            form={form}
            onFinish={onFinish}
          >
            {List.map(({ label, name, initialValue, render }) => (
              <Form.Item label={label} name={name}>
                {render}
              </Form.Item>
            ))}
            <Form.Item>
              <div className={styled.subit}>
                <Button htmlType="back" onClick={() => props.onCancel()}>
                  取消
                </Button>
                <Button htmlType="submit" type="primary" loading={loading}>
                  提交
                </Button>
              </div>
            </Form.Item>
          </Form>
        </Modal>
      </>
    );
  }
  
  export default ModalList;
  
  .subit {
    padding: 24px 0 0;
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  .subit button {
    margin-left: 20px;
  }
      
      `;
  return (
    <Collapse defaultActiveKey={["1"]}>
      <Panel header="modal注入form组件" key="1">
        <Button type="primary" onClick={() => setopen(true)} style={{marginBottom:'20px'}}>
          打开对话框
        </Button>
        <ModalList
          visible={open}
          data={modalCols(0)}
          onFinish={onFinish}
          loading={loading}
          onCancel={() => setopen(false)}
        />
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
import ModalList from "./Modal.jsx";
const [loading, setloading] = useState(false);
const [open, setopen] = useState(false);

const onFinish = (values) => {
    console.log(values);
    setloading(true)
    setTimeout(()=>{
        setloading(false)
        setopen(false)
    },3000)
};
const modalCols = modalKey => {
console.log(modalKey);
return [
    {
    title: '自定义标题',
    layout: 'horizontal',
    initialValues: { licenseCode:'设置默认值' },
    listData: [
        {
        label: '自定义名称',
        name: 'licenseCode',
        render: <span>插入需要放的组件（受控组件）</span>,
        },
        {
        label: '自定义名称',
        name: 'time',
        render: (
            <span>插入需要放的组件（受控组件）</span>,
        )
        }
    ]
    }
][modalKey];
};                   
<Button
    type="primary"
    onClick={() =>
        setopen(true)
    }
    >
    打开对话框
</Button>
<ModalList visible={open} data={modalCols(0)} onFinish={onFinish} loading={loading} onCancel={()=>setopen(false)} />
`}</code>
            </pre>
          </Panel>
        </Collapse>
      </Panel>
    </Collapse>
  );
}

export default index;
