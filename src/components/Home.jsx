import { useTranslation } from 'react-i18next';
import FlexProjects from './FlexProjects';
import Hero from './Hero';
import Connecting from './Connecting';
import Footer from './Footer';
import Social from './Social';
import Nav from './Nav';
export default function Home(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    return <><Nav/><div className="container-fluid">
            <div className="bghero">
            <Hero/>
            </div>
            <FlexProjects/>
            <Connecting/>
            <Footer/>
           </div></>
}