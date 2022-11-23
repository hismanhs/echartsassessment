import React, { useRef, useEffect } from "react";
import * as echarts from "echarts";
import { ApiResponse } from "./Util";

export default function App() {
  const echartsDom = useRef(null);
  const [dimensions, setDimensions] = React.useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  React.useEffect(() => {
    window.addEventListener("resize", handleResize, false);
  }, []);
  const handleResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  useEffect(() => {
    run(ApiResponse);
  });

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
    myChart.resize({
      width: dimensions.width,
      height: dimensions.height
    });
  };

  return (
    <div className="chart-container">
      <div ref={echartsDom} style={{ width: "100%", height: "100%" }} />
    </div>
  );
}
