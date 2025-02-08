import { memo, useState } from "react";
import "../../../../styles/index.css";
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

// function Header() {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const handleClick = (index:any) => {
//     setActiveIndex(index === activeIndex ? null : index);
//   };

//   const [menu] = useState([
//     {
//       name: "Trang Chủ",
//       path: ROUTERS.USER.HOME,
//     },
//     {
//       name: "Giới Thiệu",
//       path: ROUTERS.USER.PROFILE,
//     },
//     {
//       name: "Sản Phẩm",
//       path: ROUTERS.USER.PRODUCT,
//       isShowSubmenu: false,
//       child: [
//         {
//           name: "Băng keo trong",
//           path: "",
//         },
//         {
//           name: "Băng keo cuộn",
//           path: "",
//         },
//         {
//           name: "Băng keo màu",
//           path: "",
//         },
//       ],
//     },
//     {
//       name: "Liên Hệ",
//       path: ROUTERS.USER.CONTACT,
//     },
//   ]);

//   return (
//     <header>
//       <div className="header_top">
//         <div className="container">
//           <div className="row">
//             <div className="col-6 header-top-left">
//               <ul>
//                 <li>
//                   <AiOutlineMail /> : hieu.duongk22bk@hcmut.edu.vn
//                 </li>
//                 <li>
//                   <AiOutlinePhone />: 0869611401
//                 </li>
//               </ul>
//             </div>

//             <div className="col-6 header-top-right">
//               <ul>
//                 <Link to={""}>
//                   <li className="fb">
//                     <AiOutlineFacebook />
//                   </li>
//                 </Link>
//                 <Link to={""}>
//                   <li className="ins">
//                     <AiOutlineInstagram />
//                   </li>
//                 </Link>
//                 <Link to={""}>
//                   <li className="zalo">
//                     <SiZalo />
//                   </li>
//                 </Link>
//                 <Link to={""}>
//                   <li className="last-child">
//                     <AiOutlineUser />
//                     <span>Đăng nhập</span>
//                   </li>
//                 </Link>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="container">
//         <div className="row sticky">
//           <div className="col-xl-3 ">
//             <div className="header_logo">
//               <Link to="">
//                 <img
//                   src={
//                     import.meta.env.VITE_PUBLIC_URL +
//                     `/asset/user/logo/logokhangan.png`
//                   }
//                   alt="logo-khang-an"
//                 />
//                 <div className="text-container">
//                   <h1>KHANG AN TAPE</h1>
//                   <h2>"Dán Dính Hoàn Hảo"</h2>
//                 </div>
//               </Link>
//             </div>
//           </div>
//           <div className="col-xl-6 ">
//             <div className="header_menu">
//               <ul>
//                 {menu?.map((name, index) => (
//                   <li className= {`father_dropdown ${activeIndex === index ? "active" : ""}`} key={index}
//                      onClick={() => handleClick(index)}
//                   >
//                     <Link to={name?.path}>{name?.name}</Link>
//                     {name?.child && (
//                       <ul className="header_menu_dropdown">
//                         {name.child.map((nameChild, indexChild) => (
//                           <li key={`${index}-${indexChild}`}>
//                             <Link to={nameChild.path}>{nameChild.name}</Link>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//           <div className="col-xl-3 ">
//             <div className="header_find_and_cart">
//               <div className="header_find">
//                 <ul>
//                   <li>
//                     <Link to="#">
//                       <AiOutlineSearch />
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//               <div className="header_cart">
//                 <ul>
//                   <li>
//                     <Link to="#">
//                       <AiOutlineShoppingCart /> <span>5</span>
//                     </Link>
//                   </li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//    </header>
//   );
// }

// export default memo(Header);

function Header() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index: any) => {
    if (index !== activeIndex)
      setActiveIndex(index === activeIndex ? 0 : index);
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
    <>
      {/* {Header-bottom BEGIN} */}
      <div className="header bg-white sticky top-0 z-1000  ">
        <div className="container m-auto  ">
          <div className="header_row flex flex-wrap items-center">
            {/* {Header-bottom logo BEGIN} */}
            <div className="basis-1/4 sticky top-0 z-40  ">
              <Link onClick={() => {
                        handleClick(0);
                      }} to="/">
                <div className="header_logo flex items-center pl-1.5 py-2">
                  <img
                    className="w-20 h-auto "
                    src={
                      import.meta.env.VITE_PUBLIC_URL +
                      `/asset/user/logo/logokhangan.png`
                    }
                    alt="logo-khang-an"
                  />

                  <div className="text-container">
                    <h1 className="text-lg font-semibold text-normal ">
                      KHANG AN TAPE
                    </h1>
                    <h2 className="text-sm font-light text-main">
                      "Dán Dính Hoàn Hảo"
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
            {/* {Header-bottom Logo END} */}
            {/* // */}
            {/* {Header-bottom Menu BEGIN} */}
            <div className="basis-1/2">
              <div className="header_menu py-6">
                <ul className="flex justify-between list-none">
                  {menu?.map((name, index) => (
                    <li
                      className={`${
                        activeIndex === index
                          ? "text-main relative group px-4"
                          : "relative group px-4"
                      }`}
                      key={index}
                      onClick={() => {
                        handleClick(index);
                      }}
                    >
                      <Link
                        className={`no-underline text-lg font-medium block py-1.5
                        before:content-[''] before:w-0 before:h-1.5 before:bg-main before:absolute
                        before:top-full before:left-0 before:duration-300 hover:before:w-full 
                        ${activeIndex === index ? "before:w-full" : ""}
                      `}
                        to={name?.path}
                      >
                        {name?.name}
                      </Link>
                      {name?.child && (
                        <ul className="header_menu_dropdown bg-bgr absolute w-40 top-10 -left-1 z-50 py-1.5 transition-all duration-500 opacity-0 invisible block group-hover:opacity-100 group-hover:visible">
                          {name.child.map((nameChild, indexChild) => (
                            <li key={`${index}-${indexChild}`}>
                              <Link className='uppercase font-normal text-sm pt-1.5 pb-1.5 pl-3.5 hover:text-main  'to={nameChild.path}>{nameChild.name}</Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* {Header-bottom Menu END} */}
            {/* {Header-bottom SubMenu BEGIN} */}
            <div className="basis-1/4 bg-green-500">
              <div className="header_icon flex">
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
            {/* {Header-bottom SubMenu END} */}
          </div>
        </div>
      </div>
      {/* {Header-bottom BEGIN} */}
    </>
  );
}

export default memo(Header);
