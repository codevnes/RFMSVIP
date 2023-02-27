import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function formatPrice(price) {
    // Chuyển đổi giá sang kiểu số
    const numberPrice = parseFloat(price);

    // Thêm dấu chấm phân cách phần ngàn
    return numberPrice.toLocaleString("vi-VN", { style: "currency", currency: "VND" });
}

const ProductSection = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get('https://rfm-soft.com/wp-json/wc/v3/products', {
            params: {
                per_page: 4
            },
            auth: {
                username: 'ck_3b0e661bfbb3c6b7df09f57f41e1c42c9461c6aa',
                password: 'cs_aa22b7f94c2f20f0f6db1c09233de3332cf46d77'
            }
        })
            .then(response => {
                setProducts(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    return (
        <section className='product_section'>
            <div className='container'>
                <div class="flex justify-center text-center w-full">
                    <div>
                        <span class="en-title">Web Templates</span>
                        <h2 class="title">Giao diện web</h2>
                    </div>
                </div>
                <div className="flex flex-wrap product_list">
                    {products.map(product => (
                        <div className="basis-1/4 py-2" key={product.id}>
                            <div className="product_item">
                                <div className="img">
                                    <img src={product.images[0].src} alt={product.name} />
                                </div>
                                <div className="box-text-products">
                                    <span>
                                        <ul>
                                            {product.categories.map(category => (
                                                <li key={category.id}>{category.name}</li>
                                            ))}
                                        </ul>
                                    </span>
                                    <Link to={`/product/${product.slug}`}>
                                        <h2 className="product-title">{product.name}</h2>
                                    </Link>
                                    <div className="price">
                                        <span>Giá: </span>
                                        <span className="amount">
                                            {formatPrice(product.price)}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <div class="view_more">
                    <a href="#">Xem thêm giao diện</a><br />
                    <a href="">Hotline: 0813.908.901</a>
                </div>
            </div>
        </section>

    );
};

export default ProductSection;
