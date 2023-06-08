import React from 'react';
import DashboardItem from './dashboardItem';

const DashboardList = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <DashboardItem key={item.id} item={item} />
        
      ))}
    </div>
  );
};

export default DashboardList;
