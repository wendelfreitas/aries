import classNames from 'classnames';
import { Fragment } from 'react/jsx-runtime';

export const OperationsTable = () => {
  const optionsData = [
    { type: 'CALL', strike: 100, premium: 5, quantity: 10, time: '2024-06-18' },
    { type: 'PUT', strike: 150, premium: 8, quantity: 5, time: '2024-07-18' },
    { type: 'CALL', strike: 200, premium: 10, quantity: 2, time: '2024-08-18' },
    { type: 'CALL', strike: 200, premium: 10, quantity: 2, time: '2024-08-18' },
    { type: 'CALL', strike: 200, premium: 10, quantity: 2, time: '2024-08-18' },
    { type: 'CALL', strike: 100, premium: 5, quantity: 10, time: '2024-06-18' },
    { type: 'PUT', strike: 150, premium: 8, quantity: 5, time: '2024-07-18' },
    { type: 'CALL', strike: 200, premium: 10, quantity: 2, time: '2024-08-18' },
    { type: 'CALL', strike: 200, premium: 10, quantity: 2, time: '2024-08-18' },
    { type: 'CALL', strike: 200, premium: 10, quantity: 2, time: '2024-08-18' },
  ];

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
          {optionsData.map((option, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                <span
                  className={classNames(
                    'bg-primary-600 px-3 py-2 rounded-full',
                    {
                      '!bg-red-600': option.type === 'PUT',
                    }
                  )}
                >
                  {option.type}
                </span>
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-white">
                {option.strike}
              </td>
              <td className="px-6 py-4  text-center whitespace-nowrap text-sm text-white">
                {option.premium}
              </td>
              <td className="px-6 py-4 text-center whitespace-nowrap text-sm text-white">
                {option.quantity}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                {option.time}
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
