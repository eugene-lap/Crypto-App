import './Chart.scss'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { ICryptoDate } from './Chart.type';
import { URLHistoryCrypto } from '../../utils/constants/cryptoConstants';
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



export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
  },
  ticks: {
    maxTicksLimit: 8
  }
};


export const Chart = (): JSX.Element => {
  const [cryptoChart, setCryptoChart] = useState([] as ICryptoDate[]);

  useEffect(() => {
    axios
      .get(URLHistoryCrypto)
      .then(data => {
        setCryptoChart(data.data.data)
      })
  }, [])
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