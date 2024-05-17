import  {  useEffect } from 'react';
import appleImg from '../assets/apple.jpeg'
import clothImg from "../assets/clothes.png"
import toolbox from "../assets/toolbox.png"
import brick from "../assets/bricks.png"
// Inline CSS
const styles = `
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;

  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(2, 1fr);
    width: 500px;
    height: 500px;
    position: relative;
    gap: 12px;
  }

  .image {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 3px;
    transition: transform 1s ease-in-out;
  }

  .transition-active .image:nth-child(1) {
    transform: translate(105%, 107%);
  }

  .transition-active .image:nth-child(2) {
    transform: translate(-109%, 107%);
  }

  .transition-active .image:nth-child(3) {
    transform: translate(109%, -107%);
  }

  .transition-active .image:nth-child(4) {
    transform: translate(-105%, -106%);
  }

  .image:nth-child(4) {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 3px;
    transition: transform 1s ease-in-out;
    position: relative;
    top: -15%;
    left: 5%;
  }
  .image:nth-child(1) {
    width: 100%;
    height: 80%;
    object-fit: cover;
    border-radius: 3px;
    transition: transform 1s ease-in-out;
    position: relative;
    top: 5%;
    left: 5%;
  }
  .image:nth-child(2) {
    width: 60%;
    height: 70%;
    object-fit: cover;
    border-radius: 3px;
    transition: transform 1s ease-in-out;
    position: relative;
    top: 15%;
    left: 5%;
  }
  .image:nth-child(3) {
    width: 60%;
    height: 70%;
    object-fit: cover;
    border-radius: 3px;
    transition: transform 1s ease-in-out;
    position: relative;
    top: -15%;
    left: 45%;
  }
  @media (max-width: 700px) {
    .image-grid {
      width: 90%;
      height: auto;
      max-width: 350px;
    }

    .image {
      width: 100%;
      height: 100%;
    }
    
  .transition-active .image:nth-child(1) {
    transform: translate(111%, 120%);
  }

  .transition-active .image:nth-child(2) {
    transform: translate(-109%, 125%);
  }

  .transition-active .image:nth-child(3) {
    transform: translate(120%, -107%) 
  }

  .transition-active .image:nth-child(4) {
    transform: translate(-110%, -106%) scale()
  }

  }
`;

function ImageSwapAnimation() {
  
   
  
    useEffect(() => {
      const imageGrid:any = document.querySelector('.image-grid');
      let isActive = false;
  
      const interval = setInterval(() => {
        if (isActive) {
          imageGrid.classList.remove('transition-active');
        } else {
          imageGrid.classList.add('transition-active');
        }
        isActive = !isActive;
      }, 2000);
  
      return () => clearInterval(interval);
    }, []);
  
  return (
    <div className='flex '>
      {/* Inline styles */}
      <style>{styles}</style>

      <div className="container">
        <div className={`image-grid `}>
          <img src={appleImg} alt="Image 1" className="image" />
          <img src={clothImg} alt="Image 2" className="image" />
          <img src={toolbox} alt="Image 3" className="image" />
          <img src={brick} alt="Image 4" className="image" />
        </div>
      </div>

      {/* Inline JavaScript */}
      <script>
        {`
          document.addEventListener("DOMContentLoaded", function() {
            const imageGrid = document.querySelector('.image-grid');
            let isActive = false;

            setInterval(() => {
              if (isActive) {
                imageGrid.classList.remove('transition-active');
              } else {
                imageGrid.classList.add('transition-active');
              }
              isActive = !isActive;
            }, 2000);
          });
        `}
      </script>
    </div>
  );
}

export default ImageSwapAnimation;
