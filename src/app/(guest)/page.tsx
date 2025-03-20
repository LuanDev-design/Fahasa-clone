import Link from 'next/link';
import React from 'react';



const HomePage = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-content'>
                <p>Đây là trang chủ</p>
             
                <p><Link href={'/product/detailProduct/2'}>ProductDetail</Link></p>
            </div>
        </div>
    );
};

export default HomePage;