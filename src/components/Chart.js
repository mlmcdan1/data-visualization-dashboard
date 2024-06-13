import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { selectData } from '../features/dataSlice';
import 'chart.js/auto';

function Chart() {
  const data = useSelector(selectData);

  const chartData = {
    labels: data.map(item => item.date),
    datasets: [{
      label: 'Dataset',
      data: data.map(item => item.value),
      fill: false,
      backgroundColor: 'rgba(75,192,192,0.6)',
      borderColor: 'rgba(75,192,192,1)',
    }],
  };

  return (
    <div className="chart">
      <Line data={chartData} />
    </div>
  );
}

export default Chart;
