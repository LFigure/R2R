const Contact = () => {
  return (
    <div className="min-h-screen bg-black flex flex-col items-center py-16 px-4">
      {/* Contact Info Section */}
      <div className="w-full max-w-6xl flex flex-col md:flex-row items-center justify-between mb-16">
        {/* Left Side: R2R Description */}
        <div className="w-full md:w-1/2 text-white p-6">
          <h1 className="text-5xl font-extrabold mb-4">John Doe</h1>
          <p className="text-2xl italic mb-6">Founder of R2R (Road to Righteousness)</p>
          <p className="text-lg leading-relaxed">
            John plans to bring brotherhood through Islam and guide the community on the path to righteousness. 
            R2R is about creating a support system that uplifts each other through faith and togetherness.
          </p>
        </div>

        {/* Right Side: Leader Image with Margin Adjustments */}
        <div className="w-full md:w-1/3 flex justify-center items-center mt-8 md:mt-0">
          <img
            src="/placeholderrr.jpg"
            alt="Leader"
            className="rounded-lg shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 object-cover mt-8"
            style={{ width: '400px', height: '300px' }}
          />
        </div>
      </div>

      {/* Call to Action Section with Shine Effect */}
      <div className="mb-16 text-center">
        <h2 className="text-3xl font-bold text-gray-400 shine-text">
          Join the R2R Brotherhood - A Journey Together!
        </h2>
        <p className="text-lg text-gray-300 mt-4">Become part of a community of faith and support.</p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-6xl bg-white shadow-2xl rounded-lg p-10"> {/* Changed max-w-4xl to max-w-6xl */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex flex-col">
            <label htmlFor="name" className="text-lg font-semibold text-black">Your Name</label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="mt-2 p-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:border-orange-500 transition duration-300"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="text-lg font-semibold text-black">Email Address</label>
            <input
              type="email"
              id="email"
              placeholder="johndoe@example.com"
              className="mt-2 p-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:border-orange-500 transition duration-300"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label htmlFor="message" className="text-lg font-semibold text-black">Message</label>
            <textarea
              id="message"
              rows="6"
              placeholder="Write your message here"
              className="mt-2 p-3 border border-gray-300 bg-white text-black rounded-lg focus:outline-none focus:border-orange-500 transition duration-300"
            ></textarea>
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="bg-black text-white font-semibold py-3 px-12 rounded-lg shadow-lg hover:bg-gray-900 focus:outline-none transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>

      {/* Social Media Section */}
      <div className="mt-16 flex justify-center space-x-6">
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-facebook-f text-2xl"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-twitter text-2xl"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-instagram text-2xl"></i>
        </a>
        <a href="#" className="text-gray-300 hover:text-white transition duration-300">
          <i className="fab fa-linkedin-in text-2xl"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
