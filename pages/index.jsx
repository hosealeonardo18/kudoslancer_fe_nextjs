import Image from 'next/image';

import styles from '@/styles/Home.module.css';
import Navbar from '@/components/Navbar';
import imgHero from '../public/images/true-agency-o4UhdLv5jbQ-unsplash 1.png';
import imgWhy from '../public/images/Rectangle 519.png';
import imgSkill from '../public/images/Rectangle 519-1.png';
import accsent from '../public/images/icon/Union.png';

import imgTesti from '../public/images/testi/Ellipse 325.png';
import imgTesti2 from '../public/images/testi/Ellipse 323.png';
import imgTesti3 from '../public/images/testi/Ellipse 320.png';
import imgTesti4 from '../public/images/Profile/formal.png';

import Headingtext from '@/components/HeadingText';

import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Keyboard, Scrollbar, Navigation, Pagination } from 'swiper';
import CardTesti from '@/components/CardTesti';
import Footer from '@/components/Footer';

// import aos
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar />

      {/* hero */}
      <div className={`container-fluid ${styles.rowHero}`}>
        <div className="container">
          <div className="row vh-100 d-flex align-items-center">
            <div className="col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
              <h3 className={styles.headingText}>Talenta terbaik negri untuk perubahan revolusi 4.0</h3>
              <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio perspiciatis architecto necessitatibus pariatur, corrupti unde autem?</p>

              <button className={styles.buttonCTA}>Mulai Dari Sekarang</button>
            </div>
            <div className={`col-md-6 col-sm-12 d-flex justify-content-end ${styles.colSm}`} data-aos="fade-left" data-aos-duration="1000">
              <div className={`${styles.wrapperImgHero}`}>
                <div className={styles.accsentsImg1} />
                <Image src={imgHero} className={styles.imageHero} alt="img" />
                <div className={styles.accsentsImg2} />
                <Image src={accsent} className={styles.accsent3} alt="img" />
                <div className={styles.accsentsImg3} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        {/* why */}
        <div className="row ">
          <div className="col-md-6 col-sm-12 d-sm-flex justify-content-sm-center" data-aos="fade-right" data-aos-duration="1000">
            <div className={`${styles.wrapperImgWhy}`}>
              <div className={styles.accsentsImgWhy} />
              <Image src={imgWhy} className={styles.imageWhy} alt="img" />
              <div className={styles.accsentsImgWhy2} />
            </div>
          </div>
          <div className="col-md-6 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
            <Headingtext children={`Kenapa harus mencari tallent di Kudoslancer`} />

            <ul className={styles.listItems}>
              <li className={styles.listItem}>
                <i className={`bi bi-check-all ${styles.iconSuccess}`} />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>

              <li className={styles.listItem}>
                <i className={`bi bi-check-all ${styles.iconSuccess}`} />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>

              <li className={styles.listItem}>
                <i className={`bi bi-check-all ${styles.iconSuccess}`} />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>

              <li className={styles.listItem}>
                <i className={`bi bi-check-all ${styles.iconSuccess}`} />
                <span>Lorem ipsum dolor sit amet.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-6 col-sm-12" data-aos="fade-right" data-aos-duration="1000">
            <Headingtext children={`Skill Tallent`} />
            <div className="container  p-0">
              <div className="row">
                <div className="col-md-6 col-sm-6">
                  <ul className={styles.listItems}>
                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>Java</span>
                    </li>

                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>Kotlin</span>
                    </li>

                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>PHP</span>
                    </li>

                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>Javascript</span>
                    </li>
                  </ul>
                </div>

                <div className="col-md-6 col-sm-6" data-aos="fade-left" data-aos-duration="1000">
                  <ul className={styles.listItems}>
                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>Golang</span>
                    </li>

                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>C++</span>
                    </li>

                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>Ruby</span>
                    </li>

                    <li className={styles.listItem}>
                      <i className={`bi bi-check-all ${styles.iconSuccessWarning}`} />
                      <span>Rust</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className={`col-md-6 col-sm-12 d-flex justify-content-sm-center justify-content-end ${styles.colSmOrder}`} data-aos="fade-left" data-aos-duration="1000">
            <div className={`${styles.wrapperImgSkill}`}>
              <div className={styles.accsentsImgSkill} />
              <Image src={imgSkill} className={styles.imageSkill} alt="img" />
              <div className={styles.accsentsImgSkill2} />
            </div>
          </div>
        </div>
      </div>

      <div className={`container-fluid mt-5 ${styles.bgContainerFluid}`}>
        <div className="container">
          <div className="row text-center">
            <div className="col-md-12">
              <h3 className={styles.headerText}>Their opinion about peworld</h3>
              <Swiper
                slidesPerView={3}
                centeredSlides={false}
                slidesPerGroupSkip={1}
                grabCursor={true}
                keyboard={{
                  enabled: true,
                }}
                breakpoints={{
                  375: {
                    slidesPerView: 2,
                    spaceBetween: 100,
                  },
                  418: {
                    slidesPerView: 2,
                    spaceBetween: 50,
                  },
                  576: {
                    slidesPerView: 3,
                    spaceBetween: 130,
                  },
                  769: {
                    slidesPerView: 3,
                    spaceBetween: 330,
                  },

                  991: {
                    slidesPerView: 3,
                    spaceBetween: 130,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 250,
                  },
                }}
                scrollbar={true}
                navigation={true}
                pagination={{
                  clickable: true,
                }}
                modules={[Keyboard, Scrollbar, Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <CardTesti imgTesti={imgTesti} titleName="Hary Styles" job="Web Developer" comment="Saya cepat mendapatkan kerja berkat kudoslancer" />
                </SwiperSlide>

                <SwiperSlide>
                  <CardTesti imgTesti={imgTesti2} titleName="Niall Horan" job="Frontend Developer" comment="Saya cepat mendapatkan kerja berkat kudoslancer" />
                </SwiperSlide>

                <SwiperSlide>
                  <CardTesti imgTesti={imgTesti3} titleName="Louis Tomlinson" job="Backend Developer" comment="Saya cepat mendapatkan kerja berkat kudoslancer" />
                </SwiperSlide>

                <SwiperSlide>
                  <CardTesti imgTesti={imgTesti4} titleName="Hosea Leonardo" job="Frontend Developer" comment="Saya cepat mendapatkan kerja berkat kudoslancer" />
                </SwiperSlide>

                <SwiperSlide>
                  <CardTesti imgTesti={imgTesti4} titleName="Hosea Leonardo" job="Frontend Developer" comment="Saya cepat mendapatkan kerja berkat kudoslancer" />
                </SwiperSlide>

                <SwiperSlide>
                  <CardTesti imgTesti={imgTesti4} titleName="Hosea Leonardo" job="Frontend Developer" comment="Saya cepat mendapatkan kerja berkat kudoslancer" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
