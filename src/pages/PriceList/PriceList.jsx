import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./PriceList.scss";

const PriceList = () => {
    const { t } = useTranslation();

    useEffect(() => {
        // Update title depending on which lang we are using
        document.title = t("nav.price_list_title");
    }, [t]);

    const [filter, setFilter] = useState("");

    const inactiveFilterBtn = "filter-btn";
    const activeFilterBtn = "filter-btn active-filter-btn";

    return (
        <section className="price-list">
            <PageTitle
                activeLink={t("nav.home_title")}
                title={t("nav.price_list_title")}
            />
            <div className="filter-btn-wrapper">
                <button
                    className={
                        filter === "" ? activeFilterBtn : inactiveFilterBtn
                    }
                    onClick={(e) => setFilter(e.target.dataset.service)}
                    data-service=""
                >
                    {t("price_data.all_title")}
                </button>
                <button
                    className={
                        filter === "braces"
                            ? activeFilterBtn
                            : inactiveFilterBtn
                    }
                    onClick={(e) => setFilter(e.target.dataset.service)}
                    data-service="braces"
                >
                    {t("price_data.braces_title")}
                </button>
                <button
                    className={
                        filter === "dentistry"
                            ? activeFilterBtn
                            : inactiveFilterBtn
                    }
                    onClick={(e) => setFilter(e.target.dataset.service)}
                    data-service="dentistry"
                >
                    {t("price_data.dentistry_title")}
                </button>
            </div>
            {filter === "" && (
                <div className="price-list__wrapper">
                    <table className="price-list__table">
                        <caption className="price-list__title">
                            {t("price_data.braces_title")}
                        </caption>
                        <tbody>
                            <tr>
                                <td>{t("braces.name_1")}</td>
                                <td>{t("braces.price_1")}</td>
                            </tr>
                        </tbody>
                    </table>
                    <table className="price-list__table">
                        <caption className="price-list__title">
                            {t("price_data.dentistry_title")}
                        </caption>
                        <tbody>
                            <tr>
                                <td>{t("dentistry.name_1")}</td>
                                <td>{t("dentistry.price_1")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {filter === "braces" && (
                <div className="price-list__wrapper">
                    <table className="price-list__table">
                        <caption className="price-list__title">
                            {t("price_data.braces_title")}
                        </caption>
                        <tbody>
                            <tr>
                                <td>{t("braces.name_1")}</td>
                                <td>{t("braces.price_1")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
            {filter === "dentistry" && (
                <div className="price-list__wrapper">
                    <table className="price-list__table">
                        <caption className="price-list__title">
                            {t("price_data.dentistry_title")}
                        </caption>
                        <tbody>
                            <tr>
                                <td>{t("dentistry.name_1")}</td>
                                <td>{t("dentistry.price_1")}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default PriceList;
