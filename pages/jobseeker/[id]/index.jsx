import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './profile.module.css';
import img from '../../../public/images/testi/Ellipse 325.png';
import porto1 from '../../../public/images/portfolio/Rectangle 642.png';
import porto2 from '../../../public/images/portfolio/Rectangle 641.png';
import porto3 from '../../../public/images/portfolio/Rectangle 640.png';
import porto4 from '../../../public/images/portfolio/Rectangle 639.png';
import porto5 from '../../../public/images/portfolio/Rectangle 638.png';
import porto6 from '../../../public/images/portfolio/Rectangle 637.png';

import experience from '../../../public/images/experience/Rectangle 672.png';

import Footer from '@/components/Footer';
import Link from 'next/link';
import CardPorto from '@/components/CardPorto';
import CardExperience from '@/components/CardExperience';

export default function ProfileDetail() {
  const router = useRouter();

  return (
    <div className={style.bgBody}>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-12 mb-5">
            <div className={style.wrapperCard}>
              <Image src={img} alt="img" className={style.imageCard} />
              <h5 className={style.titleName}>Louis Tomlinson</h5>
              <span className={style.job}>Web developer</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>Jakarta, Indonesia</span>
              </div>

              <p className={style.description}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Architecto dolores inventore quam libero vitae enim fugiat, ex illum rem neque, omnis aliquid nemo quas ea!</p>

              <button className={style.buttonHire} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
                Hire
              </button>

              <h3 className="mt-4">Skill</h3>
              <div className={style.wrapperSkills}>
                <span className={style.skills}>PHP</span>
                <span className={style.skills}>Javascript</span>
                <span className={style.skills}>React JS</span>
                <span className={style.skills}>Express JS</span>
              </div>

              <ul className={style.listSocials}>
                <li className={style.listSocial}>
                  <i className={`bi bi-envelope ${style.icon}`} />
                  <span className={style.titleIcon}>example@gmail.com</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-instagram ${style.icon}`} />
                  <span className={style.titleIcon}>Hosea Leonardo</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-github ${style.icon}`} />
                  <span className={style.titleIcon}>Hosea Leonardo</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className={style.wrapperCard}>
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${style.buttonPort}`} id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">
                    Portfolio
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className={`nav-link ${style.buttonExperience}`} id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">
                    Pengalaman Kerja
                  </button>
                </li>
              </ul>

              <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <div className="container">
                    <div className="row mt-5">
                      <CardPorto img={porto1} titleName="Reminder App" />

                      <CardPorto img={porto2} titleName="Socila Media" />

                      <CardPorto img={porto3} titleName="Project Management Web" />

                      <CardPorto img={porto4} titleName="Cashier" />

                      <CardPorto img={porto5} titleName="Cashier" />

                      <CardPorto img={porto6} titleName="Cashier" />
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div className="container">
                    <div className="row my-5">
                      <CardExperience img={experience} titleName="Engineer" />
                      <CardExperience img={experience} titleName="Web Developer" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
