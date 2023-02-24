import CardProfileHire from '@/components/CardProfileHire';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';

import Link from 'next/link';
import style from './jobseeker.module.css';
import img from '../../public/images/testi/Ellipse 325.png';
import img2 from '../../public/images/testi/Ellipse 323.png';
import Footer from '@/components/Footer';

export default function jobseeker() {
  return (
    <>
      <Navbar />
      <Header />
      <div className={`container-fluid ${style.containerFluid}`}>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className={style.wrapperSearchBar}>
                <input className={style.inputGrup} type="text" placeholder="Search for any skills" />
                <button className={style.iconSearch}>
                  <i className={`bi bi-search ${style.icoSearch}`}></i>
                </button>
                <div className={style.wrapperButton}>
                  <button className={style.buttonCategory} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className={`bi bi-filter-right ${style.iconFilter}`}></i>
                  </button>
                  <ul className={`dropdown-menu ${style.dropDownMenu}`}>
                    <li className={style.listItem}>
                      <Link className={`dropdown-item ${style.dropItem}`} href="#">
                        Sortir berdasarkan nama
                      </Link>
                    </li>

                    <li className={style.listItem}>
                      <Link className={`dropdown-item ${style.dropItem}`} href="#">
                        Sortir berdasarkan Skill
                      </Link>
                    </li>

                    <li className={style.listItem}>
                      <Link className={`dropdown-item ${style.dropItem}`} href="#">
                        Sortir berdasarkan Lokasi
                      </Link>
                    </li>

                    <li className={style.listItem}>
                      <Link className={`dropdown-item ${style.dropItem}`} href="#">
                        Sortir berdasarkan freelance
                      </Link>
                    </li>

                    <li className={style.listItem}>
                      <Link className={`dropdown-item ${style.dropItem}`} href="#">
                        Sortir berdasarkan fulltime
                      </Link>
                    </li>
                  </ul>
                  <button className={style.buttonSearch}>Search</button>
                </div>
              </div>
            </div>
          </div>

          <div className="row mt-4">
            <CardProfileHire img={img} titleName="Louis Tomlinson" job="Frontend Developer" location="Jakarta, Indonesia" id="1" />

            <CardProfileHire img={img2} titleName="Harry Styles" job="Backend Developer" location="Bandung, Indonesia" id="2" />
          </div>
        </div>

        <div className="container">
          <div className="row mt-5">
            <div className="col-md-12 d-flex justify-content-center ">
              <nav aria-label="Page navigation example">
                <ul className="pagination gap-2">
                  <li className={`page-item`}>
                    <Link className={`page-link ${style.pageItem}`} href="#">
                      <i className={`bi bi-caret-left ${style.icon}`} />
                    </Link>
                  </li>
                  <li className={`page-item`}>
                    <Link className={`page-link ${style.pageItem}`} href="#">
                      1
                    </Link>
                  </li>
                  <li className={`page-item`}>
                    <Link className={`page-link ${style.pageItem}`} href="#">
                      2
                    </Link>
                  </li>
                  <li className={`page-item`}>
                    <Link className={`page-link ${style.pageItem}`} href="#">
                      3
                    </Link>
                  </li>
                  <li className={`page-item`}>
                    <Link className={`page-link ${style.pageItem}`} href="#">
                      <i className={`bi bi-caret-right ${style.icon}`} />
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
