import Autoplay from 'embla-carousel-autoplay';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect } from 'react';
import profile_1 from '../assets/profile_1.jpg';
import profile_1_sm from '../assets/profile_1_sm.jpg';
import profile_2 from '../assets/profile_2.jpg';
import profile_3 from '../assets/profile_3.png';
import profile_4 from '../assets/profile_4.jpg';

const images = [
  {
    id: 1,
    smallSrc: profile_1_sm.src,
    bigSrc: profile_1.src,
    alt: 'A close-up portrait of Tatev, a violinist with long, flowing brown hair and expressive dark eyes. She smiles warmly while looking directly at the camera, holding her violin gracefully in her hands. The background features a soft, blurred backdrop of lush green foliage from trees, creating a serene and natural atmosphere.',
  },
  { id: 2, smallSrc: profile_2.src, bigSrc: profile_2.src, alt: '' },
  { id: 3, smallSrc: profile_3.src, bigSrc: profile_3.src, alt: '' },
  { id: 4, smallSrc: profile_4.src, bigSrc: profile_4.src, alt: '' },
];

export default function ProfileImage() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes()); // Access API
    }
  }, [emblaApi]);

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
    <div className='min-w-0 flex-grow-0 flex-shrink-0 basis-full'>
      <img
        src={image.smallSrc}
        className='w-full rounded-lg shadow-md md:hidden aspect-[5/6] md:aspect-[9/13] object-cover'
        alt={image.alt}
      />
      <img
        src={image.bigSrc}
        className='hidden md:block rounded-lg shadow-md aspect-[5/6] md:aspect-[9/13] object-cover'
        alt={image.alt}
      />
    </div>
  );
}
