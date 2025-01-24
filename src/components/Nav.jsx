import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';

export default function Nav() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang); // Change the language
  };

    return     <nav className="navbar navbar-expand-lg bg-myd-primary">
    <div className="container-fluid">
      <span className="company-name">Ariel Durán</span>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink className="nav-link" to="/">{t('home')}</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/projects">{t('projects')}</NavLink>
          </li>
          <li className="nav-item">
           <NavLink className="nav-link" to="/resume">{t('resume')}</NavLink>
          </li>
         {/* <li className="nav-item">
            <NavLink className="nav-link" to="/about">{t('aboutme')}</NavLink>
          </li> */}
          <li><a onClick={()=>changeLanguage('en')} className="nav-link">
            <img className="flag" src="/portfolio/us.svg" alt={t('english')}/></a></li>
          <li><a onClick={()=>changeLanguage('es')} className="nav-link">
            <img className="flag" src="/portfolio/cr.svg" alt={t('spanish')}/></a></li>
        </ul>
      </div>
    </div>
  </nav>
}