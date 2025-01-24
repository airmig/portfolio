import Connecting from "./Connecting"
import Footer from "./Footer"
import { useTranslation } from 'react-i18next';
import Nav from "./Nav";
import ProjectCarousel from "./ProjectCarousel";
import { useState } from "react";
export default function Projects(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    const [selectedProject, setSelectedProject] = useState(0);
  
    return  <><Nav/><div className="container-fluid">
    <ProjectCarousel selectedProject={selectedProject} setSelectedProject={setSelectedProject}/>
    <Connecting/>
    <Footer/>
   </div></>
}