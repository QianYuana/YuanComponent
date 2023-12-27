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
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Select
          defaultValue={this.state.type}
          style={{
            width: 130,
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
          style={{ width: 180, marginRight: 10, display: this.state.type == 'day' ? 'block' : 'none' }}
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
      </div>
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
