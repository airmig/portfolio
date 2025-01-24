import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import Social from './Social';

export default function Footer(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    return <div className="container-fluid footer">
            <div className="row w-100 mb-50">
                <div className="col-lg-6 footer-bold">
                    Ariel Durán
                </div>
                <div className="col-lg-6 footer-normal text-end">
                    <NavLink to="/">
                    {t('home')}
                    </NavLink>
                    <NavLink to="/projects">
                    {t('projects')}
                    </NavLink>
                    <NavLink to="/resume">
                    {t('resume')}
                    </NavLink>
                    <NavLink to="/about">
                    {t('aboutme')}
                    </NavLink>
                </div>
            </div>
            <div className="row w-100" style={{paddingBottom: '50px'}}>
            <center><Social/></center>
            </div>
            <div className="row w-100">
                <hr/>
            </div>
            <div className="row w-100 mt-50">
                <div className="col-lg-12">
                    <center className="copy">Copyright 2024 Ariel Durán</center>
                </div>
            </div>
            </div>
}