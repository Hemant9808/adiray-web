
import blogpage from "../../assets/blogpage.png";
import { useEffect, useState } from "react";
import blogbg from "../../assets/blogbg.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
<<<<<<< HEAD
import { useTranslation } from 'react-i18next';
=======
import axios from "axios";

>>>>>>> 4f97fc705b49ed857a59c7156e317b1243c66841

const inputClasses = "pl-10 pr-4 py-3 shadow-md text-md  rounded-lg";
const hrClasses = "flex-1 border-zinc-300";
const Blog = () => {
<<<<<<< HEAD
  const { t } = useTranslation();
=======

>>>>>>> 4f97fc705b49ed857a59c7156e317b1243c66841
  const shouldAnimate = window.innerWidth <= 768;
  AOS.init({
    duration: 800,
  });

  const [blogPosts, setBlogPosts] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("https://node-js-jwt-auth.onrender.com/api/posts/")
      .then(response => {
        setBlogPosts(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blog posts:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogPosts) {
    return <div>Post not found</div>;
  }

  return (
    <div className=" relative w-full flex  justify-center shadow-md ">
      <img
        className="absolute opacity-20 -z-1 object-cover w-full h-full -z-0"
        src={blogbg}
        alt="background"
      />
      <div className=" p-8 px-[10vw] z-[5]   max-w-[1300px] flex flex-col justify-center mt-[17vh] ">
        <div className="mb-6 md:flex justify-between items-center">
          <h1
            data-aos="slide-right"
            className="text-[clamp(35px,3.5vw,5rem)] font-Mont font-bold"
          >
            {t('Latest')} <span className="text-blue-900">{t('Update')}</span>
          </h1>
          <div data-aos="slide-left" className="flex items-center gap-2 mt-2">
            <hr className={hrClasses} />
            <div className="relative flex items-center ">
              <input
                type="text"
                placeholder={t('Search')}
                className={inputClasses}
              />
              <svg
                className="w-4 h-4 absolute left-3  flex items-center "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="grid gap-6">
          {[1,2,3].map((item: any) => (
            <div
              data-aos={shouldAnimate ? "fade-up" : ""}
              key={item}
              className="flex justify-center items-center gap-12 md:flex-row flex-col "
            >

              <div className="col-span-2 w-[100%] ">
                <Link to="/blog/blogpost">
                  <img
                    src={blogpage}
                    alt="Market Update"
                    className="col-span-1 rounded-lg  sm:w-[350px]"
                  /></Link>
              </div>


              <div className="col-span-2  h-[25vh] flex flex-col items-start justify-start overflow-hidden">
                <h2 className="text-[clamp(15px,2.5vw,1.7rem)] font-Mont font-extrabold text-black ">
                  Understanding Market Psychology: How Emotions Influence
                  Trading Decisions
                 

                </h2>
                <p className="mt-2 text-zinc-400 font-Mont  font-semibold">
                  Trading isn't just about charts, numbers, and economic
                  indicators—it's also deeply influenced by human psychology.
                  Emotions play a significant role in financial decisions.
                 
                </p>
              </div>

            </div>
          ))}
          {blogPosts.map((post:any) => (
            <div
              data-aos={shouldAnimate ? "fade-up" : ""}
              key={post._id}
              className="flex justify-center items-center gap-12 md:flex-row flex-col"
            >
              <div className="col-span-2 w-[100%]">
                <Link to={`/blog/blogpost/${post._id}`}>
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="col-span-1 rounded-lg sm:w-[350px]"
                  />
                </Link>
              </div>
              <div className="col-span-2 h-[25vh] flex flex-col items-start justify-start overflow-hidden">
                <h2 className="text-[clamp(15px,2.5vw,1.7rem)] font-Mont font-extrabold text-black">
                  {post.title}
                </h2>
                <p className="mt-2 text-zinc-400 font-Mont font-semibold">
                  {post.description}
                </p>
              </div>
            </div>
          ))}


        </div>
      </div>
    </div>
  );
};

export default Blog;
