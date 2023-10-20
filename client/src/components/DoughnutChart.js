import React, { useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getCouponsData } from '../services';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = 'Promotion types';
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

export function DoughnutChart() {
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const data = {
    labels : ["percent-off","dollar-off","buy-one-get-one","free-gift", "free-shipping"],
    datasets: [{
      data: [89, 11, 2, 2, 43],
      options: {
        responsive: true,
        maintainAspectRatio: true,
      },
      backgroundColor: [
        'rgb(219,242,242)',
        'rgb(215,236,251)',
        'rgb(255,224,230)',
        'rgb(255,236,217)',
        'rgb(235,224,255)',
      ],
      borderWidth: 2,
    }]
  }
  const getDataFromAPI = async () => {
    try {
      const { promotionsPerType } = await getCouponsData()
      console.log(JSON.stringify(promotionsPerType))

    } catch (e) {
      console.log({ error: e })
      // Display a modal to let the user know an error happened - improvement
    }
  }

  return (
    <div>
      <h2>Doughnut Chart </h2>
      <Doughnut data={data} />
    </div>
  );
}



