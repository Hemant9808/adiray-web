import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";

interface CategroyCardProps {
    categoryId: string;
    imageUrl: [string];
    categoryName: string;
}

export default function CategoryCard({ categoryId, imageUrl, categoryName }: CategroyCardProps) {

    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImage(prevImage => prevImage + 1);
        }, 4000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <>
            <Link to={`category/${categoryId}`} className="relative w-80 h-96">
                {
                    imageUrl.map((url, index) => {
                        return (
                            <img
                                key={index}
                                className={`${currentImage % imageUrl.length === index ? ' opacity-100' : 'opacity-0'} w-full h-full transition-opacity duration-1000 absolute top-0 object-cover rounded-lg`}
                                src={url}
                                alt={categoryName}
                            />
                        )
                    })
                }
                <Button className="absolute bottom-0 bg-blue-700 text-white w-full ">
                    {categoryName}
                </Button>
            </Link>
        </>
    )
}