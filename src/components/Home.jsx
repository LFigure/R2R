import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import '../App.css';

const Home = () => {
  const leftImgRef = useRef(null);
  const rightImgRef = useRef(null);
  const textTitle = useRef(null);
  const point = useRef(null);

  useEffect(() => {
    gsap.fromTo(leftImgRef.current, 
      { x: '-100vw', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 5.5, ease: 'power3.out' } 
    );

    gsap.fromTo(rightImgRef.current, 
      { x: '100vw', opacity: 0 }, 
      { x: '0%', opacity: 1, duration: 5.5, ease: 'power3.out' } 
    );

    gsap.fromTo(textTitle.current, 
      { y: 80, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 3.5, delay: 3.5, ease: 'power3.out' } 
    );

    gsap.fromTo(point.current, 
      { y: 0, opacity: 0 }, // Starting state
      { 
        y: 60,           // Move down by 60px
        opacity: 1,      // Fade out
        duration: 1.0,   // Duration of each down/up cycle
        ease: 'sine.out', // Smooth motion
        repeat: -1,      // Repeat infinitely
        delay: 4.5,      // Start after a 4.5 second delay
      }
    );
    
  }, []);

  return (
    <div className="overflow-hidden ">

      {/* This is the first section */}
      <div className='flex bg-dark h-screen justify-center items-center flex-col'>
        <div className="flex justify-center items-center flex-col">
          <div className='flex'>
            <img ref={leftImgRef} src="public/leftLogo.png" className="text-5xl" alt="Logo" />
            <img ref={rightImgRef} src="public/rightLogo.png" className="text-5xl" alt="Logo" />
          </div>
          <h2 ref={textTitle} className="text-light p-10 tracking-widest text-4xl" style={{ letterSpacing: '0.4em' }}>B R O T H E R S Я E T R E A T</h2> 
        </div>


        <div className='absolute bottom-[10vh] flex items-center justify-center flex-col'>
          <img src='public/mouse.png' className="w-16" alt="Mouse" />
          <img ref={point} src="public/arrow.png" className="w-12 m-2" alt="Arrow" />
        </div>
      </div>

      {/* This is the second section */}
      <div className='bg-light h-[65vh] flex justify-center items-center'>
        <div className='flex justify-around items-center w-full px-10'>
          <img src="public/people/sandLogo.jpg" className="w-[25vw] mx-2 rounded-lg shadow-lg" alt="Sand" />
          
          <div className='bg-dark flex flex-col items-center rounded-lg shadow-md p-8 w-[40%]'>
            <h2 className="text-3xl text-white mb-4">Our Mission</h2>
            <p className="text-center text-gray-300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            </p>
          </div>

        </div>
      </div>



      {/* This is the third section */}
      <div className='bg-white h-[85vh] flex'>
      <ul className='flex justify-evenly gap-10 p-5 -mx-5 bg-dark h-[15vh] w-[100vw]'>
        <li className='bg-light p-2 w-[10vw] rounded'>Img 1</li>
        <li className='bg-light p-2 w-[10vw] rounded'>Img 2</li>
        <li className='bg-light p-2 w-[10vw] rounded'>Img 3</li>
        <li className='bg-light p-2 w-[10vw] rounded'>Img 4</li>
      </ul>

      </div>

      {/* This is the fourth section */}
      <div className='bg-dark h-[65vh]'>

      </div>
      
    </div>
  );
};

export default Home;
