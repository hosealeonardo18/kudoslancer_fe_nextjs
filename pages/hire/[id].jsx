import Navbar from '@/components/Navbar';
import { useRouter } from 'next/router';
import style from './hire.module.css';

import img from '../../public/images/testi/Ellipse 325.png';
import Image from 'next/image';
import Footer from '@/components/Footer';
import Form from '@/components/Form';

export default function hire() {
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

              <h3 className="mt-4">Skill</h3>
              <div className={style.wrapperSkills}>
                <span className={style.skills}>PHP</span>
                <span className={style.skills}>Javascript</span>
                <span className={style.skills}>React JS</span>
                <span className={style.skills}>Express JS</span>
              </div>
            </div>
          </div>
          <div className="col-md-8 col-sm-12">
            <div className={style.wrapperCard}>
              <h2 className={style.titleHeader}>Hubungi Lous Tomlinson</h2>
              <span className={style.subTitle}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</span>

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
