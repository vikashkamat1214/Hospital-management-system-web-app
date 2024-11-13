import React from 'react'

const Biography = ({imageUrl}) => {
  return (
    <>
    <div className='container biography'>
      <div className="banner">
        <img src={imageUrl} alt='aboutImg'/>
      </div>
      <div className="banner">
        <p>Biography</p>
        <h3>Who We Are</h3>
        <p>
        ZeeCare Medical Institute is a premier healthcare facility renowned
         for its dedication to excellence in medical care. With a team of 
         highly skilled and compassionate professionals, we strive to deliver 
         personalized and comprehensive healthcare services. Our state-of-the-art 
         facility is equipped with the latest medical technology, ensuring that 
         each patient receives the highest standard of care. At ZeeCare, 
         our mission is to prioritize your well-being and guide you on a harmonious 
         journey towards optimal health and wellness. We are committed to making a 
         positive impact on the lives of our patients and the community we serve.
          </p>
          <p>We are all in 2024!</p>

      </div>
    </div>
    </>
  );
};

export default Biography;
