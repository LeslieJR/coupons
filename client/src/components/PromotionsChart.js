import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getCouponsData } from '../services';
import { generateColors } from '../utils/generateColors';
import { configureChart } from '../utils/configureChart';

export function PromotionsChart() {
  configureChart();
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [{
      data: [],
      backgroundColor: [
        'rgb(50, 168, 68)',
        'rgb(50, 100, 168)',
        'rgb(235, 52, 204)',
        'rgb(235, 165, 45)',
        'rgb(172, 45, 235)',
      ],
      borderWidth: 2,
    }]
  });

  const getDataFromAPI = async () => {
    try {
      const response = await getCouponsData();
      const labels = response.promotionsPerType.map(item => item.type_name);
      const values = response.promotionsPerType.map(item => item.total);
      const backgroundColors = generateColors(labels.length);

      setChartData(prevData => ({
        ...prevData,
        labels: labels,
        datasets: [{
          ...prevData.datasets[0],
          data: values,
          backgroundColor: backgroundColors
        }]
      }));
    } catch (e) {
      console.log({ error: e });
      // display a modal showing the error - improvement
    }
  }

  useEffect(() => {
    getDataFromAPI();
  }, []);

  return (
    <>
      <h2 className='title'>All Promotions</h2>
      <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
    </>
  );
}
