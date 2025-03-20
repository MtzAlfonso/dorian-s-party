import { FC } from 'react';
import { ChartProps, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

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
        label: 'Invitados',
        data: [confirm, total - confirm], // Datos
        backgroundColor: ['#9DC08B', '#D70654'], // Colores
        borderColor: ['#9DC08B', '#D70654'], // Bordes
        borderWidth: 1, // Ancho de los bordes
      },
    ],
  };

  const options: ChartProps['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: {
            family: 'Marcellus', // Cambia la fuente aquí
            size: 14, // Tamaño de letra
          },
          color: '#374151', // Color del texto (gris oscuro)
        },
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.raw} invitados`,
        },
      },
    },
  };

  return (
    <div className="flex justify-center w-full p-4">
      <div className="w-full p-4">
        <div className="chart-container">
          <Pie data={data} options={options as never} />
        </div>
      </div>
    </div>
  );
};
