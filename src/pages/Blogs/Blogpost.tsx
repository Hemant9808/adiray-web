import blogAuthor from "../../assets/blogAuthor.png";
import { Link } from "react-router-dom";
import { FaArrowLeft } from 'react-icons/fa';
import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from 'react'

export default function Blogpost() {
  const { id } = useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:8080/api/posts/${id}`)
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
    return <div>Loading...</div>;
  }

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className="h-auto flex flex-col items-center justify-center pt-12 pb-12 ">
      <div className="w-[80vw] mt-[130px] max-w-[800px] h-auto flex flex-col justify-start gap-7 ">
        <div className=" flex flex-col gap-5">
          <div className="text-pink-600 text-[13px] font-semibold flex gap-1 items-center ">
            <FaArrowLeft /><Link to="/blog" className="decoration-none text-pink-600 hover:text-pink-600 ">All Blogs</Link>
          </div>
          <div className=" flex justify-start gap-4 ">
            <img className="w-12 h-12 " src={blogAuthor} alt="" />
            <div>
              <h3 className="text-md font font-bold">{post.author}</h3>
              <h5 className="text-sm font-MontBook text-gray-700 ">{post.authorOccupation}</h5>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-12">
          <div className=" text-gray-900 text-4xl font-Mont font-bold ">
            {post.title}
          </div>
          <img className="w-[752px]  rounded-3xl" src={post.imageUrl} />
          <div className="text-gray-900">
            <span className="text-gray-850 text-xl font-semibold font-Mont leading-[35px]">
              {post.description}
            </span>
            {post.details && post.details.map((detail: any) => (
              <div key={detail._id}>
                <span className="text-gray-800 text-[19.5px]  leading-[35px] font-MontBook">
                  <strong>{detail.point}</strong>: {detail.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
