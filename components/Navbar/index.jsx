import Image from 'next/image';
import Link from 'next/link';
import style from './navbar.module.css';
import img from '../../public/images/Profile/formal.png';

const isLogin = false;
export default function Navbar() {
  if (isLogin) {
    return (
      <nav className={`navbar navbar-expand-lg ${style.navbar} sticky-top`}>
        <div className="container">
          <Link className="navbar-brand fw-bold" href="/">
            KudosLancer
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${style.navbarCollapse}`} id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-3">
                <Link className={`nav-link active ${style.navLink}`} href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navLink}`} href={`/jobs`}>
                  Jobs
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navLink}`} href={`/jobseeker`}>
                  Hiring
                </Link>
              </li>
            </ul>

            <Link className={style.buttonNotif} href={`auth/login`}>
              <i className={`bi bi-megaphone-fill ${style.iconNotif}`} />
            </Link>

            <Link className={style.buttonNotif} href={`auth/login`}>
              <i class={`bi bi-chat-dots-fill ${style.iconMessage}`}></i>
            </Link>

            <Link className={style.buttonProfile} href="">
              <Image src={img} className={style.imageProfile} />
            </Link>
          </div>
        </div>
      </nav>
    );
  } else {
    return (
      <nav className={`navbar navbar-expand-lg ${style.navbar} sticky-top`}>
        <div className="container">
          <Link className="navbar-brand fw-bold" href="/">
            KudosLancer
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`collapse navbar-collapse ${style.navbarCollapse}`} id="navbarNav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item mx-3">
                <Link className={`nav-link active ${style.navLink}`} href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navLink}`} href={`/jobs`}>
                  Jobs
                </Link>
              </li>
              <li className="nav-item mx-3">
                <Link className={`nav-link ${style.navLink}`} href={`/jobseeker`}>
                  Hiring
                </Link>
              </li>
            </ul>

            <Link className={style.buttonLogin} href={`auth/login`}>
              Login
            </Link>

            <Link className={style.buttonSignup} href={`auth/register`}>
              Signup
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
