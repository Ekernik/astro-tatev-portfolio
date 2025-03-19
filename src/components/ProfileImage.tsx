import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import profile_1 from '../assets/profile_1.jpg';
import profile_1_sm from '../assets/profile_1_sm.jpg';
import profile_2 from '../assets/profile_2.jpg';
import profile_3 from '../assets/profile_3.png';
import profile_4 from '../assets/profile_4.jpg';
import profile_5 from '../assets/profile_5.jpg';
import profile_6 from '../assets/profile_6.jpg';
import profile_7 from '../assets/profile_7.jpg';
import profile_8 from '../assets/profile_8.jpg';

const images = [
  {
    id: 1,
    smallSrc: profile_1_sm.src,
    bigSrc: profile_1.src,
    alt: 'A close-up portrait of Tatev, a violinist with long, flowing brown hair and expressive dark eyes. She smiles warmly while looking directly at the camera, holding her violin gracefully in her hands. The background features a soft, blurred backdrop of lush green foliage from trees, creating a serene and natural atmosphere.',
  },
  { id: 2, smallSrc: profile_5.src, bigSrc: profile_5.src, alt: '' },
  { id: 3, smallSrc: profile_2.src, bigSrc: profile_2.src, alt: '' },
  { id: 4, smallSrc: profile_8.src, bigSrc: profile_8.src, alt: '' },
  { id: 5, smallSrc: profile_3.src, bigSrc: profile_3.src, alt: '' },
  { id: 6, smallSrc: profile_6.src, bigSrc: profile_6.src, alt: '' },
  { id: 7, smallSrc: profile_4.src, bigSrc: profile_4.src, alt: '' },
  { id: 8, smallSrc: profile_7.src, bigSrc: profile_7.src, alt: '' },
];

export default function ProfileImage() {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div
      className='overflow-hidden max-w-sm'
      ref={emblaRef}
    >
      <div className='flex gap-2'>
        {images.map((image) => (
          <ImageCard
            image={image}
            key={image.id}
          />
        ))}
      </div>
    </div>
  );
}

function ImageCard({
  image,
}: {
  image: {
    bigSrc: string;
    smallSrc: string;
    alt: string;
  };
}) {
  return (
    <div className='min-w-0 w-full flex-grow-0 flex-shrink-0 basis-full aspect-[5/6] md:aspect-[9/13]'>
      <img
        src={image.smallSrc}
        className='w-full h-full rounded-lg shadow-md md:hidden object-cover'
        alt={image.alt}
      />
      <img
        src={image.bigSrc}
        className='hidden md:block w-full h-full rounded-lg shadow-md object-cover'
        alt={image.alt}
      />
    </div>
  );
}
