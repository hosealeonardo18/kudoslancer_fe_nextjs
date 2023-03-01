import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './edit.module.css';
import img from '../../public/images/testi/Ellipse 325.png';
import iconCloud from '../../public/images/icon/cloud.png';
import iconExpand from '../../public/images/icon/expand 2.png';
import iconExt from '../../public/images/icon/photo (1) 2.png';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';

export default function EditProfile() {
  const router = useRouter();
  const { id } = router.query;

  const [jobseeker, setJobseeker] = useState([]);
  const [experiences, setExperiences] = useState({
    position: '',
    company_name: '',
    date_before: '',
    date_after: '',
    description: '',
    jobseekerId: id,
  });

  const [skill, setSkill] = useState({
    skill_name: '',
    jobseekerId: id,
  });

  const [portofolio, setPortfolio] = useState({
    application_name: '',
    link_repository: '',
    jobseekerId: id,
  });

  console.log(portofolio);

  const handleChange = (e) => {
    setJobseeker({
      ...jobseeker,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeSkill = (e) => {
    setSkill({
      ...skill,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeExp = (e) => {
    setExperiences({
      ...experiences,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangePort = (e) => {
    setPortfolio({
      ...portofolio,
      [e.target.name]: e.target.value,
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    axios
      .put(`http://localhost:3030/jobseekers/${id}`, jobseeker)
      .then((response) => {
        alert('Update Data Success');
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  const handleSubmitSkill = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3030/skills`, skill)
      .then((response) => {
        alert('Created Data Success');
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  const handleSubmitExp = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3030/experiences`, experiences)
      .then((response) => {
        alert('Created Experiences Success');
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  const handleSubmitPort = (e) => {
    e.preventDefault();
    axios
      .post(`http://localhost:3030/portfolios`, portofolio)
      .then((response) => {
        alert('Created Portfolio Success');
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  // get data
  useEffect(() => {
    axios
      .get(`http://localhost:3030/jobseekers/${id}`)
      .then((response) => {
        setJobseeker(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className={style.bgBody}>
      <Navbar />
      <div className="container">
        <div className="row mt-5 mb-5">
          <div className="col-md-4 col-sm-12 mb-5" data-aos="fade-right" data-aos-duration="1000">
            <div className={style.wrapperCard}>
              <Image src={img} alt="img" className={style.imageCard} />
              <h5 className={style.titleName}>{jobseeker.fullname}</h5>
              <span className={style.job}>{jobseeker.position}</span>
              <div className={style.wrapperLocation}>
                <i className="bi bi-pin-map-fill me-2" />
                <span className={style.location}>{jobseeker.city}</span>
              </div>
            </div>
            <button className={style.buttonHire} type="button" onClick={handleEdit}>
              Simpan
            </button>

            <button className={style.buttonCancel} onClick={() => window.location.replace(`/`)}>
              Batal
            </button>
          </div>

          <div className="col-md-8 col-sm-12" data-aos="fade-left" data-aos-duration="1000">
            {/* data diri */}
            <div className={style.wrapperCard}>
              <h3 className={style.textHeader}>Data diri</h3>
              <hr />
              <form onSubmit={handleEdit}>
                <Form children="Nama Lengkap" placeholder="Masukan Nama Lengkap" type="text" name="fullname" value={jobseeker.fullname} change={handleChange} />

                <Form children="Jobdesk " placeholder="Masukan Nama Jobdesk" type="text" name="position" value={jobseeker.position} change={handleChange} />

                <Form children="Domisili" placeholder="Masukan Domisili" type="text" name="city" value={jobseeker.city} change={handleChange} />

                <Form children="Tempat Kerja" placeholder="Masukan Tempat Kerja" type="text" name="company_name" value={jobseeker.company_name} change={handleChange} />
              </form>
            </div>

            {/* skills */}
            <div className={style.wrapperCard}>
              <h3 className={style.textHeader}>Keahlian</h3>
              <hr />

              <form onSubmit={handleSubmitSkill}>
                <div className={style.wrapperButton}>
                  <input type="" placeholder="Java" name="skill_name" onChange={handleChangeSkill} value={skill.skill_name} className={`${style.input} form-control mt-2`} />
                  {/* <Form placeholder="Java / PHP" type="text" name="fullname" value="" /> */}
                  <button className={style.buttonSimpan} type="submit">
                    Simpan
                  </button>
                </div>
              </form>
            </div>

            {/* Experiences */}
            <div className={style.wrapperCard}>
              <h3 className={style.textHeader}>Pengalaman Kerja</h3>
              <hr />
              <form onSubmit={handleSubmitExp}>
                <Form children="Posisi" placeholder="Web developer" type="text" name="position" change={handleChangeExp} />

                <Form children="Nama Perusahaan " placeholder="Masukan Nama Perusahaan" type="text" name="company_name" change={handleChangeExp} />

                <div className="row">
                  <div className="col-md-6">
                    <Form children="Mulai Bekerja" type="date" name="date_before" value={setExperiences.date_before} change={handleChangeExp} />
                  </div>

                  <div className="col-md-6">
                    <Form children="Selesai Bekerja" type="date" name="date_after" change={handleChangeExp} />
                  </div>
                </div>

                <div className="form-floating p-2">
                  <textarea className="form-control p-3" placeholder="Deskripsikan pekerjaan anda" id="floatingTextarea2" style={{ height: '100px' }} name="description" onChange={handleChangeExp} />
                  <label htmlFor="floatingTextarea2" className="ms-2">
                    Deskripsikan pekerjaan anda
                  </label>
                </div>

                <button className={`mt-4 ${style.buttonAdd}`} type="submit">
                  Tambah Pengalaman Kerja
                </button>
              </form>
            </div>

            {/* Portofolio */}
            <div className={style.wrapperCard}>
              <h3 className={style.textHeader}>Portofolio</h3>
              <hr />

              <form onSubmit={handleSubmitPort}>
                <Form children="Nama Aplikasi" placeholder="Masukan nama aplikasi" type="text" name="application_name" value={portofolio.application_name} change={handleChangePort} />

                <Form children="Link Repository" placeholder="Masukan Link Repository" type="text" name="link_repository" value={portofolio.link_repository} change={handleChangePort} />

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                      <label className="form-check-label" htmlFor="flexRadioDefault1">
                        Aplikasi Mobile
                      </label>
                    </div>
                  </div>

                  <div className="col-md-6">
                    <div className="form-check" style={{ height: '50px' }}>
                      <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" defaultChecked />
                      <label className="form-check-label" htmlFor="flexRadioDefault2">
                        Aplikasi Web
                      </label>
                    </div>
                  </div>
                </div>

                <div className={style.wrapperUpload}>
                  <Image src={iconCloud} alt="image" />
                  <div className="mb-3 mt-3">
                    <label htmlFor="formFile" className="form-label">
                      Default file input example
                    </label>
                    <input className="form-control" type="file" id="formFile" />
                  </div>

                  <span className={style.rules}>Drag & Drop untuk Upload Gambar Aplikasi Mobile</span>
                  <span className={style.subRules}>DAtau cari untuk mengupload file dari direktorimu.</span>

                  <div className={style.wrapperCardRulesImg}>
                    <div className={style.wrapperImg}>
                      <Image src={iconExt} alt="img" />
                      <span>High-Res Image PNG, JPG or GIF </span>
                    </div>

                    <div className={style.wrapperImg}>
                      <Image src={iconExpand} alt="img" />
                      <span>Size 1080x1920 or 600x800 </span>
                    </div>
                  </div>
                </div>

                <button className={`mt-4 ${style.buttonAdd}`} type="submit">
                  Tambah Portofolio
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
