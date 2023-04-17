import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useRouter } from 'next/router';
import style from './edit.module.css';
import iconCloud from '../../public/images/icon/cloud.png';
import iconExpand from '../../public/images/icon/expand 2.png';
import iconExt from '../../public/images/icon/photo (1) 2.png';
import Footer from '@/components/Footer';
import Form from '@/components/Form';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

export default function EditProfile() {
  const router = useRouter();
  const { id } = router?.query;
  const [role, setRole] = useState('');
  const [token, setToken] = useState('');
  const [idUser, setIdUser] = useState('');
  const [jobseeker, setJobseeker] = useState([]);

  const [recruiter, setRecruiter] = useState([]);

  const [experiences, setExperiences] = useState({
    position: '',
    company_name: '',
    date_before: '',
    date_after: '',
    description: '',
    image: '',
  });

  const [skill, setSkill] = useState({
    skill_name: '',
    jobseekerId: id,
  });

  const [portofolio, setPortfolio] = useState({
    application_name: '',
    link_repository: '',
    image: '',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setJobseeker({
      ...jobseeker,
      [e.target.name]: e.target.value,
    });
  };

  const handleUpload = (e) => {
    setJobseeker((prev) => {
      return { ...prev, image: e.target.files[0] };
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

  const handleUploadExp = (e) => {
    setExperiences((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleChangePort = (e) => {
    setPortfolio({
      ...portofolio,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadPort = (e) => {
    setPortfolio((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleEdit = (e) => {
    e.preventDefault();

    const formData = new FormData();

    for (let attr in jobseeker) {
      formData.append(attr, jobseeker[attr]);
    }

    axios
      .put(`${process.env.API_KUDOSLANCER}/jobseeker/${id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        Swal.fire({
          title: `${response.data.message}`,
          text: `Updated`,
          icon: 'success',
        });
        // window.location.reload();
      })
      .catch((err) => alert(`${err.response.data}`));
  };

  const handleSubmitSkill = (e) => {
    e.preventDefault();
    axios
      .post(`${process.env.API_KUDOSLANCER}/skill/jobseekerId`, skill, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.message);
        Swal.fire({
          title: `${response.data.message}`,
          text: `Skill Created`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  const handleSubmitExp = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let attr in experiences) {
      formData.append(attr, experiences[attr]);
    }
    axios
      .post(`${process.env.API_KUDOSLANCER}/experience`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `New Experience have been added`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  const handleSubmitPort = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let attr in portofolio) {
      formData.append(attr, portofolio[attr]);
    }
    axios
      .post(`${process.env.API_KUDOSLANCER}/portfolio`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response);
        Swal.fire({
          title: `${response.data.message}`,
          text: `New Portfolio have been added`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err.response}`));
  };

  // recruiter
  const handleChangeRecruiter = (e) => {
    e.preventDefault();
    setRecruiter({
      ...recruiter,
      [e.target.name]: e.target.value,
    });
  };

  const handleUploadRecruiter = (e) => {
    setRecruiter((prev) => {
      return { ...prev, image: e.target.files[0] };
    });
  };

  const handleSubmitRecruiter = (e) => {
    e.preventDefault();
    const formData = new FormData();

    for (let attr in recruiter) {
      formData.append(attr, recruiter[attr]);
    }

    axios
      .put(`${process.env.API_KUDOSLANCER}/recruiter/${idUser}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data.data);
        Swal.fire({
          title: `${response.data.message}`,
          text: `Recruiter Updated`,
          icon: 'success',
        });
        window.location.reload();
      })
      .catch((err) => alert(`${err}`));
  };

  // get data
  useEffect(() => {
    setRole(localStorage.getItem('role'));
    setToken(localStorage.getItem('token'));
    setIdUser(localStorage.getItem('id'));

    axios
      .get(`${process.env.API_KUDOSLANCER}/jobseeker/${id}`)
      .then((response) => {
        setJobseeker(response?.data.data);
      })
      .catch((err) => console.log(err));

    // get data recruiter
    axios
      .get(`${process.env.API_KUDOSLANCER}/recruiter/${id}`)
      .then((response) => {
        setRecruiter(response.data.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  if (role === 'jobseeker') {
    return (
      <div className={style.bgBody}>
        <Navbar />
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4 col-sm-12 mb-5" data-aos="fade-right" data-aos-duration="1000">
              <div className={style.wrapperCard}>
                <Image src={jobseeker?.image} width={150} height={150} alt="img" crossOrigin="true" className={style.imageCard} />
                <h5 className={style.titleName}>{jobseeker?.fullname}</h5>
                <span className={style.job}>{jobseeker?.position}</span>
                <div className={style.wrapperLocation}>
                  <i className="bi bi-pin-map-fill me-2" />
                  <span className={style.location}>{jobseeker?.city}</span>
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
                  <Form children="Nama Lengkap" placeholder="Masukan Nama Lengkap" type="text" name="fullname" value={jobseeker?.fullname} change={handleChange} />

                  <Form children="Jobdesk " placeholder="Masukan Nama Jobdesk" type="text" name="position" value={jobseeker?.position} change={handleChange} />

                  <Form children="Domisili" placeholder="Masukan Domisili" type="text" name="city" value={jobseeker?.city} change={handleChange} />

                  <Form children="Tempat Kerja" placeholder="Masukan Tempat Kerja" type="text" name="company_name" value={jobseeker?.company_name} change={handleChange} />

                  <Form children="Instagram" placeholder="Masukan akun Instagram Anda" type="text" name="instagram" value={jobseeker?.instagram} change={handleChange} />

                  <Form children="Github" placeholder="Masukan link github Anda" type="text" name="github" value={jobseeker?.github} change={handleChange} />

                  <div className="form-floating p-0">
                    <textarea className="form-control p-3" placeholder="Deskripsikan pekerjaan anda" id="floatingTextarea2" style={{ height: '100px' }} name="description" onChange={handleChange} />
                    <label htmlFor="floatingTextarea2" className="ms-2">
                      Tuliskan deskripsi singkat
                    </label>
                  </div>

                  <div className="mb-3 mt-3">
                    <label for="formFile" className="form-label">
                      Image
                    </label>
                    <input className="form-control" type="file" id="formFile" name="image" onChange={handleUpload} />
                  </div>
                </form>
              </div>

              {/* skills */}
              <div className={style.wrapperCard}>
                <h3 className={style.textHeader}>Keahlian</h3>
                <hr />

                <form onSubmit={handleSubmitSkill}>
                  <div className={style.wrapperButton}>
                    <input type="" placeholder="Java" name="skill_name" onChange={handleChangeSkill} value={skill?.skill_name} className={`${style.input} form-control mt-2`} />
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
                      <Form children="Mulai Bekerja" type="date" name="date_before" value={experiences.date_before} change={handleChangeExp} />
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

                  <div className="mb-3 mt-3">
                    <label for="formFile" className="form-label">
                      Image
                    </label>
                    <input className="form-control" type="file" id="formFile" name="image" onChange={handleUploadExp} />
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
                  <Form children="Nama Aplikasi" placeholder="Masukan nama aplikasi" type="text" name="application_name" value={portofolio?.application_name} change={handleChangePort} />

                  <Form children="Link Repository" placeholder="Masukan Link Repository" type="text" name="link_repository" value={portofolio?.link_repository} change={handleChangePort} />

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
                    <Image src={iconCloud} alt="image" className="mb-3" />
                    <div className="my-4 text-center">
                      <input type="file" id="formFile" name="image" onChange={handleUploadPort} />
                    </div>

                    <span className={style.rules}>Drag & Drop untuk Upload Gambar Aplikasi Mobile</span>
                    <span className={style.subRules}>DAtau cari untuk mengupload file dari direktorimu.</span>

                    <div className={style.wrapperCardRulesImg}>
                      <div className={style.wrapperImg}>
                        <Image src={iconExt} alt="img" className="me-2" />
                        <span>High-Res Image PNG, JPG or GIF </span>
                      </div>

                      <div className={style.wrapperImg}>
                        <Image src={iconExpand} alt="img" className="me-2" />
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
  } else {
    return (
      <div className={style.bgBody}>
        <Navbar />
        <div className="container">
          <div className="row mt-5 mb-5">
            <div className="col-md-4 col-sm-12 mb-5" data-aos="fade-right" data-aos-duration="1000">
              <div className={style.wrapperCard}>
                <Image src={recruiter?.image} width={150} height={150} alt="img" className={style.imageCard} />
                <h5 className={style.titleName}>{recruiter?.company_name}</h5>
                <h5 className={style.titleNameRecruiter}>{recruiter?.fullname}</h5>
                <span className={style.job}>{recruiter?.company_field}</span>
                <div className={style.wrapperLocation}>
                  <i className="bi bi-pin-map-fill me-2" />
                  <span className={style.location}>{recruiter?.city}</span>
                </div>
                <p className={`text-justify ${style.job}`}>{recruiter?.description}</p>
              </div>
              <button className={style.buttonHire} type="button" onClick={handleSubmitRecruiter}>
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
                <form onSubmit={handleSubmitRecruiter}>
                  <Form children="Nama Lengkap" placeholder="Masukan Nama Lengkap" type="text" name="fullname" value={recruiter?.fullname} change={handleChangeRecruiter} />

                  <Form children="Jobdesk " placeholder="Masukan Nama Jobdesk" type="text" name="company_field" value={recruiter?.company_field} change={handleChangeRecruiter} />

                  <Form children="Nama Perusahaan" placeholder="Masukan Nama Perusahaan" type="text" name="company_name" value={recruiter?.company_name} change={handleChangeRecruiter} />

                  <Form children="Domisili" placeholder="Masukan Domisili" type="text" name="city" value={recruiter?.city} change={handleChangeRecruiter} />

                  <Form children="Nomor Telpon" placeholder="Masukan nomor Telpon" type="text" name="no_telp" value={recruiter?.no_telp} change={handleChangeRecruiter} />

                  <Form children="Instagram" placeholder="Masukan akun Instagram" type="text" name="instagram" value={recruiter?.instagram} change={handleChangeRecruiter} />

                  <Form children="Linkedin" placeholder="Masukan akun Linkedin" type="text" name="linkedin" value={recruiter?.linkedin} change={handleChangeRecruiter} />

                  <div className="form-floating p-0">
                    <textarea className="form-control p-3" placeholder="Deskripsikan pekerjaan anda" id="floatingTextarea2" style={{ height: '100px' }} name="description" value={recruiter?.description} onChange={handleChangeRecruiter} />
                    <label htmlFor="floatingTextarea2" className="ms-2">
                      Deskripsi perusahaan
                    </label>
                  </div>

                  <div className="mb-3 mt-3">
                    <label for="formFile" className="form-label">
                      Image
                    </label>
                    <input className="form-control" type="file" id="formFile" name="image" onChange={handleUploadRecruiter} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
