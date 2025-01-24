import Connecting from "./Connecting"
import Footer from "./Footer"
import { useTranslation } from 'react-i18next';
import Nav from "./Nav";
import ResumeDetail from "./ResumeDetail";
export default function Resume(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };
  
    return  <><Nav/>
                <ResumeDetail/>

    <Connecting/>
    <Footer/>
   </>
}