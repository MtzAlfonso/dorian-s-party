import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export const BarChart = () => {
  const data = {
    labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo'],
    datasets: [
      {
        label: 'Ventas (USD)',
        data: [5000, 7000, 4000, 8500, 6500],
        backgroundColor: '#3b82f6',
        borderColor: '#2563eb',
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        labels: {
          font: {
            family: 'Marcellus', // Aplica la fuente Marcellus
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
      },
      y: {
        ticks: {
          font: {
            family: 'Marcellus',
            size: 12,
          },
          color: '#374151',
        },
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-8">
      <div className="w-full max-w-lg bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-semibold text-center text-gray-700 mb-4 font-marcellus">
          Ventas Mensuales
        </h2>
        <Bar data={data} options={options as never} />
      </div>
    </div>
  );
};
