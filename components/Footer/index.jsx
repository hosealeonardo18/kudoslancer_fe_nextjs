import Link from 'next/link';
import style from './footer.module.css';

export default function Footer() {
  return (
    <>
      <div className={`container-fluid ${style.containerFluid}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-12">
              <h3 className={style.headingFooter}>KudosLancer</h3>
              <p className={style.description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In euismod ipsum et dui rhoncus auctor.</p>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <hr className={style.hr} />
            <div className={style.wrapperFooter}>
              <p className={style.copyright}>2023 Kudoslancer. All Right Reserved</p>
              <Link className={style.buttonTelpon} href="">
                Telepon
              </Link>
              <Link className={style.buttonEmail} href="">
                Email
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
