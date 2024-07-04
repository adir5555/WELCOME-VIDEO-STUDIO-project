import photo from '../../../assets/image/brand-01 - Copy.png';
import photoa from '../../../assets/image/brand-02 (1).png';
import photos from '../../../assets/image/brand-03 (1).png';
import photod from '../../../assets/image/brand-04 (1).png';
import photof from '../../../assets/image/brand-05.png';
import photog from '../../../assets/image/brand-06.png';
import photoh from '../../../assets/image/brand-07.png';
import photoj from '../../../assets/image/brand-08 - Copy.png';
import photok from '../../../assets/image/brand-09- Copy.png';
import './logo.css'
const LogoDi = () => {
  return (
    <div className='' >
      <div className='flex container justify-center gap-12 my-28'>
        <img className='box' src={photo} alt="" />

        <img className='box' src={photoa} alt="" />
        <img className='box' src={photos} alt="" />
        <img className='box' src={photod} alt="" />
        <img className='box' src={photof} alt="" /></div>
      <div className='flex container justify-center  gap-12 my-28'>
        <img className='box' src={photog} alt="" />
        <img className='box' src={photoh} alt="" />
        <img className='box' src={photoj} alt="" />
        <img className='box' src={photok} alt="" /></div>
    </div>
  );
};

export default LogoDi;