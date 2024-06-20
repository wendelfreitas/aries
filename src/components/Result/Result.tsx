import Chart, { Props } from 'react-apexcharts';
import { useAriesStore } from '../../stores/use-aries-store/use-aries-store';
import classNames from 'classnames';
import { Button } from '../Button/Button';
import { useState } from 'react';
import { OperationsTable } from '../OperationsTable/OperationsTable';
import { useOperationsStore } from '../../stores/use-operations-store/use-operations-store';
import { OPERATION_TYPE } from '../../utils/enums';

export const Result = () => {
  const { name } = useAriesStore();
  const { operations } = useOperationsStore();

  const [isShowingTable, setIsShowingTable] = useState(false);

  if (!name) {
    return null;
  }

  const prices = Array.from({ length: 10 }, (_, i) => i * 2);

  const dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function getCalcProfitLoss(price: number) {
    if (!operations.length) {
      return 0;
    }

    return operations.reduce((total, option) => {
      const { type, strike, premium, quantity } = option;

      const intrinsicValue =
        type === OPERATION_TYPE.CALL
          ? Math.max(0, price - strike)
          : Math.max(0, strike - price);

      const profitLoss = (intrinsicValue - premium) * quantity;

      return total + profitLoss;
    }, 0);
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

    legend: {
      show: false,
    },
    xaxis: {
      categories: prices,
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

  const data = prices.map((price) => getCalcProfitLoss(price));

  const profit = Math.max(...data);
  const loss = Math.min(...data);
  const breakEvenPoints = prices.filter((index) => data[index] === 0);

  return (
    <div className="w-full border border-primary-600 rounded-lg shadow bg-gray-900 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div className="grid gap-4 grid-cols-3">
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Max Profit
            </h5>
            <p className="text-white text-2xl leading-none font-bold">
              {dollar.format(profit)}
            </p>
          </div>
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Max Loss
            </h5>
            <p className="text-white text-2xl leading-none font-bold">
              {dollar.format(loss)}
            </p>
          </div>
          <div>
            <h5 className="inline-flex items-center text-gray-500 dark:text-gray-400 leading-none font-normal mb-2">
              Break Even Points
            </h5>
            <p className="text-white text-2xl leading-none font-bold">
              {breakEvenPoints.join(',')}
            </p>
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
              data,
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
