/* eslint-disable eqeqeq */
import React, { useRef, useState } from "react";
import {
  PlayCircleFilled,
  PauseCircleFilled,
  CheckCircleFilled,
} from "@ant-design/icons";
import './sound.less'
function index(props:any) {
  const { key, errKey, item, className } = props;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const itemRef = useRef();
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [paused, setPaused] = useState(false);
  const audioUpdate = () => {
    setPaused(false)
  };
  return (
    <li
      key={key}
      className={`${'base'} ${className || ''}`}
      onClick={() => {
        props.onClick(key);
      }}
    >
      <span>{item?.name}</span>
      <div className="icon">
        {paused ? (
          <PauseCircleFilled
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              color: errKey == index ? "#fff" : "",
            }}
            onClick={() => {
              itemRef.current.pause();
              setPaused(false);
            }}
          />
        ) : (
          <PlayCircleFilled
            style={{
              fontSize: "20px",
              marginLeft: "8px",
              color: errKey == index ? "#fff" : "",
            }}
            onClick={() => {
              itemRef.current.play();
              setPaused(true);
            }}
          />
        )}
        <audio ref={itemRef} src={item?.audio}  onPause={()=>audioUpdate()}></audio>
        <CheckCircleFilled
          style={{
            fontSize: "20px",
            marginLeft: "8px",
            // eslint-disable-next-line eqeqeq
            color: errKey == index ? "#fff" : "",
          }}
        />
      </div>
    </li>
  );
}

export default index;
