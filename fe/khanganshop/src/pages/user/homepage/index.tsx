import { memo, useEffect, useState } from "react";
import {
  // AiOutlineMenu,
  AiOutlineLeft,
  AiOutlineRight,
} from "react-icons/ai";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import dataCategory from "./dataCategory";
import dataSlider from "./dataSlider";
//import { Link } from "react-router-dom";
import "./style.scss";

function Home() {
  //const [showCat, setShowCat] = useState(true);
  const [slide, setSlide] = useState(1);
  const [autoPlay, setAutoPlay] = useState(true);
  let timeOut: any = null;
  useEffect(() => {
    timeOut =
      autoPlay &&
      setTimeout(() => {
        nextSlide();
      }, 4000);
  });

  const nextSlide = () => {
    if (slide !== dataSlider.length) {
      setSlide(slide + 1);
    } else setSlide(1);
  };
  const prevSlide = () => {
    if (slide !== 1) {
      setSlide(slide - 1);
    } else setSlide(dataSlider.length);
  };
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      {/*Banner begin*/}
      <div className="container">
        <div className="row hero_category_container">
          {/* <div className="col-xl-3 hero_category ">
            <div
              className="hero_category_all"
              onClick={() => setShowCat(!showCat)}
            >
              <AiOutlineMenu />
              Danh sách sản phẩm
            </div>

            <ul className={showCat ? "" : "hidden"}>
              <li>
                {" "}
                <Link to=""> Băng keo trong </Link>
              </li>
              <li>
                {" "}
                <Link to=""> Băng keo cuộn </Link>
              </li>
            </ul>
          </div> */}

          <div className="col-xl-12 hero_search_container">
            {/* <div className="hero_search_form">
              <form>
                <input type="text" placeholder="Bạn đang tìm kiếm..." />
                <button type="submit" className="site-button">
                  Tìm kiếm
                </button>
              </form>
            </div> */}

            <div className="carousel">
              <div
                className="carousel_wrapper"
                onMouseEnter={() => {
                  setAutoPlay(false);
                  clearTimeout(timeOut);
                }}
                onMouseLeave={() => setAutoPlay(true)}
              >
                {dataSlider.map((_slideData, slideIndex) => {
                  return (
                    <div
                      className={
                        slide === slideIndex + 1
                          ? "carousel_card active"
                          : "carousel_card"
                      }
                      key={slideIndex}
                    >
                      <img
                        src={
                          import.meta.env.VITE_PUBLIC_URL +
                          `/asset/user/slider/bangkeo${slideIndex + 1}.jpg`
                        }
                        alt="logo-khang-an"
                      />
                    </div>
                  );
                })}
                <button className="slider_btn left" onClick={prevSlide}>
                  <AiOutlineLeft />
                </button>
                <button className="slider_btn right" onClick={nextSlide}>
                  <AiOutlineRight />
                </button>
                <div className="slider_dot">
                  {dataSlider.map((_dotData, dotIndex) => {
                    return (
                      <div
                        className={
                          slide === dotIndex + 1 ? "dot dot_active" : "dot"
                        }
                        key={dotIndex}
                        onClick={() => {
                          setSlide(dotIndex + 1);
                        }}
                      ></div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*Banner end*/}
      {/*Category begin */}
      <div className="container container_category">
        <Carousel responsive={responsive} className="category_slider">
          {dataCategory.map((category, indexCategory) => (
            <div
              className="category_item"
              key={indexCategory}
              style={{
                backgroundImage: `url(${
                  import.meta.env.VITE_PUBLIC_URL
                }/asset/user/slider/bangkeo${indexCategory + 1}.jpg)`,
              }}
            >
              <p>{category.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
      {/*Category end */}
    </>
  );
}

export default memo(Home);
