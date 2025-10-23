import React from "react";
import { useState, useRef, useEffect} from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FaHome, FaBriefcase, FaGlobeAfrica, FaHandshake } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function LandingPage() {
  const subTexts = [
    "Your dream home in Ekiti with ease — explore beautiful houses, modern apartments, and serene lands that fit your vision of comfort and style.",
    "Discover affordable properties that suit your lifestyle — from family-friendly neighborhoods to luxurious estates, all designed to match your taste and budget.",
    "Your perfect home is just a click away — browse verified listings, view property details, and connect with trusted agents without stress.",
    "Connecting you to trusted real estate listings — experience a seamless way to buy, rent, or invest in properties across Ekiti with confidence.",
  ];

  const [currentText, setCurrentText] = useState(0);
  const [showSignIn, setShowSignIn] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentText((prev) => (prev + 1) % subTexts.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      
      <motion.section
        id="home"
        className="relative flex flex-col items-center justify-center text-center text-white min-h-screen 
        bg-[url('https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=867&auto=format&fit=crop')] 
        bg-cover bg-center px-6"
        initial={{ scale: 1 }}
        animate={{ scale: 1.02 }}
        transition={{
          duration: 5,
          ease: "easeInOut",
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>

        <div className="relative z-10 max-w-2xl">
          <motion.p
            className="uppercase tracking-widest font-bold text-sm text-white mb-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Find your next home, stress-free with
          </motion.p>

          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-3"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-blue-500">BuildMe</span> Real Estate
          </motion.h1>

          <AnimatePresence mode="wait">
            <motion.p
              key={currentText}
              className="text-lg md:text-xl mb-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8 }}
            >
              {subTexts[currentText]}
            </motion.p>
          </AnimatePresence>

         {/* <div className="flex gap-4 mb-6 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-500 hover:bg-white hover:text-blue-500 text-white px-6 py-3 rounded-full font-medium shadow-lg"
            >
              Explore Listings
            </motion.button>
          </div>
         */}

          <div className="bg-white/90 rounded-full p-2 flex items-center gap-2 shadow-lg max-w-3xl">
            <input
              type="text"
              placeholder="Search by location, property type..."
              className="flex-1 px-4 py-2 text-gray-700 bg-transparent outline-none"
            />
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-full font-medium">
              Search
            </button>
          </div>

          <p className="text-gray-300 text-sm mt-3">
            Over <span className="text-blue-400 font-semibold">Hundreds</span> of
            verified properties across Ekiti and nearby cities.
          </p>
        </div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
        >
          <span className="text-white text-2xl">↓</span>
        </motion.div>
      </motion.section>

    
      <section className="py-20 bg-white" id="listing">
        <div className="max-w-6xl mx-auto px-6 text-center md:text-left">
          
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Discover Beautiful Homes in
            <span className="text-blue-500"> Ekiti</span>
          </motion.h2>

          <motion.p
            className="mt-4 text-lg text-gray-600 max-w-2xl"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Whether you're buying, renting, or investing — BuildMe connects you
            with the best properties, verified agents, and smooth transactions.
          </motion.p>

          
          <div className="mt-14 grid md:grid-cols-2 gap-10 items-center">
            

            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-blue-100 text-blue-600 rounded-full p-3 text-xl">
                  <FaHome />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Verified Properties
                  </h3>
                  <p className="text-gray-600">
                    Every property listed on BuildMe is verified for
                    authenticity, ensuring safe and transparent transactions.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-green-100 text-green-600 rounded-full p-3 text-xl">
                  <FaBriefcase />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Trusted Agents
                  </h3>
                  <p className="text-gray-600">
                    Work with experienced professionals who help you find the
                    perfect property that matches your vision and budget.
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="flex items-start gap-4"
                whileHover={{ scale: 1.02 }}
              >
                <div className="bg-yellow-100 text-yellow-600 rounded-full p-3 text-xl">
                  <FaGlobeAfrica />
                </div>
                <div>
                  <h3 className="font-semibold text-xl text-gray-800">
                    Explore Anywhere
                  </h3>
                  <p className="text-gray-600">
                    Browse properties across Ekiti and nearby cities with ease —
                    homes, lands, apartments, and more.
                  </p>
                </div>
              </motion.div>

              
              <div className="pt-4 flex flex-wrap gap-4">
                <motion.button
                  onClick={() => setShowSignIn(true)}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 bg-blue-500 text-white rounded-full font-semibold hover:bg-blue-600 transition"
                >
                  Sign In
                </motion.button>
                <motion.button
                  onClick={() => setShowSignUp(true)}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border-2 border-blue-500 text-blue-500 rounded-full font-semibold hover:bg-blue-50 transition"
                >
                  Sign Up
                </motion.button>
              </div>
            </motion.div>

           
            <motion.div
              className="relative flex justify-center md:justify-end"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://pictures-nigeria.jijistatic.net/150971630_MTYwMC0xMjAwLWU1MTUxNzRjZjY.webp"
                alt="Bungalow"
                className="rounded-3xl shadow-lg w-full md:w-10/12"
              />
              <motion.div
                className="absolute -bottom-6 -left-6 bg-white shadow-xl rounded-2xl p-4 w-64"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h4 className="font-bold text-gray-800">3 BedRoom Bungalow</h4>
                <p className="text-gray-500 text-sm">Ado-Ekiti</p>
                <p className="text-blue-500 font-semibold mt-1">₦45,000,000</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Sign In Modal */}
<AnimatePresence>
  {showSignIn && (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-black/70 to-blue-900/60 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-xl relative overflow-hidden"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-20"></div>

        
        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          onClick={() => setShowSignIn(false)}
        >
          ✕
        </button>

        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Welcome Back
        </h3>
        <p className="text-center text-gray-500 mb-6">
          Sign in to explore the best homes for you.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowSignIn(false);
            window.location.href = "/Dashboard";
          }}
          className="flex flex-col gap-5"
        >
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
              required
            />
          </div>

          <div className="relative">
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
              required
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all shadow-md"
          >
            Continue
          </motion.button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Don’t have an account?{" "}
          <button
            className="text-blue-600 font-medium hover:underline"
            onClick={() => {
              setShowSignIn(false);
              setShowSignUp(true);
            }}
          >
            Sign up
          </button>
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Sign Up Modal */}
<AnimatePresence>
  {showSignUp && (
    <motion.div
      className="fixed inset-0 bg-gradient-to-br from-blue-900/60 to-black/70 backdrop-blur-sm flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-white rounded-2xl p-8 w-11/12 max-w-md shadow-xl relative overflow-hidden"
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.85, opacity: 0 }}
        transition={{ type: "spring", stiffness: 120, damping: 12 }}
      >
        
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-300 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-blue-200 rounded-full blur-3xl opacity-20"></div>

        <button
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
          onClick={() => setShowSignUp(false)}
        >
          ✕
        </button>

        <h3 className="text-3xl font-extrabold text-center text-gray-800 mb-6">
          Create Your Account 
        </h3>
        <p className="text-center text-gray-500 mb-6">
          Get personalized home recommendations and save your favorites.
        </p>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setShowSignUp(false);
            window.location.href = "/";
          }}
          className="flex flex-col gap-5"
        >
          <input
            type="text"
            placeholder="Full name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
            required
          />
          <input
            type="email"
            placeholder="Email address"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none placeholder-gray-400"
            required
          />

          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white font-semibold py-3 rounded-lg transition-all shadow-md"
          >
            Sign Up
          </motion.button>
        </form>

        <p className="text-sm text-gray-500 text-center mt-6">
          Already have an account?{" "}
          <button
            className="text-blue-600 font-medium hover:underline"
            onClick={() => {
              setShowSignUp(false);
              setShowSignIn(true);
            }}
          >
            Sign in
          </button>
        </p>
      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

      </section>

      {/* About Section */}
      <section className="relative py-24 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden" id="about">
        <motion.div
          className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>

        <div
          ref={ref}
          className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-14"
        >
          
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 space-y-6"
          >
            <h4 className="text-4xl md:text-5xl font-bold text-gray-900">
              About <span className="text-blue-600">BuildMe</span>
            </h4>

            <p className="text-lg text-gray-600 leading-relaxed">
              BuildMe is your trusted partner in real estate, connecting you to dream homes
              and investment opportunities across Ekiti State and beyond. We simplify property
              search with seamless tools, verified listings, and transparent dealings.
            </p>

            <p className="text-gray-600">
              Whether you’re buying, selling, or renting — we make the experience effortless,
              guided by technology and integrity.
            </p>

            
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-2xl shadow-sm">
                <FaHome className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-semibold">Verified Listings</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-2xl shadow-sm">
                <FaHandshake className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-semibold">Trusted Partners</span>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} className="flex items-center gap-3 bg-blue-50 px-5 py-3 rounded-2xl shadow-sm">
                <FaGlobeAfrica className="text-blue-600 text-2xl" />
                <span className="text-gray-700 font-semibold">Local Expertise</span>
              </motion.div>
            </div>

          
            <div className="grid grid-cols-3 gap-6 pt-8 text-center md:text-left">
              {[
                { num: 120, label: "Verified Listings" },
                { num: 80, label: "Happy Clients" },
                { num: 15, label: "Expert Agents" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <motion.h3
                    className="text-4xl font-bold text-blue-600"
                    initial={{ count: 0 }}
                    animate={isInView ? { count: item.num } : {}}
                    transition={{ duration: 2, ease: "easeOut" }}
                  >
                    {item.num}+
                  </motion.h3>
                  <p className="text-gray-600 text-sm">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="md:w-1/2 flex justify-center relative"
          >
            <motion.img
              src="https://cdn.pixabay.com/photo/2015/11/03/08/54/house-purchase-1019764_1280.jpg"
              alt="About BuildMe"
              className="rounded-3xl shadow-xl w-full max-w-md"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.03 }}
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US / TESTIMONIALS SECTION */}
<section className="relative py-24 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden" id="why">
  <motion.div
    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
    <motion.h4
      className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
      initial={{ opacity: 0, y: -40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      Why Choose <span className="text-blue-600">BuildMe</span>?
    </motion.h4>

    <motion.p
      className="text-lg text-gray-600 max-w-2xl mx-auto mb-14"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.6 }}
    >
      We bring technology, trust, and transparency together — helping you make smarter property decisions with ease and confidence.
    </motion.p>

    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {[
        {
          title: "Verified Properties",
          desc: "Every listing is verified to ensure legitimacy and accuracy — no scams, just trusted opportunities.",
          icon: <FaHome className="text-blue-600 text-4xl mb-4" />,
        },
        {
          title: "Seamless Experience",
          desc: "We simplify property search, making it easy to browse, compare, and contact agents directly in one place.",
          icon: <FaBriefcase className="text-blue-600 text-4xl mb-4" />,
        },
        {
          title: "Local Expertise",
          desc: "Our team and partners understand the Ekiti market deeply — guiding you to the right neighborhood and price.",
          icon: <FaGlobeAfrica className="text-blue-600 text-4xl mb-4" />,
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className="bg-white rounded-3xl shadow-lg p-8 flex flex-col items-center text-center hover:shadow-2xl transition-all duration-300"
        >
          {item.icon}
          <h5 className="text-2xl font-semibold text-gray-800 mb-3">{item.title}</h5>
          <p className="text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </div>

  
    <motion.div
      className="mt-20"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h5 className="text-3xl font-semibold mb-10 text-gray-900">
        What Our Clients Say
      </h5>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Adebayo T.",
            text: "BuildMe made finding my first home stress-free! Every property detail was clear and verified. I highly recommend them.",
          },
          {
            name: "Blessing O.",
            text: "The best platform for discovering affordable lands and apartments in Ekiti. I love the clean interface and fast search!",
          },
          {
            name: "Kunle A.",
            text: "Honest agents, reliable listings, and a seamless experience from start to finish. BuildMe really delivers on trust.",
          },
        ].map((t, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            className="bg-blue-50 p-8 rounded-3xl shadow-md text-left"
          >
            <div className="flex items-center gap-4 mb-4">
              <h6 className="font-semibold text-gray-800">{t.name}</h6>
            </div>
            <p className="text-gray-600 italic">“{t.text}”</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
</section>


<section className="relative py-28 bg-gradient-to-b from-white via-blue-50/50 to-white overflow-hidden text-white" id="contact">

  <motion.div
    className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15),transparent_70%)]"
    animate={{ opacity: [0.6, 1, 0.6] }}
    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
  ></motion.div>

  <div className="relative z-10 max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
    
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="md:w-3/5 space-y-6"
    >
      <h2 className="text-4xl md:text-5xl text-black font-bold leading-tight">
        Ready to Find Your <span className="text-blue-500">Perfect Home?</span>
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Join <span className="font-semibold text-blue-500">BuildMe</span> today and discover a smarter way 
        to explore properties across Nigeria. Browse verified listings, connect with trusted agents,
        and start your journey toward your dream home — all in one place.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
        <motion.a
          href="#listing"
          whileHover={{ scale: 1.05 }}
          className="bg-blue-500 text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-blue-600 transition"
        >
          Get Started
        </motion.a>
      </div>
    </motion.div>
  </div>
</section>

      <Footer />
    </div>
  );
}

export default LandingPage;
