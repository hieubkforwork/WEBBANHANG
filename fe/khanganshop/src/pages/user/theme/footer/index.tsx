import { memo } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import {
  AiOutlineShoppingCart,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineUser,
  
} from "react-icons/ai";
import { SiZalo } from "react-icons/si";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_about">
              <div className="footer_about_logo">
                <img
                  src={
                    import.meta.env.VITE_PUBLIC_URL +
                    `/asset/user/logo/logokhangan.png`
                  }
                  alt="logo-khang-an"
                />
              </div>
              <ul>
                <li>Address: Biên Hoà,Đồng Nai</li>
                <li>Phone: 0869611401</li>
                <li>Email: hieu.duongk22bk@hcmut.edu.vn</li>
              </ul>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <div className="footer_widget">
              <h6>Cửa hàng</h6>
              <ul>
                <li>
                  <Link to="">Liên hệ</Link>
                </li>
                <li>
                  <Link to="">Thông tin về chúng tôi</Link>
                </li>
                <li>
                  <Link to="">Sản phẩm kinh doanh</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link to="">Thông tin tài khoản</Link>
                </li>
                <li>
                  <Link to="">Giỏ hàng</Link>
                </li>
                <li>
                  <Link to="">Danh sách ưa thích</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-12 col-sm-12 col-xs-12">
            <div className="footer_widget">
              <h6>Khuyến mãi & ưu đãi</h6>
              <p>Đăng ký nhận thông tin tại đây</p>
              <form action="#">
                <div className="submit-container">
                  <input type="text" placeholder="Nhập Email" />
                  <button type="submit">Đăng ký</button>
                </div>
                <div className="footer_widget_social">
                  <div>
                    <AiOutlineFacebook />
                  </div>
                  <div>
                    <AiOutlineInstagram />
                  </div>
                  <div>
                    <SiZalo />
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
