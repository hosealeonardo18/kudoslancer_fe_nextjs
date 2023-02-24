import Image from 'next/image';
import style from './experience.module.css';

export default function CardExperience({ img, titleName }) {
  return (
    <>
      <div className="col-md-12 col-sm-12 d-flex mb-4">
        <Image src={img} alt="img" className={style.imgExp} />
        <div className={style.wrapperCard}>
          <h5 className={style.titleName}>{titleName}</h5>
          <span className={style.company}>Tokopedia</span>
          <div className={style.wrapperDate}>
            <span className={style.date}>July 2019 - Januari 2020</span>
            <span className={style.totalMonth}>6 month</span>
          </div>

          <p className={style.description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quos dignissimos recusandae nihil molestias, suscipit ut eligendi! Illum veniam numquam architecto pariatur odio rem aliquid saepe laborum cumque quisquam asperiores,
            maiores velit, earum blanditiis modi quos nisi quam nulla sapiente?
          </p>
        </div>
      </div>
    </>
  );
}
