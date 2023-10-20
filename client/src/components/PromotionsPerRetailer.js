import React, { useState, useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';
import { getCouponsByRetailer } from '../services';
import { generateColors } from '../utils/generateColors';
import { configureChart } from '../utils/configureChart';

export function PromotionsPerRetailer() {
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

    const [selectedOption, setSelectedOption] = useState('macys'); // Replace 'defaultOptionValue' with a valid default option value

    const handleSelectChange = (e) => {
        setSelectedOption(e.target.value);
    }

    const getDataFromAPI = async () => {
        try {
            const { promotionsPerRetailerAndType } = await getCouponsByRetailer(selectedOption);
            const labels = promotionsPerRetailerAndType.map(item => item.type_name);
            const values = promotionsPerRetailerAndType.map(item => item.total);
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
    }, [selectedOption]);

    return (
        <>
            <h2 className='title'>Promotions Per Retailer </h2>
            {/* improvement: get the retailer names before and not hardcoded */}
            <select value={selectedOption} onChange={handleSelectChange}>
                <option value="macys">Macys</option>
                <option value="nordstrom">Nordstorm</option>
                <option value="nike">Nike</option>
            </select>
            <Doughnut data={chartData} options={{ responsive: true, maintainAspectRatio: true }} />
        </>
    );
}
