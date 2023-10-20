import React, { useEffect } from 'react';
import { getCouponsData } from '../services';

export function DoughtnutChart() {
  useEffect(() => {
    getDataFromAPI();
  }, []);

  const getDataFromAPI = async () => {
    try {
      const response = await getCouponsData()
      console.log(JSON.stringify(response))

    } catch (e) {
      console.log({ error: e })
      // Display a modal to let the user know an error happened - improvement
    }
  }

  return (
    <div>
      <h2>Doughnut Chart </h2>
    </div>
  );
}



