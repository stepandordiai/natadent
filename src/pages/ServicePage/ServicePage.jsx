import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ServicePage.scss";

const Service = () => {
    const { t } = useTranslation();

    const servicesData = [
        {
            name: t("service_1"),
            desc: t("service_desc_1"),
            path: "stomatologie",
        },
        {
            name: t("service_2"),
            desc: t("service_desc_2"),
            path: "prevence",
        },
        {
            name: t("service_3"),
            desc: t("service_desc_3"),
            path: "dentální-hygiena",
        },
        {
            name: t("service_4"),
            desc: t("service_desc_4"),
            path: "stomatochirurgie",
        },
        {
            name: t("service_5"),
            desc: t("service_desc_5"),
            path: "kompletní-rekonstrukce-chrupu",
        },
        {
            name: t("service_6"),
            desc: t("service_desc_6"),
            path: "extrakce-zubů-moudrosti",
        },
        {
            name: t("service_7"),
            desc: t("service_desc_7"),
            path: "implantologie",
        },
        {
            name: t("service_8"),
            desc: t("service_desc_8"),
            path: "parodontologie",
        },
        {
            name: t("service_9"),
            desc: t("service_desc_9"),
            path: "endodoncie",
        },
        {
            name: t("service_10"),
            desc: t("service_desc_10"),
            path: "ortodoncie",
        },
        {
            name: t("service_11"),
            desc: t("service_desc_11"),
            path: "analgosedace-a-celková-anestezie",
        },
        {
            name: t("service_12"),
            desc: t("service_desc_12"),
            path: "dětská-stomatologie",
        },
        {
            name: t("service_13"),
            desc: t("service_desc_13"),
            path: "nastřižení-uzdiček-v-ústech-kojenců",
        },
        {
            name: t("service_14"),
            desc: t("service_desc_14"),
            path: "bělení-zubů",
        },
        {
            name: t("service_15"),
            desc: t("service_desc_15"),
            path: "zubní-laboratoř",
        },
    ];

    const { id } = useParams();

    const service = servicesData.filter((service) => {
        return service.path === id;
    });

    useEffect(() => {
        document.title = service[0].name;
    }, [t, service]);

    return (
        <section className="service-page">
            <PageTitle
                title={service[0].name}
                previousPath={t("services_title")}
            />
            <p className="coming-soon">{t("coming_soon")}</p>
        </section>
    );
};

export default Service;
