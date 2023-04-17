import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import style from './hire.module.css';

import img from '../../public/images/testi/Ellipse 325.png';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function hire() {
  const router = useRouter();
  const id = router.query.id;
  const [jobseekersId, setJobseekersId] = useState([]);
  const [skills, setSkills] = useState([]);
  // get data jobseeker by id
  useEffect(() => {
    axios
      .get(`${process.env.API_KUDOSLANCER}/jobseeker/${id}`)
      .then((response) => {
        setJobseekersId(response?.data?.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  // get skill by id
  useEffect(() => {
    axios
      .get(`${process.env.API_KUDOSLANCER}/skill/detail/jobseekerId/${id}`)
      .then((response) => {
        setSkills(response?.data?.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={style.bgBody}>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-12 mb-5">
            <div className={style.wrapperCard}>
              <Image src={jobseekersId?.image} width={150} height={150} alt="img" className={style.imageCard} />
              <h5 className={style.titleName}>{jobseekersId?.fullname}</h5>
              <span className={style.job}>{jobseekersId?.position}</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>{jobseekersId?.city}</span>
              </div>

              <p className={style.description}>{jobseekersId?.description}</p>

              <h3 className="mt-4">Skill</h3>
              <div className={style.wrapperSkills}>
                {skills?.map((skill) => {
                  return <span className={style.skills}>{skill?.skill_name}</span>;
                })}
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className={style.wrapperCard}>
              <h2 className={style.titleHeader}>Hubungi {jobseekersId?.fullname}</h2>
              <span className={style.subTitle}>Berikan Penawaran terbaik.</span>

              <div className="row mt-5 d-flex justify-content-center">
                <select className={`form-select ${style.formControl}`} aria-label="Default select example">
                  <option selected>Project</option>
                  <option value={1}>Project1</option>
                  <option value={2}>Project2</option>
                  <option value={3}>Project3</option>
                </select>
                <Form children="Nama Lengkap" placeholder="Masukan Nama Lengkap" type="text" name="fullname" value="" />

                <Form children="Email" placeholder="Masukan Email" type="email" name="email" value="" />

                <Form children="No. Handphone" placeholder="Masukan No. Handphone" type="text" name="no_telp" value="" />

                <div className="form-floating p-2">
                  <textarea className="form-control p-3" placeholder="Leave a comment here" id="floatingTextarea2" style={{ height: '100px' }} defaultValue={''} />
                  <label htmlFor="floatingTextarea2" className="ms-2">
                    Deskripsi
                  </label>
                </div>
              </div>

              <button className={`mt-4 ${style.buttonHire}`} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
                Hire
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
