import { FC } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Registramos los elementos necesarios para Chart.js
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

interface IGroupedBarChartProps {
  labels: string[];
  datasets: {
    label: string;
    data: number[];
    backgroundColor: string;
    stack: string;
  }[];
}

export const GroupedBarChart: FC<IGroupedBarChartProps> = ({
  labels,
  datasets,
}) => {
  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Marcellus',
            size: 14,
          },
          color: '#374151',
        },
      },
      tooltip: {
        bodyFont: {
          family: 'Marcellus',
          size: 12,
        },
      },
    },
    scales: {
      x: {
        ticks: {
          font: {
            family: 'Marcellus',
            size: 12,
          },
          color: '#374151',
        },
        grid: {
          display: true, // Mantiene la grid
          color: '#E5E7EB', // Color opcional para la grid (gris claro)
        },
      },
      y: {
        ticks: {
          display: false, // Oculta los números del eje Y
        },
        grid: {
          display: true, // Mantiene la grid
          color: '#E5E7EB',
        },
      },
    },
  };

  return (
    <div className="flex justify-center w-full p-4">
      <Bar data={data} options={options as never} />
    </div>
  );
};
