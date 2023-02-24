import Image from 'next/image';
import style from './porto.module.css';

export default function CardPorto({ img, titleName }) {
  return (
    <div className="col-md-4 text-center mb-4">
      <Image src={img} alt="img" className={style.imagePorto} />
      <span className={style.titlePorto}>{titleName}</span>
    </div>
  );
}
