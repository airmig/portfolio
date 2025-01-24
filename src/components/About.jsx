import Connecting from "./Connecting"
import Footer from "./Footer"
import { useTranslation } from 'react-i18next';
import Nav from "./Nav";
export default function About(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };
  
    return  <><Nav/><div className="container-fluid">
    <Connecting/>
    <Footer/>
   </div></>
}