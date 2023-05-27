import classNames from 'classnames';
import { useItemStore, usePaginationStore } from '../store';

export default function Pagination() {
  const currentPage = usePaginationStore((state) => state.page);
  const currentItem = usePaginationStore((state) => state.item);
  const items = useItemStore((state) => state.items);
  const hasNextPage = currentItem * currentPage + currentItem <= items.length;
  const hasPreviousPage = currentPage > 1;

  const setPage = usePaginationStore((state) => state.setPage);

  const countFirstItemSeen = () => {
    if (currentPage === 1) {
      return 1;
    }

    return currentPage * currentItem - 2;
  };

  const constLastItemSeen = () => {
    return countFirstItemSeen() + 2;
  };

  return (
    <div className='mt-6 p-4 font-work text-center flex justify-between items-start'>
      <p className='text-primary'>
        {countFirstItemSeen()} - {constLastItemSeen()} dari {items.length} produk
      </p>

      <div className='mt-4 md:mt-0 flex space-x-4'>
        <button
          disabled={!hasPreviousPage}
          onClick={() => {
            setPage(currentPage - 1);
          }}
          className={classNames(
            'bg-primary flex items-center space-x-1 px-4 py-2 text-white rounded',
            { 'bg-opacity-20': !hasPreviousPage }
          )}>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M11.25 13.5L6.75 9L11.25 4.5'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
          <span> Kembali</span>
        </button>
        <button
          onClick={() => setPage(1)}
          className={classNames('px-4 py-2 rounded', {
            'bg-primary text-white': currentPage === 1,
            'bg-white border-primary border': currentPage !== 1,
          })}>
          1
        </button>
        <button
          onClick={() => setPage(2)}
          className={classNames('px-4 py-2 rounded', {
            'bg-primary text-white': currentPage === 2,
            'bg-white border-primary border': currentPage !== 2,
          })}>
          2
        </button>
        <button
          onClick={() => setPage(3)}
          className={classNames('px-4 py-2 rounded', {
            'bg-primary text-white': currentPage === 3,
            'bg-white border-primary border': currentPage !== 3,
          })}>
          3
        </button>
        <button
          disabled={!hasNextPage}
          onClick={() => {
            setPage(currentPage + 1);
          }}
          className={classNames(
            'bg-primary flex items-center space-x-1 px-4 py-2 text-white rounded',
            { 'bg-opacity-20': !hasNextPage }
          )}>
          <span>Lanjut </span>
          <svg
            width='18'
            height='18'
            viewBox='0 0 18 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path
              d='M6.75 4.5L11.25 9L6.75 13.5'
              stroke='white'
              strokeWidth='2'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}
