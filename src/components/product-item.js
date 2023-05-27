import { useState } from 'react';
import CurrencyFormat from 'react-currency-format';

export default function ProductItem({ item, index }) {
  const [showDetail, setShowDetail] = useState(false);

  return (
    <div className='font-work'>
      <div className='flex flex-col cursor-pointer' onClick={() => setShowDetail(true)}>
        <img className='' src={`/images/${(index + 1) % 10}.png`} alt={item.name} />
        <div className='flex justify-between mt-3'>
          <span className='font-bold text-primary'>{item.nama}</span>
          <span className='text-primary'>
            <CurrencyFormat
              value={item.harga}
              displayType='text'
              thousandSeparator='.'
              decimalSeparator=','
              prefix='Rp. '
            />
          </span>
        </div>
      </div>

      {showDetail && (
        <div className='font-work'>
          <div
            onClick={() => setShowDetail(false)}
            className='fixed inset-0'
            style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}></div>
          <div className='fixed inset-0 max-w-[972px] md:mx-auto m-4 overflow-auto'>
            <div className='p-4 bg-white '>
              <div className='flex flex-col md:space-x-4 md:flex-row'>
                <div className='grid grid-cols-2 gap-4 wrap'>
                  <img src='/images/detail/detail1.png' alt='' />
                  <img src='/images/detail/detail2.png' alt='' />
                  <img src='/images/detail/detail3.png' alt='' />
                  <img src='/images/detail/detail4.png' alt='' />
                </div>
                <div className='pt-4 md:w-1/3 md:pt-0'>
                  <p className='text-2xl font-work'>{item.nama}</p>
                  <p className='mt-5 text-2xl font-bold'>
                    <CurrencyFormat
                      value={item.harga}
                      displayType='text'
                      thousandSeparator='.'
                      decimalSeparator=','
                      prefix='Rp. '
                    />
                  </p>
                  <p className='mt-4'>Ukuran</p>
                  <div className='flex mt-5 space-x-3 font-work'>
                    <button className='p-2 font-bold'>XS</button>
                    <button className='p-2 font-bold'>S</button>
                    <button className='p-2 font-bold'>M</button>
                    <button className='p-2 font-bold'>L</button>
                    <button className='p-2 font-bold'>XL</button>
                  </div>
                  <div className='flex justify-between mt-10 space-x-4'>
                    <button className='px-4 py-2 text-white bg-black rounded grow font-work'>
                      Beli
                    </button>
                    <button>
                      <svg
                        width='39'
                        height='39'
                        viewBox='0 0 39 39'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'>
                        <rect width='39' height='39' rx='4' fill='#F7F5F4' />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M15.0772 11.4637C15.3769 11.3578 15.7064 11.3752 15.9933 11.5122C16.2802 11.6492 16.5009 11.8945 16.6069 12.1942C16.8548 12.896 17.3141 13.5036 17.9218 13.9334C18.5294 14.3632 19.2553 14.594 19.9996 14.594C20.7439 14.594 21.4698 14.3632 22.0775 13.9334C22.6851 13.5036 23.1445 12.896 23.3923 12.1942C23.4429 12.0434 23.523 11.9041 23.6279 11.7845C23.7329 11.665 23.8605 11.5675 24.0035 11.4977C24.1465 11.428 24.302 11.3874 24.4608 11.3784C24.6196 11.3693 24.7787 11.392 24.9287 11.445C25.0786 11.4981 25.2166 11.5804 25.3344 11.6873C25.4522 11.7942 25.5476 11.9234 25.615 12.0676C25.6824 12.2117 25.7204 12.3678 25.7268 12.5267C25.7333 12.6857 25.708 12.8443 25.6525 12.9934C25.2393 14.1624 24.4737 15.1746 23.4613 15.8904C22.449 16.6063 21.2395 16.9907 19.9996 16.9907C18.7597 16.9907 17.5503 16.6063 16.5379 15.8904C15.5255 15.1746 14.76 14.1624 14.3467 12.9934C14.2407 12.6937 14.2582 12.3642 14.3952 12.0773C14.5321 11.7904 14.7775 11.5697 15.0772 11.4637ZM20.5759 8.59767H19.4218C16.8243 8.59767 15.0947 8.60246 13.784 8.76391C12.5404 8.91736 11.9666 9.1843 11.5638 9.51838C11.1609 9.85405 10.7933 10.3672 10.4129 11.5612C10.0133 12.8192 9.69036 14.5183 9.21083 17.0727C8.53948 20.6532 8.08871 23.0845 8.00879 24.9163C7.93206 26.6826 8.22778 27.4339 8.64338 27.9342C9.05897 28.4345 9.74152 28.8629 11.4918 29.1123C13.3061 29.3712 15.7805 29.3776 19.4234 29.3776H20.5743C24.2187 29.3776 26.6915 29.3712 28.5058 29.1123C30.2561 28.8629 30.9386 28.4345 31.3542 27.9342C31.7698 27.4323 32.0656 26.6826 31.9888 24.9163C31.9089 23.0845 31.4581 20.6532 30.7868 17.0727C30.3073 14.5183 29.986 12.8208 29.5848 11.5612C29.2043 10.3672 28.8367 9.85245 28.4339 9.51838C28.0311 9.1843 27.4588 8.91736 26.2136 8.76391C24.9029 8.60246 23.1733 8.59767 20.5759 8.59767ZM10.0324 7.67376C8.25815 9.14753 7.7898 11.6427 6.8547 16.6315C5.53917 23.6471 4.88061 27.1541 6.79876 29.4655C8.71691 31.7753 12.2847 31.7753 19.4218 31.7753H20.5759C27.713 31.7753 31.2823 31.7753 33.2005 29.4655C35.1186 27.1541 34.46 23.6471 33.1445 16.6299C32.2094 11.6427 31.7411 9.14753 29.9652 7.67376C28.1909 6.19998 25.651 6.19998 20.5759 6.19998H19.4218C14.3467 6.19998 11.8083 6.19998 10.0324 7.67376Z'
                          fill='#323232'
                        />
                        <rect
                          x='21'
                          y='17'
                          width='15'
                          height='15'
                          rx='7.5'
                          fill='white'
                        />
                        <path
                          d='M29.12 19.5V29.42H27.62V19.5H29.12ZM33.22 23.7V25.2H23.5V23.7H33.22Z'
                          fill='#323232'
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
