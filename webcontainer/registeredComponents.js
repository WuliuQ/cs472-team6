import FourZeroFourSection from './components/404Section/FourZeroFour';
import AboutHeadSection from './components/AboutHeadSection/AboutHeadSection';
import AboutHeadImages from './components/AboutHeadImages/AboutHeadImages';
import Banner from './components/Banner/Banner';
import BlogPage from './components/BlogPage/BlogPage';
// import Companies from './components/Companies/Companies';
import ContactSection from './components/ContactSection/ContactSection';
import EducationWorkExperience from './components/EducationAndWork/EducationAndWork';
import Footer from './components/Footer/Footer';
import Navbar from './components/NavbarComponent/NavbarComponent';
import ServiceWrapper from './components/ServiceWrapper/ServiceWrapper';
import Sm from './components/SocialMedia/SocialMedia';
import StatsWrapper from './components/StatsWrapper/StatsWrapper';
import Testimonial from './components/Testimonial/Testimonial';

export const registeredComponents = new Map([
  ['Four Zero Four', FourZeroFourSection],
  ['AboutHeadImages', AboutHeadImages],
  ['AboutHeadSection', AboutHeadSection],
  ['Banner', Banner],
  ['BlogPage', BlogPage],
  // ['Companies', Companies],
  ['ContactSection', ContactSection],
  ['Education and Work', EducationWorkExperience],
  ['Footer', Footer],
  ['Navbar', Navbar],
  ['Service Wrapper', ServiceWrapper],
  ['SocialMedia', Sm],
  ['Stats Section', StatsWrapper],
  ['Testimonial', Testimonial]
]);