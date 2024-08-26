
const HomePage = () => {
  return (
    <div>
       Navbar
      {} 
      <nav className="bg-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <a href="/" className="text-blue-600 text-lg font-bold">BlankPage</a>
          <div className="hidden md:flex space-x-6">
            <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="/" className="text-gray-700 hover:text-blue-600">About</a>
            <a href="/" className="text-gray-700 hover:text-blue-600">People</a>
            <a href="/" className="text-gray-700 hover:text-blue-600">Contact Us</a>
          </div>
          <div className="flex space-x-4">
            <a href="/login" className="text-gray-700 hover:text-blue-600">Log in</a>
            <a href="/signup" className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-500">
              Get started for free
            </a>
          </div>
        </div>
      </nav>
         Second Section
      {}
      <section className="bg-gradient-to-b from-white to-blue-50 py-16">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            Cut performance review time in <span className="text-blue-600">half</span> & double employee engagement
          </h1>
          <p className="mt-4 text-gray-700">
            Our intuitive platform streamlines goal-setting, feedback, and development planning empowering your team to achieve more with less effort.
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a href="/signup" className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-500">
              Get started for free
            </a>
            <a href="/learn-more" className="bg-white text-blue-600 py-3 px-6 rounded-lg border border-blue-600 hover:bg-blue-50">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
