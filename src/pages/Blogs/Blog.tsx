import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import AOS from 'aos';
import 'aos/dist/aos.css';
import blogbg from '../../assets/blogbg.jpg';
import blogpage from '../../assets/blogpage.png';

import { useTranslation } from 'react-i18next'; // Importing useTranslation hook

type BlogPost = {
  _id: string;
  title: string;
  description: string;
  imageUrl?: string;
};

const inputClasses = 'pl-10 pr-4 py-3 shadow-md text-md rounded-lg';
const hrClasses = 'flex-1 border-zinc-300';

const Blog: React.FC = () => {
  const { t } = useTranslation(); // Using useTranslation hook for translation

  const shouldAnimate = window.innerWidth <= 768;
  AOS.init({
    duration: 800,
  });

  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const itemsPerPage = 5;

  useEffect(() => {
    axios
      .get<BlogPost[]>('http://localhost:8080/api/posts/')
      .then((response: AxiosResponse<BlogPost[]>) => {
        setBlogPosts(response.data.sort((a:any, b:any) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()));
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching blog posts:', error);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (loading) {
    return <div>{t('Loading')}...</div>; // Using translation for loading text
  }

  if (!blogPosts.length) {
    return <div>{t('No posts found')}</div>; // Using translation for no posts found text
  }

  const extractFirst20Words = (text: string): string => {
    const words = text.split(' ');
    const first20Words = words.slice(0, 40);
    return first20Words.join(' ');
  };

  const filteredPosts = blogPosts.filter(post => {
    return post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
           post.description.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const pageCount = Math.ceil(filteredPosts.length / itemsPerPage);
  const paginatedPosts = filteredPosts.slice(currentPage * itemsPerPage, (currentPage + 1) * itemsPerPage);

  return (
    <div className="relative w-full flex justify-center shadow-md">
      <img className="absolute opacity-20 -z-1 object-cover w-full h-full -z-0" src={blogbg} alt="background" />
      <div className="p-8 px-[10vw] z-[5] max-w-[1300px] flex flex-col justify-center mt-[17vh] ">
        <div className="mb-6 md:flex justify-between items-center">
          <h1 data-aos={shouldAnimate ? 'slide-right' : ''} className="text-[clamp(35px,3.5vw,5rem)] font-Mont font-bold">
            {t('Latest')} <span className="text-blue-900">{t('Updates')}</span> {/* Using translation for Latest Updates */}
          </h1>
          <div data-aos={shouldAnimate ? 'slide-left' : ''} className="flex items-center gap-2 mt-2">
            <hr className={hrClasses} />
            <div className="relative flex items-center ">
              <input type="text" placeholder={t('Search')} className={inputClasses} value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} /> {/* Using translation for placeholder text */}
              <svg
                className="w-4 h-4 absolute left-3  flex items-center "
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          {paginatedPosts.map((post: BlogPost) => (
            <div key={post._id} className="flex flex-col md:flex-row gap-6">
              <div className="flex-shrink-0  md:w-1/3">
                <Link to={`/blog/blogpost/${post._id}`}>
                  <img src={post.imageUrl || blogpage} alt={post.title} className="rounded-lg object-cover w-full " />
                </Link>
              </div>
              <div className="flex flex-col flex-grow">
                <h2 className="text-lg font-semibold text-black mb-2">
                  <Link to={`/blog/blogpost/${post._id}`} className="hover:text-blue-900">
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-700">{extractFirst20Words(post.description)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-row mt-6">
          <div className="flex justify-center space-x-2">
            <button onClick={() => setCurrentPage(prevPage => Math.max(prevPage - 1, 0))} className="bg-blue-300 hover:bg-blue-600 text-white py-2 px-4 rounded-md mr-2" disabled={currentPage === 0}>{t('Previous')}</button> {/* Using translation for Previous button */}
            {Array.from({ length: pageCount }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index)}
                className={`px-4 py-2 rounded-md ${currentPage === index ? 'bg-blue-500 text-white' : 'bg-white text-blue-500 hover:bg-blue-100'}`}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={() => setCurrentPage(prevPage => Math.min(prevPage + 1, pageCount - 1))} className="bg-blue-300 hover:bg-blue-600 text-white py-2 px-4 rounded-md" disabled={currentPage === pageCount - 1}>{t('Next')}</button> {/* Using translation for Next button */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
