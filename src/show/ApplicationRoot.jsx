import { mock } from 'Helpers';
import { connect } from 'react-redux';

import { application } from 'Reducers';

const ApplicationRoot = ({ count = '0', decrement = mock, increment = mock }) => (
  <div className='h-screen w-screen overflow-hidden'>
    <h1 className='text-4xl font-bold'>This is My Architecture Repo</h1>

    <div className='flex items-center justify-center space-x-6'>
      <button
        className='mt-4 rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600'
        onClick={increment}>
        +
      </button>

      <div className='flex h-full items-center justify-center text-center'>{count}</div>

      <button
        className='mt-4 ml-4 rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600'
        onClick={decrement}>
        -
      </button>
    </div>
  </div>
);

export default connect(
  state => ({
    count: state.application.count,
  }),
  {
    increment: application.actions.increment,
    decrement: application.actions.decrement,
  },
)(ApplicationRoot);
