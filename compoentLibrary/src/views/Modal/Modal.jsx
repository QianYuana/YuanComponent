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
