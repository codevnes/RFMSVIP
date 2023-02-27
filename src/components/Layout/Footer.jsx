import React from 'react'

import './Footer.scss';

import HelpDesk from './help-desk.svg';
import Zalo from './zalo.svg';
import Facebook from './facebook.svg';
import Logo from '../../image/logo.svg';

export default function Footer() {
    return (
        <footer>
            <section>
                <div className='container'>
                    <div className='flex'>
                        <div className='basis-1/3'>
                            <img src={Logo} alt='logo' className='w-48 mb-3' />
                            <div class="sp_footer">
                                <ul>
                                    <li class="item">
                                        <a href="tel:0813908901">
                                            <div class="boxicon">
                                                <img src={HelpDesk} alt="Support" />
                                                <figure>
                                                    <p>Hỗ trợ 9h - 22H</p>
                                                    <span>0813 908 901</span>
                                                </figure>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="tel:0813908901">
                                            <div class="boxicon">
                                                <img src={Zalo} alt="Zalo" />
                                                <figure>
                                                    <p>Hỗ trợ qua Zalo</p>
                                                    <span>0813 908 901</span>
                                                </figure>
                                            </div>
                                        </a>
                                    </li>
                                    <li class="item">
                                        <a href="tel:0813908901">
                                            <div class="boxicon">
                                                <img src={Facebook} alt="Support" />
                                                <figure>
                                                    <p>Hỗ trợ qua Facebook</p>
                                                    <span>Trần Danh Trọng</span>
                                                </figure>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </footer>
    )
}
