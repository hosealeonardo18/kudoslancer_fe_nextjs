import Image from 'next/image';
import style from './card.module.css';

export default function CardTesti({ titleName, job, comment, imgTesti }) {
  return (
    <div className={style.wrapperImageTesti}>
      <Image src={imgTesti} className={style.imageProfile} />
      <h5 className={style.titleName}>{titleName}</h5>
      <span className={style.job}>{job}</span>
      <p className={style.comment}>"{comment}"</p>
    </div>
  );
}
