import { ChartProps, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { FC } from 'react';

// Registramos los elementos necesarios para Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChartProps {
  confirm: number;
  total: number;
}

export const PieChart: FC<IPieChartProps> = ({ confirm, total }) => {
  const data = {
    labels: ['Confirmados', 'Pendientes'], // Etiquetas
    datasets: [
      {
        label: 'Lenguajes de Programación',
        data: [confirm, total - confirm], // Datos
        backgroundColor: ['#10b981', '#f43f5e'], // Colores
        borderColor: ['#10b981', '#f43f5e'], // Bordes
        borderWidth: 1,
      },
    ],
  };

  const options: ChartProps['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            return tooltipItem.label + ': ' + tooltipItem.raw + '%';
          },
        },
      },
    },
  };

  return (
    <div className="flex justify-center justify-items-center p-8">
      <div className="w-full max-w-md p-4">
        <div className="chart-container">
          <Pie data={data} options={options as never} />
        </div>
      </div>
    </div>
  );
};
