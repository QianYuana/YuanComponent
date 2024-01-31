/* eslint-disable @typescript-eslint/no-unused-expressions */
import { Empty, Select, Spin } from 'antd';
import axios from 'axios';
import { debounce } from 'lodash';
import React, { useEffect, useMemo, useRef, useState } from 'react';
interface IAppProps {
  debounceTimeout: number;
  type: string;
}
declare global {
  interface Window {
    currentEntId: string;
    userInfo: {
      storageName: string;
      storageId: string;
    };
  }
}

const DebounceSelect: React.FC<IAppProps> = (props) => {
  const { debounceTimeout } = props;
  const [fetching, setFetching] = useState(false);
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(0);
  const fetchOptions = async (value: string) => {
    return axios('http://47.97.251.117:3000/h_patient', {
      params: {
        doctor: '贾梦源',
        type: props.type,
        val7: value || undefined,
        val1: '请选择',
        val2: '请选择',
        val3: '请选择',
        val4: '请选择',
        page: 1,
        size: 10,
      },
    });
  };
  const filiter = (options:any[]): {label: string, value: string}[] => {
    let arr = options.map((item: any) => {
      return { label: item.patient, value: item.cardid };
    });
    return arr;
  };
  const debounceFetcher = useMemo(() => {
    const loadOptions = (value: string) => {
      fetchRef.current += 1;
      const fetchId = fetchRef.current;
      setOptions([]);
      setFetching(true);

      fetchOptions(value).then((newOptions) => {
        if (fetchId !== fetchRef.current) {
          return;
        }
        const newOption:any = filiter(newOptions.data);
        newOptions.data && setOptions(newOption);
        setFetching(false);
      });
    };

    return debounce(loadOptions, debounceTimeout);
  }, [fetchOptions, debounceTimeout]);
  useEffect(() => {
    axios('http://47.97.251.117:3000/h_patient', {
      params: {
        doctor: '贾梦源',
        page: 1,
        size: 10,
      },
    }).then((newOptions: any) => {
      console.log(newOptions);
      const newOption:any = filiter(newOptions.data);
      setOptions(newOption);
    });
  }, []);
  return (
    <Select
      labelInValue
      showSearch
      filterOption={false}
      onSearch={debounceFetcher}
      notFoundContent={
        fetching ? (
          <Spin spinning={fetching} size="small" />
        ) : (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        )
      }
      {...props}
      options={options}
    />
  );
};
DebounceSelect.defaultProps = {
  debounceTimeout: 800,
  type: '0',
};

export default DebounceSelect;
