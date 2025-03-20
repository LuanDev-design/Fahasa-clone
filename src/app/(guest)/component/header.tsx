import { Bell, ChevronDown, LayoutGrid, Search, ShoppingCart, User } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const HeaderComponent = () => {
    return (
        <div className='w-full flex flex-col items-center'>
            <div className='w-content h-[68px] flex items-center justify-between' >
                <div className='logoNe'>
                    <Image src="/images/logo/logo.webp" width={216} height={200} alt='Lỗi hình ảnh' />
                </div>
                <div className='categoriesIcon w-[90px] flex items-center justify-end '>
                    <LayoutGrid width={35} height={45} color='#5e5e5e' />
                    <ChevronDown color="#5e5e5e" />
                </div>
                <div className='inputNe w-[585px] h-[40px] flex justify-around items-center border-1 border-[#ebebeb] rounded-[6px] '>
                    <input type="text" placeholder='50 Đề Minh Họa Tốt Nghiệp' className='w-[470px] pl-[20px] outline-0' />
                    <div className='bg-[#C92127] w-[68px] h-[26px] p-[2px] rounded-[4px] flex items-center justify-center'>
                        <Search size={20} strokeWidth={2} color='white' />
                    </div>
                </div>
                <div className='personal w-[325px] h-[40px] flex items-center justify-end gap-[15px]'>
                    <div className='w-[62px] h-[45px] flex flex-col justify-center items-center gap-[2px]'>
                        <Bell size={24} strokeWidth={2} color='#7a7e7f' />
                        <p className='text-[12px] font-[400] text-center text-[#7a7e7f]'>Thông Báo</p>
                    </div>
                    <div className='w-[62px] h-[45px] flex flex-col justify-center items-center gap-[2px]'>
                        <ShoppingCart size={24} strokeWidth={2} color='#7a7e7f' />
                        <p className='text-[12px] font-[400] text-center text-[#7a7e7f]'>Giỏ Hàng</p>
                    </div>
                    <div className='w-[62px] h-[45px] flex flex-col justify-center items-center gap-[2px]'>
                        <User size={24} strokeWidth={2} color='#7a7e7f' />
                        <p className='text-[12px] font-[400] text-center text-[#7a7e7f]'>Tài Khoản</p>
                    </div>
                    <div className='w-[75px] h-[40px] border-1 border-[#ebebeb] rounded-[6px] flex items-center justify-center gap-[2px]'>
                        <div className='h-[24px]'>
                            <Image src={'/images/logo/flagVN.png'} width={37} height={24} alt='Lỗi ảnh' />
                        </div>
                        <ChevronDown size={18} strokeWidth={3} color='#7a7e7f' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderComponent;