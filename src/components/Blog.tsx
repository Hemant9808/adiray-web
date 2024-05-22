import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from React Router
import blogbg from "../assets/blogbg.jpg";
import blogpage from "../assets/blogpage.png";
import { useTranslation } from 'react-i18next';
import axios, { AxiosResponse } from 'axios';

// Define the interface for blog post
interface BlogPost {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
}

const Blog: React.FC = () => {
  const { t } = useTranslation();
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get<BlogPost[]>('https://node-js-jwt-auth.onrender.com/api/posts/')
      .then((response: AxiosResponse<BlogPost[]>) => {
        // Sort blog posts by createdAt in descending order
        const sortedPosts = response.data.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
        // Limit the number of blog posts to three
        const limitedPosts = sortedPosts.slice(0, 3);
        setBlogPosts(limitedPosts);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  if(loading){
    return (
      <div className=" h-auto relative overflow-hidden     flex flex-col items-center  " >
      <img className= 'absolute opacity-20 -z-1 object-cover w-full h-full -z-0'  src={blogbg} alt="background" />
       
      <div className=" relative w-90vw max-w-[] font-Mont flex text-[clamp(35px,3.5vw,5rem)]  justify-center   items-center pt-10 pl-[0vw]"><span className="text-gray-900  font-bold ">              {t('home.blogsection.mainheading1')} </span><span className="text-blue-900  font-bold ml-3">              {t('home.blogsection.mainheading2')}</span><span className="text-gray-900 text-5xl font-extrabold "> </span></div>
      <section className="  flex justify-center items-center py-10 px-5  ">
        <div className="flex flex-wrap gap-8 justify-center">
        <div data-aos="fade-up" data-aos-delay="150"
          className="md:w-[420px]  w-[320px] md:h-[320px] h-[250px] bg-red-500 rounded-[14px]  shadow border  flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-lg z-1"><img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px]  " src={blogpage} alt="" /></div>
            <div className="absolute md:w-[420px]  w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch  z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="font-Mont self-stretch text-gray-900 text-xl md:text-2xl font-bold ">
              {t('home.blogsection.cardheading')}
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-[10px] md:text-xs  font-semibold ">
              {t('home.blogsection.carddescription')} 
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150"
          className="md:w-[420px]  w-[320px] md:h-[320px] h-[250px] bg-red-500 rounded-[14px]  shadow border  flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-lg z-1"><img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px]  " src={blogpage} alt="" /></div>
            <div className="absolute md:w-[420px]  w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch  z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="font-Mont self-stretch text-gray-900 text-xl md:text-2xl font-bold ">
              {t('home.blogsection.cardheading')}
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-[10px] md:text-xs  font-semibold ">
              {t('home.blogsection.carddescription')} 
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="150"
          className="md:w-[420px]  w-[320px] md:h-[320px] h-[250px] bg-red-500 rounded-[14px]  shadow border  flex-col justify-center items-center inline-flex ">
            <div className=" bg-sky-950 bg-opacity-0 rounded-lg z-1"><img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px]  " src={blogpage} alt="" /></div>
            <div className="absolute md:w-[420px]  w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1  z-3 text-wrap object-cover self-stretch  z-3 p-8 bg-white bg-opacity-75 rounded-md shadow-inner flex-col justify-center items-start gap-1.5 flex">
              <div className="font-Mont self-stretch text-gray-900 text-xl md:text-2xl font-bold ">
              {t('home.blogsection.cardheading')}
              </div>
              <div className="z-3 relative self-stretch text-slate-600 text-[10px] md:text-xs  font-semibold ">
              {t('home.blogsection.carddescription')} 
              </div>
            </div>
          </div>
          
          
        </div>
      </section>
    </div>
    )
  }

  // Function to handle text overflow
  const truncateText = (text: string, maxLength: number) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }
    return text;
  };

  return (
    <div className="h-auto relative overflow-hidden flex flex-col items-center">
      <img className='absolute opacity-20 -z-1 object-cover w-full h-full -z-0' src={blogbg} alt="background" />

      <div className="relative w-90vw max-w-[] font-Mont flex text-[clamp(35px,3.5vw,5rem)] justify-center items-center pt-10 pl-[0vw]">
        <span className="text-gray-900 font-bold">
          {t('home.blogsection.mainheading1')}
        </span>
        <span className="text-blue-900 font-bold ml-3">
          {t('home.blogsection.mainheading2')}
        </span>
        <span className="text-gray-900 text-5xl font-extrabold"></span>
      </div>
      
      <section className="flex justify-center items-center py-10 px-5">
        <div className="flex flex-wrap gap-8 justify-center">
          {blogPosts.map((post) => (
            <Link key={post._id} to={`/blog/blogpost/${post._id}`} >
              <div data-aos="fade-up" data-aos-delay="150"
                className="md:w-[420px] w-[320px] md:h-[320px] h-[250px]  rounded-[14px] shadow border flex-col justify-center items-center inline-flex">
                <div className="bg-sky-950 bg-opacity-0 rounded-lg z-1">
                  <img className="z-1 md:w-[420px] md:h-[320px] w-[320px] h-[250px] rounded-xl" src={post.imageUrl || blogpage} alt={post.title} />
                </div>
                <div className="absolute   md:w-[420px] w-[320px] h-[150px] md:h-[150px] mt-[120px] md:mt-[170px] mr-1 z-3 text-wrap object-cover self-stretch z-3 p-4 overflow-hidden bg-white bg-opacity-85 rounded-md shadow-inner flex-col justify-start items-start gap-1.5 flex">
                  <div className="font-Mont  self-stretch  text-gray-900 text-xl md:text-2xl font-bold">
                    {truncateText(post.title, 50) || t('home.blogsection.cardheading')}
                  </div>
                  <div className="z-3  relative self-stretch text-slate-600 text-[10px] md:text-xs font-semibold">
                    {truncateText(post.description, 100) || t('home.blogsection.carddescription')}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Blog;
