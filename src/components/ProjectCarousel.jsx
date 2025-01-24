import { useTranslation } from 'react-i18next';
import { projectJsonData } from '../util/data';
import { useEffect, useState } from 'react';

export default function ProjectCarousel({selectedProject, setSelectedProject}){
    const { t, i18n } = useTranslation();

    const changeLanguage = (lang) => {
      i18n.changeLanguage(lang); // Change the language
    };

    const projects  = ['beulah', 'winticket', 'cms', 'report', 'net',
                       'nhc', 'bet', 'xl', 'whc', 'tqha', 'dark',
                       'kai', 'ebet', 'bat', 'fin', 'sgr', 'ghc',
                       'hpb', 'ruw', 'wlr', 'yon', 'mo',
                       'kno', 'wfs', 'qa', 'md'];

    return <div>
         <div className="selectedProjects">
            <h1 className="header-a">
                {t('selectedprojects')}
            </h1>
            <h2 className="header-b">
                {t('selectedtalk')}
            </h2>
        </div>
        <div className="container-fluid projects">
            <div className="row">
                <div className="col-6">
                    <div className="project-item beulah">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['beulah']['title']}
                        : <span>{projectJsonData['beulah']['year']}</span></h1>
                        <span>{t('beulah')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item winticket">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['winticket']['title']}
                    : <span>{projectJsonData['winticket']['year']}</span></h1>
                    <span>{t('winticket')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item cms">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['cms']['title']}
                        : <span>{projectJsonData['cms']['year']}</span></h1>
                        <span>{t('cms')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item reporting">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['report']['title']}
                    : <span>{projectJsonData['report']['year']}</span></h1>
                    <span>{t('reports')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item networking">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['net']['title']}
                        : <span>{projectJsonData['net']['year']}</span></h1>
                       <span>{t('network')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item nhcqualify">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['nhc']['title']}
                    : <span>{projectJsonData['nhc']['year']}</span></h1>
                   <span>{t('nhc')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item betpad">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['bet']['title']}
                        : <span>{projectJsonData['bet']['year']}</span></h1>
                        <span>{t('betpad')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item xlpharmacy">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['xl']['title']}
                    : <span>{projectJsonData['xl']['year']}</span></h1>
                    <span>{t('xl')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item whchamp">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['whc']['title']}
                        : <span>{projectJsonData['whc']['year']}</span></h1>
                        <span>{t('whc')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item tqha">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['tqha']['title']}
                    : <span>{projectJsonData['tqha']['year']}</span></h1>
                    <span>{t('tqha')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item kairos">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['kai']['title']}
                        : <span>{projectJsonData['kai']['year']}</span></h1>
                        <span>{t('kairos')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item ebet">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['ebet']['title']}
                    : <span>{projectJsonData['ebet']['year']}</span></h1>
                    <span>{t('ebet')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item bat">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['bat']['title']}
                        : <span>{projectJsonData['bat']['year']}</span></h1>
                        <span>{t('e1')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item finger">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['fin']['title']}
                    : <span>{projectJsonData['fin']['year']}</span></h1>
                    <span>{t('e3')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item sgr">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['sgr']['title']}
                        : <span>{projectJsonData['sgr']['year']}</span></h1>
                        <span>{t('e3')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item hp">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['hpb']['title']}
                    : <span>{projectJsonData['hpb']['year']}</span></h1>
                    <span>{t('e4')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item darkhorse">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['dark']['title']}
                        : <span>{projectJsonData['dark']['year']}</span></h1>
                        <span>{t('e5')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item wlr">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['wlr']['title']}
                    : <span>{projectJsonData['wlr']['year']}</span></h1>
                    <span>{t('e6')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item yonkers">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['yon']['title']}
                        : <span>{projectJsonData['yon']['year']}</span></h1>
                        <span>{t('e7')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item ghc">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['ghc']['title']}
                    : <span>{projectJsonData['ghc']['year']}</span></h1>
                    <span>{t('e8')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item raceuwin">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['ruw']['title']}
                        : <span>{projectJsonData['ruw']['year']}</span></h1>
                        <span>{t('e9')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item mutuels">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['mo']['title']}
                    : <span>{projectJsonData['mo']['year']}</span></h1>
                    <span>{t('e10')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item knobbe">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['kno']['title']}
                        : <span>{projectJsonData['kno']['year']}</span></h1>
                        <span>{t('knob')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item wfs">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['wfs']['title']}
                    : <span>{projectJsonData['wfs']['year']}</span></h1>
                    <span>{t('wfs')}</span>
                </div>
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <div className="project-item wek">

                    </div>
                    <div className="project-description">
                        <h1>{projectJsonData['qa']['title']}
                        : <span>{projectJsonData['qa']['year']}</span></h1>
                        <span>{t('auto')}</span>
                    </div>
                </div>
                <div className="col-6">
                <div className="project-item sociedad">

                </div>
                <div className="project-description">
                    <h1>{projectJsonData['md']['title']}
                    : <span>{projectJsonData['md']['year']}</span></h1>
                    <span>{t('md')}</span>
                </div>
                </div>
            </div>
        </div>
        </div>
}