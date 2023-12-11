import React, { useState, useEffect, useRef } from "react";
import { Button, message, Space } from "antd";
import "./WheelOfFortune.css";

const WheelOfFortune = () => {
  const pArray = useRef();
  useEffect(() => {
    pArray.current = document.querySelectorAll(".content>p");
  }, []);
  //   var pArray =
  var order = [0, 3, 6, 7, 8, 5, 2, 1];
  var num = 0; //遇到最后一个的次数
  var currentGrid = 0; // 当前所在格子
  var intervalId; // 计时器ID
  // 开始
  const lottery = (data) => {
    console.log(pArray);
    pArray.current[order[currentGrid]].style.backgroundColor = "";
    num = 0;
    currentGrid = 0;
    pArray.current[order[0]].style.backgroundColor = "red";
    pArray.current[4].style.pointerEvents = "none";
    intervalId = setInterval(() => {
      changeFrid(data);
    }, 100);
  };
  // 切换格子
  const changeFrid = (data) => {
    if (currentGrid == order.length - 1) {
      currentGrid = 0;
      pArray.current[order[order.length - 1]].style.backgroundColor = "";
      pArray.current[order[order.length - 1]].style.color = "#000";
    } else {
      pArray.current[order[currentGrid]].style.backgroundColor = "";
      pArray.current[order[currentGrid]].style.color = "#000";
      ++currentGrid;
    }
    pArray.current[order[currentGrid]].style.backgroundColor = "red";
    pArray.current[order[currentGrid]].style.color = "#fff";
    if (order[currentGrid] == 5) {
      ++num;
    }
    if (num == data + 1) {
      clearInterval(intervalId);
      pArray.current[4].style.pointerEvents = "";
      message.destroy();
      message.success({
        content: "恭喜您抽中了" + pArray.current[order[currentGrid]].innerHTML,
        style: {
          marginTop: "130px",
          marginLeft: "300px",
        },
      });
    }
  };

  return (
    <div className="wheel-container">
      <div className="content">
        <p>酸</p>
        <p>甜</p>
        <p>苦</p>
        <p>辣</p>
        <p onClick={() => lottery(7)}>抽奖</p>
        <p>酸</p>
        <p>甜</p>
        <p>苦</p>
        <p>辣</p>
      </div>
    </div>
  );
};

export default WheelOfFortune;
