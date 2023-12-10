import React from 'react';
import { Doughnut } from 'react-chartjs-2';

const GraficoDocType = () => {
  const data = {
    labels: ['CNH', 'Endividamento', 'Posição consolidada'],
    datasets: [{
      data: [30, 40, 30],
      backgroundColor: ['rgba(255, 99, 132, 0.8)', 'rgba(54, 162, 235, 0.8)', 'rgba(255, 205, 86, 0.8)'],
      borderWidth: 2,
    }],
  };

  const options = {
    cutoutPercentage: 50,
    plugins: {
      title: {
        display: true,
        text: 'Tipos de Documentos',
        fontSize: 18,
        fontColor: 'rgba(255, 182, 193, 1)',
      },
    },
    elements: {
      arc: {
        borderWidth: 2,
      },
    },
    shadowColor: 'rgba(0, 0, 0, 0.3)',
    shadowBlur: 10,
    shadowOffsetX: 5,
    shadowOffsetY: 5,
  };

  return (
    <div>
      <Doughnut id="graficoDocType" data={data} options={options} />
    </div>
  );
};

export default GraficoDocType;