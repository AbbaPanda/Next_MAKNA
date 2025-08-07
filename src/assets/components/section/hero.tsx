import { Hero_Content } from '../constant/hero';
import texture from '../../images/texture.png';

const HeroSection = () => {
  const { title1, title2, description, buttontext, buttonlink } = Hero_Content;

  return (
    <section
      id='hero'
      className='relative bg-gray-800 min-h-[750px] md:min-h-[850px] '
      style={{ backgroundImage: `url(${texture})` }}
    >
      <div className='relative z-20 flex flex-col items-center justify-center px-4 py-16'>
        <h1 className='text-3xl md:text-4xl font-bold text-center flex flex-col mt-10 text-amber-100 shadowdrop-md'>
          {title1}
          <span className='text-5xl md:text-6xl text-amber-500'>{title2}</span>
        </h1>
        <p className='text-sm text-amber-100 text-center mt-4 bg-blur shadow-sm font-semibold'>
          {description}
        </p>
        <a href={buttonlink}>
          <button className='bg-amber-600 mt-4 px-5 py-3 shadow-md rounded-full font-semibold text-amber-100 text-sm hover:bg-amber-300 hover:text-black hover:border-black transition-colors duration-200'>
            {buttontext}
          </button>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
