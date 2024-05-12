import blogAuthor from "../../assets/blogAuthor.png";
import blogpage from "../../assets/blogpage.png";
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
              <h3 className="text-md font font-bold">Full Name</h3>
              <h5 className="text-sm font-MontBook text-gray-700 ">Occupation</h5>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12">
          <div className=" text-gray-900 text-4xl font-Mont font-bold ">
            Understanding Market Psychology: How Emotions Influence Trading
            Decisions
          </div>
          <img className="w-[752px]  rounded-3xl" src={blogpage} />

          <div className="text-gray-900">
            <span className="text-gray-850 text-xl font-semibold font-Mont leading-[35px]">
              Trading isn't just about charts, numbers, and economic
              indicators—it's also deeply influenced by human psychology.
              Emotions play a significant role in driving market movements and
              influencing trading decisions. In this blog post, we'll delve into
              the fascinating world of market psychology and explore how various
              emotions can impact traders' behavior.
              <br />
              <br />
              1. Fear and Greed:
            </span>
            <span className="text-gray-800 text-[19.5px]  leading-[35px] font-MontBook">
              {" "}
              Two primary emotions that often dominate the market are fear and
              greed. Fear can cause traders to panic sell during market
              downturns, while greed can lead to overconfidence and excessive
              risk-taking during bull markets. Understanding how to manage these
              emotions is crucial for maintaining a balanced approach to
              trading.
              <br />
              <br />
            </span>
            <span className="text-gray-900 text-xl font-semibold  ">
              2. Herd Mentality:
            </span>
            <span className="text-gray-800 text-[19.5px] leading-[35px] font-MontBook ">
              {" "}
              Humans are social creatures, and this tendency extends to trading

              as well. Many traders tend to follow the crowd, leading to herd
              behavior in the markets. This herd mentality can create momentum
              in trends but also increase the risk of market bubbles and
              crashes. Recognizing when the herd mentality is driving market
              movements can help traders make more informed decisions.
              <br />
              <br />
            </span>
            <span className="text-gray-900 text-xl font-semibold  leading-[35px]">
              3. Loss Aversion:
            </span>
            <span className="text-gray-800 text-[19.5px] leading-[35px] font-MontBook">
              {" "}
              Loss aversion refers to the psychological bias where individuals
              feel the pain of losses more acutely than the pleasure of gains.
              This bias can lead traders to hold onto losing positions for too
              long in the hope that they will turn around—a phenomenon known as
              "falling in love with a stock." Overcoming loss aversion requires
              discipline and the ability to cut losses quickly to protect
              capital.
              <br />
              <br />
            </span>
            <span className="text-gray-900 text-xl font-semibold  leading-[35px]">
              4. Confirmation Bias:
            </span>
            <span className="text-gray-800 text-[19.5px] leading-[35px] font-MontBook">
              {" "}
              Traders often seek out information that confirms their existing
              beliefs while ignoring evidence that contradicts them. This
              confirmation bias can lead to poor decision-making and prevent
              traders from accurately assessing risk. Being aware of this bias
              and actively seeking out diverse perspectives can help traders
              make more objective decisions.
              <br />
            </span>
            <span className="text-gray-900 text-xl font-semibold  leading-[35px]">
              <br />
              5. Overcoming Emotional Biases:
            </span>
            <span className="text-gray-800 text-[19.5px] leading-[35px] font-MontBook">
              {" "}
              Successful traders learn to recognize and manage their emotional
              biases effectively. Techniques such as mindfulness meditation,
              journaling, and cognitive behavioral therapy can help traders
              develop emotional resilience and maintain a clear-headed approach
              to trading.
              <br />
              <br />
            </span>
            <span className="text-gray-900 text-xl font-semibold  leading-[35px]">
              6. Using Emotional Indicators:
            </span>
            <span className="text-gray-800 text-[19.5px] leading-[35px] font-MontBook ">
              {" "}
              Some traders use sentiment indicators, such as the Fear and Greed
              Index or the Volatility Index (VIX), to gauge market sentiment and
              identify potential turning points. These indicators can provide
              valuable insights into the prevailing mood of the market and help
              traders adjust their strategies accordingly.
            </span>
          </div>
        </div>
      </div>


      {/* components are dynamically rendered from here */}



      <div className="h-auto flex justify-center pt-12 pb-12">
        <div className="w-[80vw] mt-[130px] max-w-[800px] h-auto flex flex-col justify-start gap-7">
          <div className="flex flex-col gap-5">
            <div className="text-pink-600 text-[13px] font-semibold flex gap-1 items-center">
              <FaArrowLeft />
              <a href="/blog" className="decoration-none text-pink-600 hover:text-pink-600">All Blogs</a>
            </div>

            <div className="flex justify-start gap-4">
              <img className="w-12 h-12" src={post.authorImage} alt="Author" />
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
              {post.details && <div className="text-gray-800 text-[19.5px] leading-[35px] font-MontBook">{post.details}</div>}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
