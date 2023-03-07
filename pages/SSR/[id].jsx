import axios from 'axios';
import style from './ssr.module.css';
import { useRouter } from 'next/router';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import img from '../../public/images/testi/Ellipse 325.png';
import porto1 from '../../public/images/portfolio/Rectangle 642.png';
import experience from '../../public/images/experience/Rectangle 672.png';
import CardPorto from '@/components/CardPorto';
import CardExperience from '@/components/CardExperience';
import Footer from '@/components/Footer';
import { useState } from 'react';

export async function getServerSideProps({ params }) {
  const res = await axios.get(`${process.env.API_KUDOSLANCER}/jobseeker/${params.id}`);
  const resSkill = await axios.get(`${process.env.API_KUDOSLANCER}/skill/detail/jobseekerId`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const resExp = await axios.get(`${process.env.API_KUDOSLANCER}/experiences?jobseekerId=${params.id}`);
  const resPort = await axios.get(`${process.env.API_KUDOSLANCER}/portfolios?jobseekerId=${params.id}`);

  return {
    props: { jobseeker: res.data, skill: resSkill.data, experience: resExp.data, portfolio: resPort.data },
  };
}

const SSR = (jobseeker) => {
  const [idJobseekers, setIdJobseekers] = useState('');
  setIdJobseekers(localStorage.getItem('id'));

  console.log(idJobseekers);
  return (
    <div className={style.bgBody}>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-12 mb-5" data-aos="fade-right" data-aos-duration="1000">
            <div className={style.wrapperCard}>
              <Image src={img} alt="img" className={style.imageCard} />
              <h5 className={style.titleName}>{jobseeker.jobseeker.fullname}</h5>
              <span className={style.job}>{jobseeker.jobseeker.position}</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>{jobseeker.jobseeker.city}</span>
              </div>

              <p className={style.description}>{jobseeker.jobseeker.description}</p>

              <button className={style.buttonHire} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
                Hire
              </button>

              <h3 className="mt-4">Skill</h3>
              <div className={style.wrapperSkills}>
                {jobseeker.skill?.map((item) => {
                  return <span className={style.skills}>{item.skill_name}</span>;
                })}
              </div>

              <ul className={style.listSocials}>
                <li className={style.listSocial}>
                  <i className={`bi bi-envelope ${style.icon}`} />
                  <span className={style.titleIcon}>{jobseeker.jobseeker.email}</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-instagram ${style.icon}`} />
                  <span className={style.titleIcon}>{jobseeker.jobseeker.instagram}</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-github ${style.icon}`} />
                  <span className={style.titleIcon}>{jobseeker.jobseeker.github}</span>
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
                      {jobseeker.portfolio?.length < 1 ? (
                        <h3>Data not Found!</h3>
                      ) : (
                        jobseeker.portfolio?.map((expe) => {
                          return <CardPorto img={porto1} titleName={expe.application_name} />;
                        })
                      )}
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <div className="container">
                    <div className="row my-5">
                      {jobseeker.experience?.length < 1 ? (
                        <h3>Data not Found!</h3>
                      ) : (
                        jobseeker.experience?.map((expe) => {
                          return <CardExperience img={experience} titleName={expe.position} company={expe.company_name} desc={expe.description} />;
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
};

export default SSR;
