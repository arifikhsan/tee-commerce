import classNames from 'classnames';
import { useItemStore, usePaginationStore } from '../store';

export default function Pagination() {
  const currentPage = usePaginationStore((state) => state.page);
  const currentItem = usePaginationStore((state) => state.item);
  const items = useItemStore((state) => state.items);
  const hasPreviousPage = currentPage > 1;

  const setPage = usePaginationStore((state) => state.setPage);

  const countFirstItemSeen = () => {
    if (currentPage === 1) {
      return 1;
    }

    return currentPage * currentItem - 8;
  };

  const constLastItemSeen = () => {
    if (items.length <= 9) {
      return items.length;
    }

    if (countFirstItemSeen() + 8 >= items.length) {
      return items.length;
    }

    return countFirstItemSeen() + 8;
  };

  const hasNextPageFor = (pageNumber) => {
    return items.length - (pageNumber - 1) * currentItem > 0;
  };

  const hasPrevPageFor = (pageNumber) => {
    if (pageNumber * currentItem <= 0) {
      return false;
    }

    return pageNumber * currentItem <= items.length;
  };

  return (
    <div className='flex flex-col items-start justify-between p-4 mt-6 md:flex-row md:p-0 md:pt-4 font-work'>
      <p className='w-full text-center md:text-left text-primary'>
        {countFirstItemSeen()} - {constLastItemSeen()} dari {items.length}{' '}
        produk
      </p>

      <div className='flex justify-center w-full mt-4 space-x-4 md:mt-0 md:w-auto md:justify-start'>
        <button
          disabled={!hasPreviousPage}
          onClick={() => {
            setPage(currentPage - 1);
          }}
          className={classNames(
            'bg-primary md:flex items-center space-x-1 px-4 md:px-6 py-2 text-white rounded',
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
          <span className='hidden md:inline'> Kembali</span>
        </button>
        {hasPrevPageFor(currentPage - 2) && (
          <button
            onClick={() => setPage(currentPage - 2)}
            className={classNames(
              'px-4 py-2 rounded bg-white border-primary border'
            )}>
            {currentPage - 2}
          </button>
        )}
        {hasPrevPageFor(currentPage - 1) && (
          <button
            onClick={() => setPage(currentPage - 1)}
            className={classNames(
              'px-4 py-2 rounded bg-white border-primary border'
            )}>
            {currentPage - 1}
          </button>
        )}
        <button
          className={classNames('px-4 py-2 rounded bg-primary text-white')}>
          {currentPage}
        </button>
        {hasNextPageFor(currentPage + 1) && (
          <button
            onClick={() => setPage(currentPage + 1)}
            className={classNames(
              'px-4 py-2 rounded bg-white border-primary border'
            )}>
            {currentPage + 1}
          </button>
        )}
        {hasNextPageFor(currentPage + 2) && (
          <button
            onClick={() => setPage(currentPage + 2)}
            className={classNames(
              'px-4 py-2 rounded bg-white border-primary border'
            )}>
            {currentPage + 2}
          </button>
        )}
        <button
          disabled={!hasNextPageFor(currentPage + 1)}
          onClick={() => {
            setPage(currentPage + 1);
          }}
          className={classNames(
            'bg-primary md:flex items-center space-x-1 px-4 md:px-6 py-2 text-white rounded',
            { 'bg-opacity-20': !hasNextPageFor(currentPage + 1) }
          )}>
          <span className='hidden md:inline'>Lanjut </span>
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
