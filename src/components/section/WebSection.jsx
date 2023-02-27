import React from 'react'
import './WebSection.scss'

export default function WebSection() {
    return (
        <section className='web_section p-0 md:p-2 md:py-8'>

            <div className='flex justify-center text-center w-full'>
                <div className=''>
                    <span className="en-title">Service pack</span><p></p>
                    <h2 className="title">Thiết kế website</h2>
                </div>
            </div>


            <div className='flex container gap-5 md:flex-nowrap flex-wrap '>
                <div className='basis-full md:basis-1/3 p-5 bg-white'>
                    <div>
                        <div className="price_tab">
                            <h3>BASIC</h3>
                            <p>Thiết kế website cơ bản</p>
                            <ul>
                                <li>
                                    <h4>PHÙ HỢP VỚI</h4>
                                </li>
                                <li>Website giới thiệu cá nhân, cửa hàng và doanh nghiệp trung bình, nhỏ</li>
                                <li>Web bán hàng phổ thông</li>
                                <li>Thiết kế giao diện độc quyền theo yêu cầu: 1 giao diện trang chủ</li>
                                <li>Chỉnh sửa miễn phí giao diện: tối đa 3 lần</li>
                                <li>Lập trình chức năng cơ bản theo yêu cầu</li>
                                <li>Hiệu ứng website: Cơ bản</li>
                                <li>Nền tảng lập trình: Tự chọn</li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>ĐÃ BAO GỒM</h4>
                                </li>
                                <li>Thiết kế chuẩn UI/UX – giao diện người dùng và trải nghiệm người dùng</li>
                                <li>Chuẩn Responsive – tương thích với nhiều trình duyệt, thiết bị như PC, laptop, máy tính bảng, di động,…)
                                </li>
                                <li>Tối ưu tốc độ load trang</li>
                                <li>Lập trình chuẩn SEO</li>
                                <li>Miễn phí bảo mật SSL năm đầu</li>
                                <li>Hướng dẫn quản trị</li>
                                <li>Bàn giao mã nguồn (source code)</li>
                                <li>Bảo hành và bảo trì vĩnh viễn</li>
                                <li>Hỗ trợ kỹ thuật 24/7</li>
                            </ul>
                            <a href="">Tư vấn báo giá</a>
                        </div>
                    </div>
                </div>
                <div className='basis-full md:basis-1/3 p-5 bg-white '>
                    <div>
                        <div className="price_tab">
                            <h3>BASIC</h3>
                            <p>Thiết kế website cơ bản</p>
                            <ul>
                                <li>
                                    <h4>PHÙ HỢP VỚI</h4>
                                </li>
                                <li>Website giới thiệu cá nhân, cửa hàng và doanh nghiệp trung bình, nhỏ</li>
                                <li>Web bán hàng phổ thông</li>
                                <li>Thiết kế giao diện độc quyền theo yêu cầu: 1 giao diện trang chủ</li>
                                <li>Chỉnh sửa miễn phí giao diện: tối đa 3 lần</li>
                                <li>Lập trình chức năng cơ bản theo yêu cầu</li>
                                <li>Hiệu ứng website: Cơ bản</li>
                                <li>Nền tảng lập trình: Tự chọn</li>
                            </ul>
                            <ul>
                                <li>
                                    <h4>ĐÃ BAO GỒM</h4>
                                </li>
                                <li>Thiết kế chuẩn UI/UX – giao diện người dùng và trải nghiệm người dùng</li>
                                <li>Chuẩn Responsive – tương thích với nhiều trình duyệt, thiết bị như PC, laptop, máy tính bảng, di động,…)
                                </li>
                                <li>Tối ưu tốc độ load trang</li>
                                <li>Lập trình chuẩn SEO</li>
                                <li>Miễn phí bảo mật SSL năm đầu</li>
                                <li>Hướng dẫn quản trị</li>
                                <li>Bàn giao mã nguồn (source code)</li>
                                <li>Bảo hành và bảo trì vĩnh viễn</li>
                                <li>Hỗ trợ kỹ thuật 24/7</li>
                            </ul>
                            <a href="">Tư vấn báo giá</a>
                        </div>
                    </div>
                </div>
                <div className='basis-full md:basis-1/3 p-5 bg-white'>
                    <div className="why_price">
                        <h2>
                            TẠI SAO THIẾT KẾ WEBSITE TẠI RFM CÓ NHIỀU MỨC GIÁ?<br />
                        </h2>
                        <p>
                            Thiết kế Website được tối ưu theo những tiêu chí cốt lõi trọng tâm vào khách hàng của bạn là mục tiêu mà RFM – Soft hướng đến. Chúng tôi hiểu rằng ở bất cứ ngành nghề với bất cứ quy mô nào cũng cần có thiết kế website chuyên nghiệp và hiệu quả. Vì thế dịch vụ thiết kế web của chúng tôi đáp ứng mọi khách hàng ở mọi phân khúc với mức giá hợp lý.
                        </p>
                    </div>
                </div>
            </div>

        </section>
    )
}
