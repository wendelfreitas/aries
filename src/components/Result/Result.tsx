import Chart, { Props } from 'react-apexcharts';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';
import classNames from 'classnames';
import { Button } from '../ui/Button/Button';
import { useState } from 'react';
import { OperationsTable } from '../OperationsTable/OperationsTable';

export const Result = () => {
  const { name } = useAriesStore();
  const [isShowingTable, setIsShowingTable] = useState(false);

  if (!name) {
    return null;
  }

  const options: Props['options'] = {
    chart: {
      height: '100%',
      fontFamily: 'Inter, sans-serif',
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      colors: ['#25e2a0'],
      width: 6,
      curve: 'smooth',
    },
    grid: {
      show: true,
      strokeDashArray: 4,
      padding: {
        left: 2,
        right: 2,
        top: -26,
      },
    },
    series: [
      {
        name: 'Profit',
        data: [6500, 6418, 6456, 6526, 6356, 6456],
        color: '#1A56DB',
      },
      {
        name: 'Loss',
        data: [6456, 6356, 6526, 6332, 6418, 6500],
        color: '#7E3AF2',
      },
    ],
    legend: {
      show: false,
    },
    xaxis: {
      categories: [
        '01 Feb',
        '02 Feb',
        '03 Feb',
        '04 Feb',
        '05 Feb',
        '06 Feb',
        '07 Feb',
      ],
      labels: {
        show: true,
        style: {
          cssClass: 'text-xs font-normal fill-white',
        },
      },

      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    markers: {
      colors: '#005540',
      size: 5,
    },
    yaxis: {
      show: true,
      axisTicks: {
        show: false,
        color: '#000',
      },
      axisBorder: {
        show: false,
      },
      crosshairs: {
        show: false,
      },

      labels: {
        show: true,
        style: {
          cssClass: 'text-xs font-normal fill-white !mr-2',
        },
      },
    },
  };

  return (
    <div className="w-full border border-primary-600 rounded-lg shadow bg-gray-900 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div className="grid gap-4 grid-cols-3">
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Max Profit
            </h5>
            <p className="text-white text-2xl leading-none font-bold">42,3k</p>
          </div>
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Max Loss
            </h5>
            <p className="text-white text-2xl leading-none font-bold">$5.40</p>
          </div>
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Break Even Points
            </h5>
            <p className="text-white text-2xl leading-none font-bold">32.40</p>
          </div>
        </div>
        <div>
          <Button
            variant="outline"
            className="rounded-full"
            onClick={() => setIsShowingTable(!isShowingTable)}
          >
            Show {isShowingTable ? 'Chart' : 'Table'}
          </Button>
        </div>
      </div>
      <div
        className={classNames('pt-5 animate-fade', {
          hidden: isShowingTable,
        })}
      >
        <Chart
          options={options}
          series={[
            {
              name: 'Profit/Loss',
              data: [10, 41, 35, 51, 49, 62, 69, 91, 148],
            },
          ]}
          type="line"
        />
      </div>

      <div
        className={classNames('pt-5 animate-fade', {
          hidden: !isShowingTable,
        })}
      >
        <OperationsTable />
      </div>
    </div>
  );
};
