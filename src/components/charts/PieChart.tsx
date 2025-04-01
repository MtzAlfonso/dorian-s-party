import { FC } from 'react';
import { ChartProps, Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface IPieChartProps {
  items: number[];
  labels: string[];
  dataLabel?: string;
  colors?: string[];
  legendPosition?: 'bottom' | 'left' | 'top' | 'right' | 'center' | 'chartArea';
}

export const PieChart: FC<IPieChartProps> = ({
  items,
  labels,
  dataLabel = 'Invitados',
  colors = ['#9DC08B', '#D70654'],
  legendPosition = 'bottom',
}) => {
  const data = {
    labels,
    datasets: [
      {
        label: dataLabel,
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
        position: legendPosition,
        labels: {
          font: {
            family: 'Marcellus',
            size: 14,
          },
          color: '#374151',
        },
      },
    },
  };

  return (
    <div className="flex justify-center w-full">
      <Pie data={data} options={options as never} />
    </div>
  );
};
