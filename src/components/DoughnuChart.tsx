import { Doughnut, ChartProps } from 'react-chartjs-2';
import { Chart as ChartJS, Tooltip, Legend, ArcElement } from 'chart.js';
import { FC } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IDoughnutChartProps {
  labels: string[];
  items: number[];
  title: string;
  colors?: string[];
}

export const DoughnutChart: FC<IDoughnutChartProps> = ({
  items,
  labels,
  title,
  colors = ['#3D8D7A', '#B3D8A8', '#DDEB9D', '#A3D1C6', '#A6F1E0'],
}) => {
  const data = {
    labels: labels,
    datasets: [
      {
        label: title,
        data: items,
        backgroundColor: colors,
        borderColor: colors,
        borderWidth: 1,
      },
    ],
  };

  const options: ChartProps['options'] = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
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
  };

  return (
    <div className="flex justify-center w-full p-1">
      <div className="w-full p-1">
        <div className="chart-container">
          <Doughnut data={data} options={options as never} />
        </div>
      </div>
    </div>
  );
};
