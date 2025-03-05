import { useTranslation } from 'react-i18next';
import Social from './Social';
import heroImage from '../assets/prot.webp';

export default function ResumeDetail() {
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    return  <div className="bghero">
            <div className="row">
                <div className="col-lg-12 imgcontainer text-left">
                    <img className="frontimg" src={heroImage}/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 text-justify d-flex align-items-center justify-content-center">
                    <p className="biocontainer text-left">
                    {t('dedititle')}
                    </p>
                </div>
                <div className="col-lg-12">
                    <p className="biocontainer home-b">
                    {t('dedication')}
                    </p>
                </div>
                <div className="lg-12">
                    <a href="ArielDuranResume.pdf" target="_blank"><button className="button-custom download">{t('download')}</button></a>
                </div>
            </div>
            </div>

}