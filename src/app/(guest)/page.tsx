import Link from 'next/link';
import React from 'react';
import BannerComponent from './component/banner';


const HomePage = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-content'>
                <p>Đây là trang chủ</p>
                <BannerComponent/>
                <p><Link href={'/product/detailProduct/2'}>ProductDetail</Link></p>
            </div>
        </div>
    );
};

export default HomePage;