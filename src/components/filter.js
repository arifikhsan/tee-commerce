import { useEffect, useState } from 'react';
import {useItemStore} from '../store';

export default function Filter() {
  const [showFilter, setShowFilter] = useState(true);

  const [showCategory, setShowCategory] = useState(true);
  const [showColor, setShowColor] = useState(true);


  const [filteredColors, setFilteredColors] = useState([]);
  const [filteredCategories, setFilteredCategories] = useState([]);

  const handleColorChange = (color) => {
    if (filteredColors.includes(color)) {
      const newArr = filteredColors.filter((c) => c !== color);
      setFilteredColors(newArr);
    } else {
      setFilteredColors([...filteredColors, color]);
    }
  };

  const filterBy = useItemStore((state) => state.filterBy);
  const resetItems = useItemStore((state) => state.resetItems);

  useEffect(() => {
    if (filteredCategories.length > 0 || filteredColors.length > 0) {
      filterBy({ categories: filteredCategories, colors: filteredColors });
    } else {
      resetItems();
    }
  }, [filterBy, filteredCategories, filteredColors, resetItems]);

  const categories = [
    {
      name: 'katun',
    },
    {
      name: 'kaus',
    },
    {
      name: 'lengan pendek',
    },
    {
      name: 'chambray',
    },
    {
      name: 'kemeja',
    },
    {
      name: 'lengan panjang',
    },
    {
      name: 'denim',
    },
    {
      name: 'drill',
    },
    {
      name: 'baby canvas',
    },
    {
      name: 'Lengan Pendek',
    },
    {
      name: 'celana',
    },
    {
      name: 'celana panjang',
    },
    {
      name: 'lotto',
    },
    {
      name: 'kanvas',
    },
    {
      name: 'celana pendek',
    },
  ];

  return (
    <div
      className='rounded-lg'
      style={{ boxShadow: '0px 8px 24px rgba(0, 0, 0, 0.08)' }}>
      <div className='md:hidden p-4 flex justify-end'>
        <button
          onClick={() => setShowFilter(!showFilter)}
          className='px-4 py-2 outline'>
          Filter
        </button>
      </div>
      <div className='p-4 pb-0'>
        <p className='font-bold'>
          Filter ({filteredCategories.length + filteredColors.length})
        </p>
        <div className='mt-4 border-b border-[#BCBCBC]'></div>
      </div>
      {showFilter && (
        <div className='p-4'>
          <button
            onClick={() => setShowCategory(!showCategory)}
            className='inline-flex w-full justify-between items-center'>
            <span className='font-bold'>Kategori</span>
            <svg
              className={showCategory ? 'rotate-0' : 'rotate-180'}
              width='12'
              height='7'
              viewBox='0 0 12 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.5 0.75L6 5.25L1.5 0.75'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
          </button>
          {showCategory && (
            <div>
              {categories.map((category) => {
                return (
                  <div
                    key={category.name}
                    className='flex items-center space-x-3'>
                    <input
                      checked={filteredCategories.includes(category.name)}
                      type='checkbox'
                      id={category.name}
                      value=''
                      className='w-5 h-5 accent-primary rounded-md'
                      onChange={() => {
                        if (filteredCategories.includes(category.name)) {
                          const newArr = filteredCategories.filter(
                            (c) => c !== category.name
                          );
                          setFilteredCategories(newArr);
                        } else {
                          setFilteredCategories([
                            ...filteredCategories,
                            category.name,
                          ]);
                        }
                      }}
                    />
                    <label
                      htmlFor={category.name}
                      className='capitalize peer-checked:border-primary text-sm items-center p-2 space-x-2'>
                      <span>{category.name}</span>
                    </label>
                  </div>
                );
              })}
            </div>
          )}
          <button
            onClick={() => setShowColor(!showColor)}
            className='inline-flex mt-2 w-full justify-between items-center'>
            <span className='font-bold'>Warna</span>
            <svg
              className={showColor ? 'rotate-0' : 'rotate-180'}
              width='12'
              height='7'
              viewBox='0 0 12 7'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M10.5 0.75L6 5.25L1.5 0.75'
                stroke='black'
                strokeWidth='2'
              />
            </svg>
          </button>
          {showColor && (
            <div className='mt-4 flex flex-wrap gap-3'>
              <div className='inline'>
                <input
                  checked={filteredColors.includes('merah')}
                  type='checkbox'
                  id='merah'
                  value=''
                  className='hidden peer'
                  onChange={() => handleColorChange('merah')}
                />
                <label
                  htmlFor='merah'
                  className='inline-flex border-[#BCBCBC] peer-checked:border-primary items-center border p-2 space-x-2'>
                  <span className='h-4 w-4 bg-[#FF2536] rounded-sm'></span>
                  <span>Merah</span>
                </label>
              </div>
              <div className='inline'>
                <input
                  checked={filteredColors.includes('hitam')}
                  type='checkbox'
                  id='hitam'
                  value=''
                  className='hidden peer'
                  onChange={() => handleColorChange('hitam')}
                />
                <label
                  htmlFor='hitam'
                  className='inline-flex border-[#BCBCBC] peer-checked:border-primary items-center border p-2 space-x-2'>
                  <span className='h-4 w-4 bg-black rounded-sm'></span>
                  <span>Hitam</span>
                </label>
              </div>
              <div className='inline'>
                <input
                  checked={filteredColors.includes('putih')}
                  type='checkbox'
                  id='putih'
                  value=''
                  className='hidden peer'
                  onChange={() => handleColorChange('putih')}
                />
                <label
                  htmlFor='putih'
                  className='inline-flex border-[#BCBCBC] peer-checked:border-primary items-center border p-2 space-x-2'>
                  <span className='h-4 w-4 border border-primary rounded-sm bg-white'></span>
                  <span>Putih</span>
                </label>
              </div>
              <div className='inline'>
                <input
                  checked={filteredColors.includes('biru')}
                  type='checkbox'
                  id='biru'
                  value=''
                  className='hidden peer'
                  onChange={() => handleColorChange('biru')}
                />
                <label
                  htmlFor='biru'
                  className='inline-flex border-[#BCBCBC] peer-checked:border-primary items-center border p-2 space-x-2'>
                  <span className='h-4 w-4 border border-primary rounded-sm bg-[#1C5CD8]'></span>
                  <span>Biru</span>
                </label>
              </div>
              <div className='inline'>
                <input
                  checked={filteredColors.includes('kuning')}
                  type='checkbox'
                  id='kuning'
                  value=''
                  className='hidden peer'
                  onChange={() => handleColorChange('kuning')}
                />
                <label
                  htmlFor='kuning'
                  className='inline-flex border-[#BCBCBC] peer-checked:border-primary items-center border p-2 space-x-2'>
                  <span className='h-4 w-4 border border-primary rounded-sm bg-[#FFE86F]'></span>
                  <span>Kuning</span>
                </label>
              </div>
              <div className='inline'>
                <input
                  checked={filteredColors.includes('cream')}
                  type='checkbox'
                  id='cream'
                  value=''
                  className='hidden peer'
                  onChange={() => handleColorChange('cream')}
                />
                <label
                  htmlFor='cream'
                  className='inline-flex border-[#BCBCBC] peer-checked:border-primary items-center border p-2 space-x-2'>
                  <span className='h-4 w-4 border border-primary rounded-sm bg-[#FBE2C5]'></span>
                  <span>Krem</span>
                </label>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
