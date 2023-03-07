import Image from 'next/image';
import Link from 'next/link';
import style from './navbar.module.css';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Navbar() {
  const [login, setLogin] = useState('');
  const [role, setRole] = useState('');
  const [profile, setProfile] = useState([]);
  const [image, setImage] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setLogin(localStorage.getItem('token'));
    setProfile(localStorage.getItem('id'));
    setRole(localStorage.getItem('role'));
    setImage(localStorage.getItem('image'));
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/');
  };

  if (login) {
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

            <div className="dropdown-center">
              <button className={style.buttonProfile} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                <Image src={image} width={35} height={35} alt="img" className={style.imageProfile} />
              </button>
              <ul className="dropdown-menu">
                <li>
                  {role !== 'recruiter' ? (
                    <Link className="dropdown-item" href={`/editProfile/${profile}`}>
                      profile
                    </Link>
                  ) : (
                    <Link className="dropdown-item" href={`/profileCompany/${profile}`}>
                      profile
                    </Link>
                  )}
                </li>
                <li>
                  <Link className="dropdown-item" href="" onClick={handleLogout}>
                    Logout
                  </Link>
                </li>
              </ul>
            </div>
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
