import React from 'react';
import styles from './menu.module.scss'
import classNames from 'classnames/bind';
import Link from 'next/link';
import { MdClear } from 'react-icons/md'


const cx = classNames.bind(styles)

const Menu: React.FC = ({ setMenu }: any) => {
    return (
        <div className={cx('body')} >
            <div >
                <MdClear className={cx('menu1')} onClick={() => setMenu(false)} /><br></br>
                <Link href='/sanpham' >
                    <h3>SẢN PHẨM</h3>
                </Link>
                <Link href='/tatcasanpham' >
                    <h3>SẢN PHẨM MỚI</h3>
                </Link>
                <Link href='/bosuutap' >
                    <h3>BỘ SƯU TẬP</h3>
                </Link>
                <Link href='/nemonline' >
                    <h3>NEW ONLINE</h3>
                </Link>
                <Link href='/nhapkhaunhatban' >
                    <h3>SẢN PHẨM NHẬP KHẨU TỪ NHẬT BẢN</h3>
                </Link>
            </div>
        </div>
    );
}

export default Menu;