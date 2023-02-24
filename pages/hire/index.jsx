import CardProfileHire from '@/components/CardProfileHire';
import Header from '@/components/Header';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import style from './hire.module.css';

export default function hire() {
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
            <CardProfileHire />
          </div>
        </div>
      </div>
    </>
  );
}
