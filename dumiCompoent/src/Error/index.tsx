import { FC } from 'react';
import { Result } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';

const Error404: FC = () => (
  <div>
    <Result
      status="404"
      title="404"
      subTitle="对不起, 页面被外星人劫持了."
      extra={<Link to="/">返回主页</Link>}
    />
  </div>
);

export default Error404;
