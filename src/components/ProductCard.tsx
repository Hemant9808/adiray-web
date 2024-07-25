import  { useState } from 'react'
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from './Button';
interface props {
  images : string[]
}

export default function ProductCard({images}:props) {


    const [imageIndex, setImageIndex] = useState(0);



    useEffect(() => {
      const intervalId = setInterval(() => {
        setImageIndex(imageIndex => imageIndex + 1);
      }, 4000);

      return () => {
          clearInterval(intervalId);
      };
  }, []); 
  return (
    <Link to="category" className="relative w-80 h-96">
    <img
      className="w-full h-full object-cover rounded-lg"
      src={images[imageIndex % images.length ]}
      alt="Category 1"
    />
    <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
      Category 1
    </Button>
  </Link>
  )
}
