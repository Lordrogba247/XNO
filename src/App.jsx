import './App.css'
import { Routes, Route } from 'react-router-dom';
import Navbar from './1Navbar/Navbar'
import Hero from './2Hero/Hero'
import Welcome from './3Welcome/Welcome';
import Member from './4Member/Member';
import PrivateBooking from './5Private-Booking/Private-Booking';
import ContactUs from './6Contact/ContactUs';
import Footer from './7Footer/Footer';
import Bookings from './1Navbar/Bookings/Bookings';
import Bookings2 from './1Navbar/Bookings/Bookings2/Bookings2';
import Bookings3 from './1Navbar/Bookings/Bookings3/Bookings3';
import Membership from './Membership/Membership';
import Events from './1Navbar/Eventz/Events';
import Gallery from './1Navbar/Gallery/Gallery';
import Contact from './1Navbar/Contact/Contact';
import ScrollToTop from './ScrollToTop';
import PrivacyPolicy from './7Footer/Privacy';
import TermsOfUse from './7Footer/Terms'
function Home() {
  return (
    <>

      <Hero />
      <Welcome />
      <Member />
      <PrivateBooking />
      <ContactUs />
    </>
  );
}

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bookings" element={<Bookings />} />
        <Route path="/bookings2" element={<Bookings2 />} />
        <Route path="/bookings3" element={<Bookings3 />} />
        <Route path="/events" element={<Events />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App