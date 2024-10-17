const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-12 px-4 pt-16"> {/* Added pt-16 */}
      {/* Content Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-12">
        {/* Left Side: R2R Description */}
        <div className="w-full md:w-1/2 text-white p-6">
          <h1 className="text-5xl font-bold mb-4">John Doe</h1>
          <p className="text-2xl italic mb-6">Founder of R2R (Road to Righteousness)</p>
          <p className="text-lg mb-6">
            John plans to bring brotherhood through Islam and guide the community on the path to righteousness. 
            R2R is about creating a support system that uplifts each other through faith and togetherness.
          </p>
        </div>

        {/* Right Side: Image */}
        <div className="w-full md:w-1/3 flex justify-center items-center mt-8">
          <img
            src="https://via.placeholder.com/400x300"
            alt="Leader"
            className="rounded-lg shadow-lg transform transition-transform duration-300 ease-in-out hover:scale-110 object-cover"
            style={{ width: '400px', height: '300px' }}
          />
        </div>
      </div>

      {/* Call to Action (Fading Text) */}
      <div className="mb-12 text-center">
        <h2 className="text-2xl font-bold text-white animate-pulse">Join the R2R Brotherhood - A Journey Together!!!</h2>
      </div>

      {/* Contact Form */}
      <div className="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold text-black">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="mt-2 p-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:border-black"
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold text-black">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="Your Email"
              className="mt-2 p-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:border-black"
            />
          </div>
          <div className="col-span-2 flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold text-black">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Your Message"
              className="mt-2 p-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:border-black"
            ></textarea>
          </div>
          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold py-3 px-8 rounded-lg shadow-md hover:bg-gray-800 focus:outline-none transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;