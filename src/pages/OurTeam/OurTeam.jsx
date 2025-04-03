import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import photo1 from "/assets/team/1.jpg";
import photo2 from "/assets/team/2.jpg";
import photo3 from "/assets/team/3.jpg";
import photo4 from "/assets/team/4.jpg";
import photo5 from "/assets/team/5.jpg";
import "./OurTeam.scss";

const OurTeam = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `${t("our_team_title")} | Prozubik`;
    }, [t]);

    return (
        <section className="our-team">
            <PageTitle title={t("our_team_title")} />
            <div className="our-team-wrapper">
                <div className="our-team__grid">
                    <div className="our-team__card">
                        <img src={photo1} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="our-team__card">
                        <img src={photo2} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="our-team__card">
                        <img src={photo3} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="our-team__card">
                        <img src={photo4} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                    <div className="our-team__card">
                        <img src={photo5} alt="Photo" />
                        <div>
                            <p>Jméno</p>
                            <p>Pozice</p>
                            <p>+420 722 001 016</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurTeam;
