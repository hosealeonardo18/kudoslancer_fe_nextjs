import Link from 'next/link';
import style from './navbar.module.css';
export default function Navbar() {
  return (
    <nav className={`navbar navbar-expand-lg ${style.navbar} sticky-top`}>
      <div className="container">
        <Link className="navbar-brand fw-bold" href="#">
          KudosLancer
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav m-auto">
            <li className="nav-item mx-3">
              <Link className={`nav-link active ${style.navLink}`} href="#">
                Home
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${style.navLink}`} href="#">
                Jobs
              </Link>
            </li>
            <li className="nav-item mx-3">
              <Link className={`nav-link ${style.navLink}`} href="#">
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
