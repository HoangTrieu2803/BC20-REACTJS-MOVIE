import React, { Component } from 'react';
import {FacebookOutlined, InstagramOutlined, TwitterOutlined} from '@ant-design/icons';
export default class Footer extends Component {
    render() {
        return <div className='bg-dark mt-3'>
            <div className='container row footer m-auto py-3'>
                <div className='col-md-12 col-lg-4'>
                    <h2>CyberMovie</h2>
                    <ul>
                        <li>
                            Quận 10, TP Hồ Chí Minh
                        </li>
                        <li>(+84) 123 456 789</li>
                    </ul>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <h3>Chính sách</h3>
                    <ul>
                        <li><a>Góp ý</a></li>
                        <li><a>Rạp / Giá vé</a></li>
                        <li><a>Tuyển dụng</a></li>
                    </ul>
                </div>
                <div className='col-md-12 col-lg-4'>
                    <h3>Kết nối</h3>
                    <ul>
                    <li className='icon-entertain'><FacebookOutlined /> <InstagramOutlined /> <TwitterOutlined /></li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
