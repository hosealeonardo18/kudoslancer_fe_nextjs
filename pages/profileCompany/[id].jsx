import style from './profile.module.css';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import img from '../../public/images/testi/Ellipse 325.png';
import { useRouter } from 'next/router';
import Footer from '@/components/Footer';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function ProfileCompany() {
  const router = useRouter();
  const id = router.query.id;

  const [recruiter, setRecruiter] = useState([]);

  useEffect(() => {
    axios
      .get(`${process.env.API_KUDOSLANCER}/recruiter/${id}`)
      .then((response) => {
        setRecruiter(response.data.data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
      <Navbar />
      <div className="container m-auto">
        <div className="row py-5">
          <div className={`col-md-12 text-center  position-relative ${style.col}`}>
            <div className={style.accsent}>
              <Image src={''} width={150} height={150} alt="img" className={style.imageThumbnail} />
              <button className={style.buttonEditThumbnail}></button>
            </div>
            <Image src={recruiter?.image} width={150} height={150} alt="img" className={style.image} />
            <div className={`col-md-12 ${style.colMd}`}>
              <h5 className={style.company_name}>{recruiter?.company_name}</h5>
              <span className={style.titleName}>{recruiter?.fullname}</span>
              <p className={style.titlePosition}>{recruiter?.company_field}</p>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>{recruiter?.city}</span>
              </div>
              <p className={style.description}> {recruiter?.description}</p>

              <Link className={style.editProfile} href={`/editProfile/${id}`}>
                Edit Profile
              </Link>

              <div className={`col-md-6 offset-md-1 px-5 ${style.wrapper}`}>
                <div className={`${style.wrapperIcon}`}>
                  <i className={`bi bi-envelope ${style.icon}`} />
                  <span className={style.titleIcon}>{recruiter?.email}</span>
                </div>

                <div className={style.wrapperIcon}>
                  <i className={`bi bi-instagram ${style.icon}`} />
                  <span className={style.titleIcon}>{recruiter?.instagram}</span>
                </div>

                <div className={style.wrapperIcon}>
                  <i className={`bi bi-telephone ${style.icon}`} />
                  <span className={style.titleIcon}>{recruiter?.no_telp}</span>
                </div>

                <div className={style.wrapperIcon}>
                  <i className={`bi bi-linkedin ${style.icon}`} />
                  <span className={style.titleIcon}>{recruiter?.linkedin}</span>
                </div>
              </div>

              {/* <ul className={style.listSocials}>
                <li className={style.listSocial}>
                  
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-instagram ${style.icon}`} />
                  <span className={style.titleIcon}>instagram</span>
                </li>

                <li className={style.listSocial}>
                  <i className={`bi bi-github ${style.icon}`} />
                  <span className={style.titleIcon}>github</span>
                </li>
              </ul> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
