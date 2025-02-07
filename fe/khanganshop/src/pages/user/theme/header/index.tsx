import { memo, useState } from "react";
import "./style.scss";
import {
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineMail,
  AiOutlinePhone,
  AiOutlineFacebook,
  AiOutlineInstagram,
  AiOutlineUser,
} from "react-icons/ai";
import { SiZalo } from "react-icons/si";
import { Link } from "react-router-dom";
import { ROUTERS } from "../../../../utils/router";

function Header() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index:any) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  const [menu] = useState([
    {
      name: "Trang Chủ",
      path: ROUTERS.USER.HOME,
    },
    {
      name: "Giới Thiệu",
      path: ROUTERS.USER.PROFILE,
    },
    {
      name: "Sản Phẩm",
      path: ROUTERS.USER.PRODUCT,
      isShowSubmenu: false,
      child: [
        {
          name: "Băng keo trong",
          path: "",
        },
        {
          name: "Băng keo cuộn",
          path: "",
        },
        {
          name: "Băng keo màu",
          path: "",
        },
      ],
    },
    {
      name: "Liên Hệ",
      path: ROUTERS.USER.CONTACT,
    },
  ]);
 
  return (
    <header>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-6 header-top-left">
              <ul>
                <li>
                  <AiOutlineMail /> : hieu.duongk22bk@hcmut.edu.vn
                </li>
                <li>
                  <AiOutlinePhone />: 0869611401
                </li>
              </ul>
            </div>

            <div className="col-6 header-top-right">
              <ul>
                <Link to={""}>
                  <li className="fb">
                    <AiOutlineFacebook />
                  </li>
                </Link>
                <Link to={""}>
                  <li className="ins">
                    <AiOutlineInstagram />
                  </li>
                </Link>
                <Link to={""}>
                  <li className="zalo">
                    <SiZalo />
                  </li>
                </Link>
                <Link to={""}>
                  <li className="last-child">
                    <AiOutlineUser />
                    <span>Đăng nhập</span>
                  </li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row sticky">
          <div className="col-xl-3 ">
            <div className="header_logo">
              <Link to="">
                <img
                  src={
                    import.meta.env.VITE_PUBLIC_URL +
                    `/asset/user/logo/logokhangan.png`
                  }
                  alt="logo-khang-an"
                />
                <div className="text-container">
                  <h1>KHANG AN TAPE</h1>
                  <h2>"Dán Dính Hoàn Hảo"</h2>
                </div>
              </Link>
            </div>
          </div>
          <div className="col-xl-6 ">
            <div className="header_menu">
              <ul>
                {menu?.map((name, index) => (
                  <li className= {`father_dropdown ${activeIndex === index ? "active" : ""}`} key={index} 
                     onClick={() => handleClick(index)}
                  >
                    <Link to={name?.path}>{name?.name}</Link>
                    {name?.child && (
                      <ul className="header_menu_dropdown">
                        {name.child.map((nameChild, indexChild) => (
                          <li key={`${index}-${indexChild}`}>
                            <Link to={nameChild.path}>{nameChild.name}</Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-xl-3 ">
            <div className="header_find_and_cart">
              <div className="header_find">
                <ul>
                  <li>
                    <Link to="#">
                      <AiOutlineSearch />
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="header_cart">
                <ul>
                  <li>
                    <Link to="#">
                      <AiOutlineShoppingCart /> <span>5</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
   
   </header>
  );
}

export default memo(Header);
