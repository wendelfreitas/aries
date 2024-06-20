import classNames from 'classnames';
import { Fragment } from 'react/jsx-runtime';
import { useOperationsStore } from '../../stores/use-operations-store/use-operations-store';
import { OPERATION_TYPE } from '../../utils/enums';

export const OperationsTable = () => {
  const { operations } = useOperationsStore();

  const dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  function formatDate(date: Date) {
    return `${date.getUTCMonth()}/${date.getDay()}/${date.getFullYear()} ${date.getUTCHours()}:${date.getUTCMinutes()}`;
  }

  return (
    <Fragment>
      <table className="min-w-full divide-y border divide-gray-200">
        <thead>
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Type
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Strike
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Premium
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Quantity
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
            >
              Time
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {operations.map((option, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                <span
                  className={classNames(
                    'bg-primary-600 px-3 py-2 rounded-full',
                    {
                      '!bg-red-600': option.type === OPERATION_TYPE.PUT,
                    }
                  )}
                >
                  {option.type.toUpperCase()}
                </span>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-white">
                {dollar.format(option.strike)}
              </td>
              <td className="px-6 py-4  text-center whitespace-nowrap text-sm text-white">
                {dollar.format(option.premium)}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-white">
                {option.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {formatDate(option.time)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <small className="text-gray-500 mt-5 italic flex justify-center">
        This table shows the latest 10 operations
      </small>
    </Fragment>
  );
};
