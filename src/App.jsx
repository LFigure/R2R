import Navbar from './pages/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      {/* Add top padding to account for the fixed navbar */}
      <div className="pt-16">
        <section id="home" className="h-screen bg-green-500 flex justify-center items-center">
          <h1 className="text-5xl">Home Section</h1>
        </section>
        <section id="about" className="h-screen bg-blue-400 flex justify-center items-center">
          <h1 className="text-5xl">About Section</h1>
        </section>
        <section id="contact" className="h-screen bg-yellow-500 flex justify-center items-center">
          <h1 className="text-5xl">Contact Section</h1>
        </section>
      </div>
    </div>
  );
}

export default App;
