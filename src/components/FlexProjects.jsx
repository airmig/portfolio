import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
export default function FlexProjects(){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };
    return          <>
    <div className="selectedProjects"><h1 className="header-a">
    {t('selectedprojects')}
</h1>
<h2 className="header-b">
    {t('selectedtalk')}
</h2></div>
<NavLink className="nav-link" to="/projects">
    <div className="container d-flex flexprojects mb-50">

        <div className="item beulah">
            <div className="title">
                Beulah Park<br/>
                <span className="subtitle"> 2002-2008</span>
            </div>
        </div>
        <div className="item winticket">
            <div className="title">
                Winticket<br/>
                <span className="subtitle"> 2002-2006</span>
            </div>
        </div>
        <div className="item cms">
        <div className="title">
                CMS<br/>
                <span className="subtitle"> 2002-2008</span>
            </div>
        </div>
        <div className="item reporting">
        <div className="title">
                Reporting<br/>
                <span className="subtitle"> 2002-2008</span>
            </div>
        </div>
        <div className="item networking">
        <div className="title">
                Networking<br/>
                <span className="subtitle"> 2002-2008</span>
            </div>
        </div>
        <div className="item nhcqualify">
        <div className="title">
                NHCQualify<br/>
                <span className="subtitle">2008</span>
            </div>
        </div>
        <div className="item betpad">
        <div className="title">
                Betpad<br/>
                <span className="subtitle"> 2007-2008</span>
            </div>
        </div>
        <div className="item xlpharmacy">
        <div className="title">
                XLPharmacy<br/>
                <span className="subtitle"> 2009</span>
            </div>
        </div>
        <div className="item whchamp">
            <div className="title">
                WHChamp<br/>
                <span className="subtitle"> 2010</span>
            </div>
        </div>
        <div className="item tqha">
        <div className="title">
                TQHA<br/>
                <span className="subtitle"> 2010</span>
            </div>
        </div>
        <div className="item darkhorse">
        <div className="title">
                Darkhorsebet<br/>
                <span className="subtitle"> 2010-2012</span>
            </div>
        </div>
        <div className="item kairos">
        <div className="title">
                Kairos<br/>
                <span className="subtitle"> 2010-2011</span>
            </div>
        </div>
        <div className="item ebet">
        <div className="title">
                ebet<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item bat">
        <div className="title">
                BataviaBets<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item finger">
        <div className="title">
                FingeLakes<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item sgr">
        <div className="title">
                SaratogaBets<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item hp">
        <div className="title">
                Horseplayersbet<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item raceuwin">
        <div className="title">
                Raceuwin<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item wlr">
        <div className="title">
                Wagerliveracing<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item yonkers">
        <div className="title">
                Empirecitybets<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item ghc">
        <div className="title">
                Greyhoundchannel<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item mutuels">
        <div className="title">
                Mutuelsonline<br/>
                <span className="subtitle"> 2011-2019</span>
            </div>
        </div>
        <div className="item knobbe">
        <div className="title">
                Knobbe Martens<br/>
                <span className="subtitle"> 2019</span>
            </div>
        </div>
        <div className="item wfs">
        <div className="title">
                World Fuel Services<br/>
                <span className="subtitle"> 2019</span>
            </div>
        </div>
        <div className="item wek">
        <div className="title">
                QA - WeKnow<br/>
                <span className="subtitle"> 2019</span>
            </div>
        </div>
        <div className="item sociedad">
        <div className="title">
                Sociedad M&D<br/>
                <span className="subtitle"> 2024</span>
            </div>
        </div>
    </div></NavLink></>
}