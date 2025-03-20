import React from 'react';

const ProductDetail = async ({ params, }: { params: { slug: string } }) => {
    const { slug } = await params;
    return (
        <div>
            <p>Đây là trang product detail {slug}</p>
        </div>
    );
};

export default ProductDetail;