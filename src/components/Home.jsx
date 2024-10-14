import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Home = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const textTitle = useRef(null);
  const point = useRef(null);

  useEffect(() => {
    // Animate the left half of the text from the left
    gsap.from(leftImgRef.current, {
      x: '-300%', // Move from the left side
      opacity: 0,
      duration: 7.5,
      ease: 'power3.out',
    });

    // Animate the right half of the text from the right
    gsap.from(rightImgRef.current, {
      x: '300%', // Move from the right side
      opacity: 0,
      duration: 7.5,
      ease: 'power3.out',
    });

    gsap.from(textTitle.current, {
      y: '50%', // Move from the right side
      opacity: 0,
      duration: 3.5,
      delay: 1.5,
      ease: 'power2.out',
    });

    gsap.to(point.current, {
      y: '100%',           // Move down by 50%
      opacity: 0,         // Optional: if you want opacity to fade out
      duration: 1.5,      // Duration of each down/up cycle
      ease: 'power0.out', // Ease function for smooth motion
      repeat: -1,         // Repeat infinitely
      repeatDelay: 0.5,   // Optional: Delay between each cycle (you can change or remove this)
    });
    
  }, []);

  return (
    <div className="h-screen bg-dark flex justify-center items-center flex-col">
      <div className="flex justify-center items-center flex-col">

      <img src="public/logo.png" className="text-5xl" alt="Logo" />
      <h2 ref={textTitle} className="text-light p-10 tracking-widest text-4xl" style={{ letterSpacing: '0.4em' }}>B R O T H E R S Я E T R E A T</h2> 
      </div>
      <div>
        <img src='public/mouse.png' className="w-16" alt="Mouse" />
        <img ref={point} src="public/arrow.png" className="w-16" alt="Arrow" />
      </div>
    </div>
  );
};

export default Home;
