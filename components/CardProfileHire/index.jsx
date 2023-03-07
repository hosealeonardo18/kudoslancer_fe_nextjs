import Image from 'next/image';
import style from './profileHire.module.css';

import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function CardProfileHire({ img, titleName, job, location, id }) {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const [skills, setSkills] = useState([]);

  // get skill by id
  useEffect(() => {
    axios
      .get(`http://localhost:4000/skill/detail/jobseekerId/${id}`)
      .then((response) => {
        setSkills(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container mb-1">
      <div className="row">
        <div className="col-md-12" data-aos="fade-right" data-aos-duration="1000">
          <div className={style.wrapperCard}>
            <Image src={img} alt="img" className={style.imageCard} />
            <div className={style.wrapperProfile}>
              <h5 className={style.titleName}>{titleName}</h5>
              <span className={style.job}>{job}</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>{location}</span>
              </div>

              <div className={style.wrapperSkills}>
                {skills?.map((item) => (
                  <span className={style.skills}>{item?.skill_name}</span>
                ))}
              </div>
            </div>

            <Link className={style.buttonProfile} href={`/jobseeker/${id}`}>
              Lihat Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
