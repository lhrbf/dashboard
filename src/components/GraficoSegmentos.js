import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';

const GraficoSegmentos = () => {
  const chartRef = useRef();

  useEffect(() => {
    const data = {
      labels: ['Financeira', 'Banco', 'Construtora'],
      datasets: [{
        data: [40, 30, 30],
        backgroundColor: ['rgba(54, 162, 235, 0.8)', 'rgba(255, 205, 86, 0.8)', 'rgba(255, 99, 132, 0.8)'],
        borderWidth: 2,
        borderColor: 'rgba(255, 182, 193, 1)'
      }]
    };

    const options = {
      cutoutPercentage: 70,
      plugins: {
        title: {
          display: true,
          text: 'Segmentos dos Usuários',
          fontSize: 18,
          fontColor: 'rgba(255, 182, 193, 1)'
        }
      },
      elements: {
        arc: {
          borderWidth: 2,
          borderColor: 'rgba(255, 182, 193, 1)'
        }
      },
      shadowColor: 'rgba(0, 0, 0, 0.3)',
      shadowBlur: 10,
      shadowOffsetX: 5,
      shadowOffsetY: 5
    };

    const ctx = chartRef.current.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: options
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div>
      <canvas ref={chartRef} width="400" height="400"></canvas>
    </div>
  );
};

export default GraficoSegmentos;