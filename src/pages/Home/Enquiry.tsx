import commodities from "../../assets/commodities.mp4";

const Enquiry = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[1000px] bg-cover bg-center  ">
      <video
        className=" relative inset-0 w-full h-[100%] object-cover opacity-50 "
        style={{ marginTop: "0px" }}
        autoPlay
        loop
        muted
      >
        <source src={commodities} type="video/mp4" />
      </video>

      <div className="absolute flex flex-col  items-center h-[1000px]   bg-[#7797bc69] opacity-100 w-full ">
        <div style={{ width: "70%", marginTop: "140px", minWidth:"900px" }}>
          <h1 className="font-mont font-bold md:text-5xl mb-6 mr-8 ml-8 z-10 text-2xl text-center  text-white">
            Get your{" "}
            <span style={{ color: "#ffd700" }}>Products Delivered </span>to your
            destination from India{" "}
          </h1>
          {/* Form */}
        </div>
        <div
          className="bg-white p-8 rounded-lg shadow-xl max-w-screen-md w-5/6"
          style={{ width: "450px" }}
        >
          <div className="w-full flex items-center justify-center">
          <h2
            className="text-2xl font-semibold mb-4  "
      
          >
            Enquiry Now
          </h2>
          </div>
          <form>
            <div className="mb-4 ">
              <label className="block text-sm font-semibold  mr-8" htmlFor="name">
                Name:
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="text"
                id="name"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4 ">
              <label className="block text-sm font-semibold mr-8" htmlFor="email">
                Contact
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="contact"
                id="contact"
                placeholder="Mobile number"
              />
            </div>

            <div className="mb-4 ">
              <label
                className="block text-sm font-semibold mb-1 mr-9"
               
              >
                Product Name
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                
                id="Product"
                placeholder="Enter Product name"
              />
            </div>
            <div className="mb-4 ">
              <label className=" text-sm font-semibold mb-1 mr-8 " htmlFor="mobile">
                Quantity
              </label>
              <input
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                type="number"
                id="Quantity"
                placeholder="Enter quantity"
              />
            </div>
            <div className="mb-4 ">
              <label
                className="block text-sm font-semibold mb-1 mr-8"
                htmlFor="address"
              >
                Adittional Comments
              </label>
              <textarea
                className="w-full px-3 py-2 border rounded-lg focus:outline-none"
                id=" comments"
                placeholder="Enter your comments"
              ></textarea>
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none ml-22"
              style={{ width: "100%" }}
              type="submit"
            >
              Send your query
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Enquiry;
