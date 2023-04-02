import React from 'react';
import './Chart.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface ICryptoDate {
  priceUsd: string,
  time: null, 
  date: string
}

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  ticks:{
    maxTicksLimit: 8
  }
};


const Chart = () => {
  const [cryptoChart, setCryptoChart] = useState([] as ICryptoDate[]);

  useEffect(() => {
    axios 
    .get('https://api.coincap.io/v2/assets/bitcoin/history?interval=m1')
    .then(data =>{
        setCryptoChart(data.data.data)
    })
  }, [] )
  const labels = cryptoChart.map(el => moment(el.date).format('DD.MM.YYYY'))
  const label = cryptoChart.map(el => el.priceUsd)

  const data = {
    labels,
    datasets: [
      {
        label: 'Prise',
        data: label,
        borderColor: '#FCD535',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };
 
  
  
  return (
  <div className='chart'>
    <Line options={options} data={data} />
  </div>
  )
  
}    

export default Chart