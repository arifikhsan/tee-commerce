import { useEffect, useState } from 'react';
import { useItemStore } from '../store';

export default function SortingButton() {
  const [showSort, setShowSort] = useState(false);
  const sortItemsByCreatedDateAsc = useItemStore(
    (state) => state.sortByCreatedDateAsc
  );

  const sortItemsByCreatedDateDesc = useItemStore(
    (state) => state.sortByCreatedDateDesc
  );

  const [value, setValue] = useState('asc');

  useEffect(() => {
    if (value === 'asc') {
      sortItemsByCreatedDateAsc();
    } else {
      sortItemsByCreatedDateDesc();
    }
  }, [sortItemsByCreatedDateAsc, sortItemsByCreatedDateDesc, value]);

  return (
    <div>
      <button
        onClick={() => setShowSort(true)}
        className='inline-flex items-center px-4 py-2 space-x-1 text-white rounded bg-primary'>
        <span>Urutkan </span>
        <svg
          width='18'
          height='18'
          viewBox='0 0 18 18'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            opacity='0.5'
            d='M12 13.5V4.5M12 4.5L15 7.59375M12 4.5L9 7.59375'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
          <path
            d='M6 4.5V13.5M6 13.5L9 10.4062M6 13.5L3 10.4062'
            stroke='white'
            strokeWidth='1.5'
            strokeLinecap='round'
            strokeLinejoin='round'
          />
        </svg>
      </button>
      {showSort && (
        <div>
          <div
            onClick={() => setShowSort(false)}
            className='fixed inset-0'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
          <div className='fixed inset-0 w-64 m-auto overflow-auto bg-white rounded-md h-36'>
            <div className='p-4'>
              <p className='font-bold font-work text-primary'>Urutkan berdasar</p>
              <div className='m-4'>
                <div className='flex items-center mb-4'>
                  <input
                    checked={value === 'asc'}
                    id='sort-asc'
                    type='radio'
                    value={value}
                    name='sort'
                    onChange={() => setValue('asc')}
                    className='w-4 h-4 bg-gray-100 border-gray-300 accent-gray-900'
                  />
                  <label
                    htmlFor='sort-asc'
                    className='ml-4 text-sm font-medium text-primary'>
                    Tanggal Terbaru
                  </label>
                </div>
                <div className='flex items-center mb-4'>
                  <input
                    checked={value === 'desc'}
                    id='sort-desc'
                    type='radio'
                    value={value}
                    name='sort'
                    onChange={() => setValue('desc')}
                    className='w-4 h-4 bg-gray-100 border-gray-300 accent-gray-900'
                  />
                  <label
                    htmlFor='sort-desc'
                    className='ml-4 text-sm font-medium text-primary'>
                    Tanggal Terlama
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
