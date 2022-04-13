import { useEffect, useState } from 'react';
import AboutUs from '../components/AboutUs';
import ContactUs from '../components/ContactUs';
import Features from '../components/Features';
import Gallery from '../components/Gallery';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Snack from '../components/Snack';
import Testimonials from '../components/Testimonials';
import TextInput from '../components/TextInput';


const Home = ({handleChange}) => {

  const [open, setOpen] = useState(true);

  useEffect( () => {
    const timer = setTimeout(() => {
      setOpen(false);
    }, 10000);    
    return() => clearTimeout(timer);
  }, [])

  const handleClick = () => {
    setOpen(false);
  }

  return (
      <>
            <Snack open={open} handleClick={handleClick}/>
            <Header/>
            <Jumbotron/>
            <Features/>
            <Gallery/>
            <Testimonials/>
            <AboutUs/>
            <ContactUs/>
            <TextInput handleChange={handleChange}/>
      </>
  )
}

export default Home