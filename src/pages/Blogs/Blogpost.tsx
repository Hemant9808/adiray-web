import { FaArrowLeft } from 'react-icons/fa';
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

import loader from '../../assets/loader.gif';
import { useEffect, useState } from 'react'
export default function Blogpost() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    axios.get(`https://node-js-jwt-auth.onrender.com/api/posts/${id}`)
      .then(response => {
        setPost(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching blog post:", error);
        setLoading(false);
      });
  }, [id]);


  if (loading) {
    return     <div className='w-full h-screen flex justify-center items-center'><img className='w-8' src={loader} alt="" /></div> // Using translation for loading text
    ;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="h-auto flex flex-col items-center justify-center pt-8 pb-12 ">
      <div className="h-auto flex justify-center pt-12 pb-12">
        <div className="w-[80vw] mt-[130px] max-w-[800px] h-auto flex flex-col justify-start gap-7">
          <div className="flex flex-col gap-5">
            <div className="text-pink-600 text-[13px] font-semibold flex gap-1 items-center">
              <FaArrowLeft />
              <a onClick={()=>{navigate('/blog')}} className="decoration-none text-pink-600 hover:text-pink-600 cursor-pointer">All Blogs</a>
            </div>

            <div className="flex justify-start gap-4">
              <img className="w-12 h-12 rounded-full" src={post.authorImg} alt="Author" />
              <div>
                <h3 className="text-md font font-bold">{post.author}</h3>
                {/* If author occupation is available, render it */}
                {post.authorOccupation && <h5 className="text-sm font-MontBook text-gray-700">{post.authorOccupation}</h5>}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-12">
            <div className="text-gray-900 text-4xl font-Mont font-bold">
              {post.title}
            </div>
            <img className="w-[752px] rounded-3xl" src={post.imageUrl} alt="Blog" />

            <div className="text-gray-900">
              {/* Render the main description */}
              <div className="text-gray-850 text-xl font-semibold font-Mont leading-[35px]">{post.description}</div>
              {/* If additional details are available, render them */}
              <br/>
              {post && post.details && (
                <div className="">
                  {post.details.map((detail: any) => (
                    <div key={detail._id} className="detail border-b border-gray-300 pb-4 mb-4">
                      <h2 className=" text-gray-900 text-xl font-semibold">{detail.point}</h2>
                      <p className=" text-gray-700 leading-7">{detail.description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
