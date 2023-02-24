import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './edit.module.css';
import img from '../../public/images/testi/Ellipse 325.png';
import Footer from '@/components/Footer';
import Form from '@/components/Form';

export default function EditProfile() {
  const router = useRouter();
  return (
    <div className={style.bgBody}>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-12 mb-5" data-aos="fade-right" data-aos-duration="1000">
            <div className={style.wrapperCard}>
              <Image src={img} alt="img" className={style.imageCard} />
              <h5 className={style.titleName}>Louis Tomlinson</h5>
              <span className={style.job}>Web developer</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>Jakarta, Indonesia</span>
              </div>
            </div>
            <button className={style.buttonHire} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
              Simpan
            </button>

            <button className={style.buttonCancel} onClick={() => window.location.replace(`/hire/${router.query.id}`)}>
              Batal
            </button>
          </div>
          <div className="col-md-8 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
            <div className={style.wrapperCard}>
              <h3 className={style.textHeader}>Data diri</h3>
              <hr />

              <Form children="Nama Lengkap" placeholder="Masukan Nama Lengkap" type="text" name="fullname" value="" />

              <Form children="Jobdesk " placeholder="Masukan Nama Jobdesk" type="text" name="position" value="" />

              <Form children="Domisili" placeholder="Masukan Domisili" type="text" name="city" value="" />

              <Form children="Tempat Kerja" placeholder="Masukan Tempat Kerja" type="text" name="company" value="" />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
