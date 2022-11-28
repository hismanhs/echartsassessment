import React, { useRef, useEffect, useState } from "react";
import * as echarts from "echarts";
import { ApiResponse } from "./Util";
import ResizeComponet from "./CustomResize";

export default function Chart(props) {
  const echartsDom = useRef(null);
  const [boxSize, setBoxSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight - 100
  })
  useEffect(() => {
    run(ApiResponse);
  });
  useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  const handleResize = () => {
    let customHeight = window.innerHeight - 100
    setBoxSize({
      width: window.innerWidth,
      height: customHeight
    });
  };
  const run = (APIData) => {
    const myChart = echarts.init(echartsDom.current);
    const option = {
      tooltip: {
        trigger: "axis"
      },
      legend: {
        data: APIData.Label
      },
      toolbox: {
        show: true,
        feature: {
          dataView: { show: true, readOnly: false },
          magicType: { show: true, type: ["line", "bar"] },
          restore: { show: true },
          saveAsImage: { show: true }
        }
      },
      calculable: true,
      xAxis: [
        {
          type: "category",
          data: APIData.Month
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "Rainfall",
          type: "bar",
          data: APIData.Rainfall,
          markPoint: {
            data: [
              { type: "max", name: "Max" },
              { type: "min", name: "Min" }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }]
          }
        },
        {
          name: "Evaporation",
          type: "bar",
          data: APIData.Evaporation,
          markPoint: {
            data: [
              { name: "Max", value: 182.2, xAxis: 7, yAxis: 183 },
              { name: "Min", value: 2.3, xAxis: 11, yAxis: 3 }
            ]
          },
          markLine: {
            data: [{ type: "average", name: "Avg" }]
          }
        }
      ]
    };
    myChart.setOption(option);
    //pass data to resize Chart added 
    myChart.resize(boxSize);
  };


  return (
    <ResizeComponet
      handelSize={(size) => setBoxSize(size)}
    >
      <div ref={echartsDom} />
    </ResizeComponet>
  );
}
