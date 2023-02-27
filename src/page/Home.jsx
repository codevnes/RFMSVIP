
import './home.scss'

import '../index.css'
import WebSection from '../components/section/WebSection';
import ProductSection from '../components/section/ProductSection';
import PostSection from '../components/section/PostSection';
import { Helmet } from 'react-helmet';
function HomePage() {
    return (
        <>
            <Helmet>
                <title>RFM Soft</title>
            </Helmet>
            <section>
                <div className='container p-3 md:p-0'>
                    <div className="flex items-center flex-wrap">
                        <div className=" basis-full md:basis-1/2">
                            <div>
                                <h1 className="title">Bắt đầu xây dựng website chuyên nghiệp chuẩn SEO</h1>
                            </div>
                        </div>
                        <div className=" basis-full md:basis-1/2">
                            <div>
                                <img className="" src="https://rfm-soft.com/wp-content/themes/rfmsoft/assets/images/home/laptop-poses.png" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className='s_service'>
                <div className='container p-3 md:p-0'>
                    <div className="flex items-center">
                        <div>
                            <span className="en-title">WE CAN HELP YOU</span>
                            <h2 className="title">
                                Các dịch vụ chúng tôi có thể
                                <br />
                                giúp bạn
                            </h2>
                        </div>
                    </div>
                    <div className='flex gap-6 md:flex-nowrap flex-wrap'>
                        <div className=' basis-full md:basis-1/3'>
                            <div className='col-inner mt-2 md:mt-24'>
                                <div className='icon-box flex items-center'>
                                    <div className='img'>
                                        <img src="https://rfm-soft.com/wp-content/uploads/2023/02/icon-1.png" />
                                    </div>
                                    <div className="icon-box-text p-1">
                                        <h4 className="title">Thiết kế</h4>
                                        <p>Thiết kế chuẩn UX/UI giúp mang đến cho khách hàng trải nghiệm tốt nhất</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-full md:basis-1/3'>
                            <div className='col-inner mt=2 md:mt-12'>
                                <div className='icon-box flex items-center'>
                                    <div className='img'>
                                        <img src="https://rfm-soft.com/wp-content/uploads/2023/02/icon-2.png" />
                                    </div>
                                    <div className="icon-box-text p=1">
                                        <h4 className="title">Thiết kế</h4>
                                        <p>Thiết kế chuẩn UX/UI giúp mang đến cho khách hàng trải nghiệm tốt nhất</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='basis-full md:basis-1/3'>
                            <div className='col-inner mt=2'>
                                <div className='icon-box flex items-center'>
                                    <div className='img'>
                                        <img src="https://rfm-soft.com/wp-content/uploads/2023/02/icon-6.png" />
                                    </div>
                                    <div className="icon-box-text p-1">
                                        <h4 className="title">Chiến lược nội dung</h4>
                                        <p>Cung cấp dịch vụ biên tập nội dung chất lượng, SEO từ khóa trên top Google</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <WebSection />
            <ProductSection />
            <PostSection />
        </>
    )
}

export default HomePage