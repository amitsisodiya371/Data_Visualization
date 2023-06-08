import React, { useState, useEffect } from "react";
import DashboardList from "./dashboardList";
import "./Dashboard.css";
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import DataList from './DataList';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filters, setFilters] = useState({
    endYear: "",
    topic: [],
    sector: "",
    region: "",
    pestle: "",
    source: "",
    swot: "",
    country: "",
    city: "",
  });

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    fetch("http://localhost:5000/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  };

  const handleFilterChange = (event) => {
    const { name, value } = event.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const applyFilters = () => {
    let filteredResult = [...data];

    // Apply end year filter
    if (filters.endYear !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.end_year === filters.endYear
      );
    }

    // Apply topic filter
    if (filters.topic.length > 0) {
      filteredResult = filteredResult.filter((item) =>
        filters.topic.includes(item.topic)
      );
    }

    // Apply sector filter
    if (filters.sector !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.sector === filters.sector
      );
    }

    // Apply region filter
    if (filters.region !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.region === filters.region
      );
    }

    // Apply PEST filter
    if (filters.pestle !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.pestle === filters.pestle
      );
    }

    // Apply source filter
    if (filters.source !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.source === filters.source
      );
    }

    // Apply SWOT filter
    if (filters.swot !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.swot === filters.swot
      );
    }

    // Apply country filter
    if (filters.country !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.country === filters.country
      );
    }

    // Apply city filter
    if (filters.city !== "") {
      filteredResult = filteredResult.filter(
        (item) => item.city === filters.city
      );
    }

    setFilteredData(filteredResult);
  };

  return (
    <div>
      <h2>Data Visualization Dashboard</h2>
      <div id="filter">
        <h3>Filters:</h3>
        <div id="s-filter">
          <div id="h1-filter">
  
            <label >
              Topic:-
              <input
                type="text"
                name="topic"
                value={filters.topic}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Sector:-
              <input
                type="text"
                name="sector"
                value={filters.sector}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              EndYear:-
              <input
                type="text"
                name="endYear"
                value={filters.endYear}
                onChange={handleFilterChange}
              />
            </label>
          </div>
          <div id="h2-filter">  
            <label>
              Region:-
              <input
                type="text"
                name="region"
                value={filters.region}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Source:-
              <input
                type="text"
                name="source"
                value={filters.source}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              Country:-
              <input
                type="text"
                name="country"
                value={filters.country}
                onChange={handleFilterChange}
              />
            </label>
            
            
          </div>
          <div id="h3-filter">
          <label style={{marginBottom:"10px"}}>
              PEST:-
              <input
                type="text"
                name="pestle"
                value={filters.pestle}
                onChange={handleFilterChange}
              />
            </label>
            <label>
              SWOT:-
              <input
                type="text"
                name="swot"
                value={filters.swot}
                onChange={handleFilterChange}
              />
            </label>
           
            <label>
              City:-
              <input
                type="text"
                name="city"
                value={filters.city}
                onChange={handleFilterChange}
              />
            </label>
            
          </div>
        </div>
        <button id="filt-btn" onClick={applyFilters}>Apply Filters</button>
      </div>
      <h2>Data</h2>
      {filteredData.length > 0 ? (
        <DashboardList data={filteredData} />
      ) : (
        <DashboardList data={data} />
      )}
    </div>
  );
};

export default Dashboard;
