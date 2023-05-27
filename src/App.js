import Filter from './components/filter';
import { Header } from './components/header';
import Pagination from './components/pagination';
import ProductItem from './components/product-item';
import SortingButton from './components/sorting-button';
import { useItemStore, usePaginationStore } from './store';

function App() {
  const items = useItemStore((state) => state.items);
  const itemCount = items.length;

  const currentPage = usePaginationStore((state) => state.page);
  const currentItem = usePaginationStore((state) => state.item);
 
  const point = () => {
    if (currentPage === 1) {
      return 0
    }
    
    if (currentPage === 2) {
      return currentItem
    }
    
    return currentItem * (currentPage - 1)
  }
  
  const takeUntil = () => {
    if (currentPage * currentItem > itemCount) {
      return itemCount
    } 
    
    return currentItem * currentPage
  }

  const pagedItems = [...items].slice(point(), takeUntil());
  return (
    <div className='font-work'>
      <Header />
      <div className='mt-[60px] pb-16 flex items-start max-w-6xl mx-auto'>
        <div className='w-[280px]'>
          <Filter />
        </div>

        <div className='ml-[40px]'>
          <div className='p-4 pt-0 md:p-0'>
            <img src='/images/banner.png' alt='' />
          </div>
          <div className='flex justify-between p-4 md:px-0 font-work'>
            <div className='flex items-center space-x-6'>
              <p className='text-xl font-bold uppercase'>Kaos Pria</p>
              <p className='text-gray-700'>{itemCount} Produk</p>
            </div>
            <SortingButton />
          </div>

          {pagedItems.length > 0 ? (
            <div className='grid-cols-3 gap-8 md:grid wrap'>
              {pagedItems.map((item, index) => {
                return (
                  <div key={item.id} className='p-4 md:p-0'>
                    <ProductItem item={item} index={index} />
                  </div>
                );
              })}
            </div>
          ) : null}

          <Pagination />
        </div>
      </div>
    </div>
  );
}

export default App;
