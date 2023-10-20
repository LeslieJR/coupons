import React, { useState, useEffect } from 'react';
import { Chart, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { getCouponsByRetailer } from '../services';

Chart.register(ArcElement, Tooltip, Legend, Title);
Chart.defaults.plugins.tooltip.backgroundColor = 'rgb(0, 0, 156)';
Chart.defaults.plugins.legend.position = 'right';
Chart.defaults.plugins.legend.title.display = true;
Chart.defaults.plugins.legend.title.text = 'Promotion types';
Chart.defaults.plugins.legend.title.font = 'Helvetica Neue';

export function DynamicDoughnutChart() {

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
    const [selectedOption, setSelectedOption] = useState('macys');

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const getDataFromAPI = async () => {
        try {
            const { promotionsPerRetailerAndType } = await getCouponsByRetailer(selectedOption);
            console.log(promotionsPerRetailerAndType)
        } catch (e) {
            console.log({ error: e });
        }
    }

    useEffect(() => {
        getDataFromAPI();
    }, [selectedOption]);

    return (
        <>
            <h2>Promotions Per Retailer </h2>
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="macys">Macys</option>
                <option value="nordstrom">Nordstorm</option>
                <option value="nike">Nike</option>
            </select>
            <Doughnut data={data} />
        </>
    );
}

