import React, { useEffect, useState } from "react";
import { data } from "../../data";
import { useParams } from "react-router-dom";
import Chart from "react-apexcharts";
import "./Details.css";

const Details = () => {
  const { id } = useParams();
  const [state, setState] = useState();

  const fetchData = () => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].state === id) {
        setState(data[i]);
      }
    }
  };

  const options = {
    xaxis: {
      categories: state?.cities?.map((city) => city.city),
    },
    title: {
      text: "City Temperature Chart",
    },
  };

  const series = [
    {
      name: "Temperature",
      data: state?.cities?.map((city) => city.temperature),
    },
  ];

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="details_container">
      <h1 className="state_title">{state?.state}</h1>
      {state && (
        <div className="state_chart">
          <Chart options={options} series={series} type="bar" />{" "}
        </div>
      )}
    </div>
  );
};

export default Details;
