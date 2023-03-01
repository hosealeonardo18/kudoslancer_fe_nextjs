import Image from 'next/image';
import style from './experience.module.css';

export default function CardExperience(props) {
  return (
    <>
      <div className="col-md-12 col-sm-12 d-flex mb-4">
        <Image src={props.img} alt="img" className={style.imgExp} />
        <div className={style.wrapperCard}>
          <h5 className={style.titleName}>{props.titleName}</h5>
          <span className={style.company}>{props.company}</span>
          <div className={style.wrapperDate}>
            <span className={style.date}>July 2019 - Januari 2020</span>
            <span className={style.totalMonth}>6 month</span>
          </div>

          <p className={style.description}>{props.desc}</p>
        </div>
      </div>
    </>
  );
}
