import { useTranslation } from 'react-i18next';

export default function Connecting(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    return <div className="container-fluid connect">
        <div className="row">
            <div className="col-12">
                <h1 className="header-a">{t('connecting')}</h1>
                <h2 className="header-b">{t('talk')}</h2><br/><br/>
                <p>
                    <a href="mailto:airmig@gmail.com" className="button-custom">{t('contact')}</a>
                    </p>
            </div>
            </div>
          </div>
}