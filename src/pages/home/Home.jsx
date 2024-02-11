import React from "react";
import Chart from "react-apexcharts";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const data = [
    {
      data: [
        {
          x: "Andhra Pradesh",
          y: 10,
          link: "details/AndhraPradesh",
        },
        {
          x: "Uttar Pradesh",
          y: 50,
          link: "details/UttarPradesh",
        },
        {
          x: "Maharashtra",
          y: 39,
          link: "details/Maharashtra",
        },
        {
          x: "Tamil Nadu",
          y: 42,
          link: "details/TamilNadu",
        },
        {
          x: "Karnataka",
          y: 60,
          link: "details/Karnataka",
        },
        {
          x: "Gujarat",
          y: 40,
          link: "details/Gujarat",
        },
        {
          x: "Rajasthan",
          y: 19,
          link: "details/Rajasthan",
        },
        {
          x: "Kerala",
          y: 0,
          link: "details/Kerala",
        },
        {
          x: "Punjab",
          y: 89,
          link: "details/Punjab",
        },
        {
          x: "Madhya Pradesh",
          y: 100,
          link: "details/MadhyaPradesh",
        },
      ],
    },
  ];

  const options = {
    plotOptions: {
      treemap: {
        enableShades: true,
        colorScale: {
          ranges: [
            {
              from: 0,
              to: 30,
              color: "#0000FF",
            },
            {
              from: 31,
              to: 100,
              color: "#FF0000",
            },
          ],
        },
      },
    },
    tooltip: {
      onDatasetHover: {
        highlightDataSeries: true,
      },
      custom: function ({ seriesIndex, dataPointIndex, w }) {
        return `<div class="temperature-tooltip">${w.config.series[seriesIndex].data[dataPointIndex].x} ${w.config.series[seriesIndex].data[dataPointIndex].y} °C</div>`;
      },
    },
    chart: {
      events: {
        click: function (event, chartContext, config) {
          if (config.dataPointIndex !== undefined) {
            const link = data[0].data[config.dataPointIndex].link;
            if (link) {
              navigate(link); // Redirect to the specified link
            }
          }
        },
      },
    },
  };

  return (
    <div className="state_tree-chart-container">
      <div className="state_tree-chart">
        <Chart
          width="100%"
          options={options}
          series={data}
          type="treemap"
          labels={{
            show: true,
          }}
        />
      </div>
    </div>
  );
};

export default Home;
