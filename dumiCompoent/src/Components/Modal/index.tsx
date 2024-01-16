import { Button, Form, Modal } from 'antd';
import React, { useEffect, useState } from 'react';
import './main.css';
function ModalList(props: any) {
  const { open, loading } = props;
  const [List, setList] = useState([]);
  const [form] = Form.useForm();
  useEffect(() => {
    setList(props.data.listData);
  }, [props]);
  const onFinish = (values: any) => {
    props.onFinish(values);
  };
  return (
      <Modal
        open={open}
        title={props.data.title}
        onCancel={() => props.onCancel()}
        footer={null}
        width={520}
      >
        <Form
          layout={props.data.layout}
          initialValues={props.data.initialValues}
          form={form}
          onFinish={onFinish}
        >
          {List &&
            List.map(({ label, name, render , rules}, index) => (
              <Form.Item label={label} name={name} key={index} rules={rules || []}>
                {render}
              </Form.Item>
            ))}
          <Form.Item>
            <div className="subit">
              <Button htmlType="button" onClick={() => props.onCancel()}>
                取消
              </Button>
              <Button htmlType="submit" type="primary" loading={loading}>
                提交
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Modal>
  );
}

export default ModalList;
