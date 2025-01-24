import { useTranslation } from 'react-i18next';
import Social from './Social';

export default function Hero() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    return  <div className="bghero">
            <div className="row">
                <div className="col-lg-12 imgcontainer text-left">
                    <img className="frontimg" src="prot.webp"/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-justify d-flex align-items-center justify-content-center">
                    <p className="biocontainer">
                        {t('home-a')}
                    </p>
                </div>
                <div className="col-lg-12">
                    <p className="biocontainer home-b">
                        {t('home-b')}
                    </p>
                </div>
            </div>
            <div className="row">
            <div className="col-lg-12 social-container">
                <Social/>
                    </div>
            </div>
            
            </div>
}