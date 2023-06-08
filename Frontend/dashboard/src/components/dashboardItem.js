import React from "react";
import "./Dashboard.css";
const DashboardItem = ({ item }) => {
  return (
    <div>
      <div id="filt-data">
        <h3>{item.title}</h3>
        <div id="fd">
          <div>
            <p>Intensity: {item.intensity}</p>
            <p>Likelihood: {item.likelihood}</p>
            <p>Relevance: {item.relevance}</p>
            <p>Year: {item.end_year}</p>
          </div>
          <div>
            <p>City: {item.city}</p>
            <p>Topics: {item.topic}</p>
            <p>Region: {item.region}</p>
            <p>Country: {item.country}</p>
          </div>
          <div>
            <p>Sector: {item.sector}</p>
            <p>PEST: {item.pestle}</p>
            <p>Source: {item.source}</p>
            <p>SWOT: {item.swot}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardItem;
