import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./Services.scss";

const Services = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("services_title");
    }, [t]);

    useEffect(() => {
        document.querySelectorAll(".js-service").forEach((el) => {
            document.addEventListener("scroll", () => {
                const serviceRect = el.getBoundingClientRect().top;

                if (serviceRect < window.innerHeight - 100) {
                    el.classList.add("service--active");
                } else {
                    el.classList.remove("service--active");
                }
            });
            const serviceRect = el.getBoundingClientRect().top;

            if (serviceRect < window.innerHeight - 100) {
                el.classList.add("service--active");
            } else {
                el.classList.remove("service--active");
            }
        });
    }, []);

    return (
        <section className="services">
            <PageTitle title={t("services_title")} />
            <div className="services-grid">
                <div className="service js-service">
                    <img width={90} src={toothIcon1} alt="" />
                    <div>
                        <h4>{t("service_1")}</h4>
                        <p>{t("service_desc_1")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon2} alt="" />
                    <div>
                        <h4>{t("service_2")}</h4>
                        <p>{t("service_desc_2")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon3} alt="" />
                    <div>
                        <h4>{t("service_3")}</h4>
                        <p>{t("service_desc_3")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon4} alt="" />
                    <div>
                        <h4>{t("service_4")}</h4>
                        <p>{t("service_desc_4")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon5} alt="" />
                    <div>
                        <h4>{t("service_5")}</h4>
                        <p>{t("service_desc_5")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon6} alt="" />
                    <div>
                        <h4>{t("service_6")}</h4>
                        <p>{t("service_desc_6")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon7} alt="" />
                    <div>
                        <h4>{t("service_7")}</h4>
                        <p>{t("service_desc_7")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon8} alt="" />
                    <div>
                        <h4>{t("service_8")}</h4>
                        <p>{t("service_desc_8")}</p>
                    </div>
                </div>
                <div className="service js-service">
                    <img width={90} src={toothIcon8} alt="" />
                    <div>
                        <h4>{t("service_9")}</h4>
                        <p>{t("service_desc_9")}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
