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
import axios from 'axios';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getDetailJobseekrs } from '@/redux/action/jobseekersAction';

export default function ProfileDetail() {
  const dispatch = useDispatch();
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const router = useRouter();
  const id = router.query.id;
  const [jobseekersId, setJobseekersId] = useState([]);
  const [skills, setSkills] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [portfolios, setPortfolios] = useState([]);
  const [role, setRole] = useState('');
  console.log(role);

  useEffect(() => {
    setRole(localStorage.getItem('role'));
    // get jobseekers
    dispatch(getDetailJobseekrs(setJobseekersId, id));

    // // get skill by id
    axios
      .get(`http://localhost:4000/skill/detail/jobseekerId/${id}`)
      .then((response) => {
        setSkills(response.data.data);
      })
      .catch((err) => console.log(err));

    // // get experience by id
    axios
      .get(`http://localhost:4000/experience/detail/jobseeker/${id}`)
      .then((response) => {
        setExperiences(response.data.data);
      })
      .catch((err) => console.log(err));

    // // get portfolios
    axios
      .get(`http://localhost:4000/portfolio/detail/jobseeker/${id}`)
      .then((response) => {
        setPortfolios(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [id, dispatch]);

  return (
    <div className={style.bgBody}>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-12 mb-5" data-aos="fade-right" data-aos-duration="1000">
            <div className={style.wrapperCard}>
              <Image src={jobseekersId?.image} alt="img" width={150} height={150} className={style.imageCard} crossOrigin="anonymous" />
              <h5 className={style.titleName}>{jobseekersId?.fullname}</h5>
              <span className={style.job}>{jobseekersId?.position}</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>{jobseekersId?.city}</span>
              </div>

              <p className={style.description}>{jobseekersId?.description}</p>

              {role === 'jobseeker' ? (
                <button className={`d-none ${style.buttonHire}`} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
                  Hire
                </button>
              ) : (
                <button className={`${style.buttonHire}`} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
                  Hire
                </button>
              )}

              <h3 className="mt-4 ">Skill</h3>
              <div className={style.wrapperSkills}>
                {skills?.map((item) => {
                  return <span className={style.skills}>{item.skill_name}</span>;
                })}
              </div>

              <ul className={style.listSocials}>
                <li className={style.listSocial}>
                  <i className={`bi bi-envelope ${style.icon}`} />
                  <span className={style.titleIcon}>{jobseekersId?.email}</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-instagram ${style.icon}`} />
                  <span className={style.titleIcon}>{jobseekersId?.instagram}</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-github ${style.icon}`} />
                  <span className={style.titleIcon}>{jobseekersId?.github}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-8 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
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
                      {portfolios?.length < 1 ? (
                        <h3>Data not Found!</h3>
                      ) : (
                        portfolios?.map((expe) => {
                          return <CardPorto img={expe.image} titleName={expe.application_name} />;
                        })
                      )}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div className="container">
                    <div className="row my-5">
                      {experiences?.length < 1 ? (
                        <h3>Data not Found!</h3>
                      ) : (
                        experiences?.map((expe) => {
                          return <CardExperience img={expe.image} titleName={expe.position} company={expe.company_name} desc={expe.description} />;
                        })
                      )}
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
