import Image from 'next/image';
import style from './profileHire.module.css';
import img from '../../public/images/testi/Ellipse 325.png';
import Link from 'next/link';

export default function CardProfileHire() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className={style.wrapperCard}>
            <Image src={img} alt="img" className={style.imageCard} />
            <div className={style.wrapperProfile}>
              <h5 className={style.titleName}>Louis Tomlinson</h5>
              <span className={style.job}>Web Developer</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>Jakarta, Indonesia</span>
              </div>

              <div className={style.wrapperSkills}>
                <span className={style.skills}>PHP</span>
                <span className={style.skills}>Javascript</span>
                <span className={style.skills}>React JS</span>
                <span className={style.skills}>Express JS</span>
              </div>
            </div>

            <Link className={style.buttonProfile} href="">
              Lihat Profile
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
