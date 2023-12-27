/* eslint-disable eqeqeq */
import { DatePicker } from 'antd';
import React, { useEffect, useState } from 'react';
import './main.less';

//封装的日期组件
const TimeSelect = (props: { onChange: (arg0: never[]) => void; value: any; }) => {
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
  const disabledDate = (current: any) => {
    return current && current < vals[0];
  };
  const starttimechange = (val: any | never ) => {
    //Wed Nov 08 2023 09:43:03 GMT+0800 (中国标准时间)
    vals.splice(0, 1, val);
  };
  const removetimechange = (val: any) => {
    //Wed Nov 08 2023 09:43:03 GMT+0800 (中国标准时间)
    vals.splice(1, 1, val);
  };

  return (
    <div className='search'>
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
