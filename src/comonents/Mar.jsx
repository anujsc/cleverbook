import React from 'react';
import { motion } from 'framer-motion';

const logos = [
  // Replace these with paths to your actual logo images
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg" ,
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg" ,
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65266958f53ea35cd012178e_DILIP%20SONIGARA.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77c88f37016d6cd94f5_mosaic.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/65bcd77cae6da5aab64f973a_P-TAL.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/6526695834fd99c7f319053a_MANOHAR.svg" ,
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/652674569fa5bb751d73487e_furlenco%20.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb4280dc875e2081fcc1_PLIX.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb44c461952406632e27_UNCOVER.svg" ,
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb510685690c8d8b1bdc_rr%20cable.svg",
  "https://cdn.prod.website-files.com/639b3e775b326dcf7cea3e70/64abbb50ec11a19b72a44bdd_happilo.svg"
];

const Logo = ({ path }) => (
  <motion.img

    src={path}
    alt="Brand Logo"
    width={110} 
    
  />
);

const Mar = () => {
  const containerRef = React.useRef(null);

  const [containerWidth, setContainerWidth] = React.useState(0);

  React.useEffect(() => {
    const handleResize = () => {
      setContainerWidth(containerRef.current.offsetWidth);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const content = (
    <motion.div ref={containerRef} style={{ display: 'flex' }}>
      {logos.map((path) => (
        <Logo key={path} path={path} />
      ))}
     
      {logos.map((path) => (
        <Logo key={`duplicate-${path}`} path={path} />
      ))}
    </motion.div>
  );

  return (
   <div className=' overflow-hidden'>
     <motion.div className=''
      animate={{
        translateX: containerWidth > 0 ? -(containerWidth * 2) : 0,
      }}
      transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
      style={{ width: '100%' }}
    >
      {content}
    </motion.div>
   </div>
  );
};

export default Mar;
