import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import Hero from '@/components/Hero'
import Info from '@/components/Info'
import About from '@/components/About'
import BookAppointment from '@/components/BookAppointment'
import Reviews from '@/components/Reviews'
import Doctors from '@/components/Doctors'

export default function Home() {
  return (
    <div className="home-section">
      <Header />
      <Hero />
      <Info />
      <About />
      <BookAppointment />
      <Reviews />
      <Doctors />
      <Footer />
    </div>
  );
}
