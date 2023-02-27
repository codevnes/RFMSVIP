import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

import { Helmet } from 'react-helmet';

import './products.scss';

const ProductDetail = () => {

    const { slug } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        axios.get(`https://rfm-soft.com/wp-json/wc/v3/products?slug=${slug}`, {
            auth: {
                username: 'ck_3b0e661bfbb3c6b7df09f57f41e1c42c9461c6aa',
                password: 'cs_aa22b7f94c2f20f0f6db1c09233de3332cf46d77'
            }
        })
            .then(response => {
                setProduct(response.data[0]);
            })
            .catch(error => {
                console.log(error);
            });
    }, [slug]);

    if (!product) {
        return <div>đợi tí...</div>;
    }

    return (
        <div>

            <Helmet>
                <title>{product.name} - RFM Soft</title>
            </Helmet>

            <section className='product_page__top'>
                <div className='container'>
                    <div className='flex'>
                        <div className='basis-1/2 p-5'>
                            <div className='images'>
                                <img src={product.images[0].src} alt={product.name} />
                            </div>
                            <div className="bottom_img">
                                <p className="b">Mẫu giao diện được Code dựa trên nền tảng <span>WORDPRESS</span></p>
                                <p>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z"></path>
                                    </svg>
                                    <span>
                                        Link tải SourceCode sẽ được gửi vào mail của bạn.
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='basis-1/2 p-5'>
                            <div className='conents'>
                                <p>{product.meta_data.find(meta => meta.key === 'demo_url').value}</p>

                                <h2>{product.name}</h2>
                                <div>
                                    {product.price}
                                </div>
                                <div className="bottom_buy">
                                    <ul>
                                        <li>Giao diện tương thích với tất cả thiết bị, trình duyệt, mobile, tablet, desktop....</li>
                                        <li>Được code trên nền tảng mã nguồn mở WordPress dễ dàng sử dụng.</li>
                                        <li>Thiết kế chuẩn SEO, load nhanh nhẹ tối ưu với các công cụ tìm kiếm.</li>
                                        <li>Theme sạch hoàn toàn 100% không virus, không mã độc đã được kiểm tra kỹ lưỡng.</li>
                                        <li>Đầy đủ chức năng giỏ hàng, bán hàng online chuyên nghiệp.</li>
                                        <li>Tin tức, blog, form liên hệ đầy đủ.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProductDetail;
