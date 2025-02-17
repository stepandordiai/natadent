import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import "./PageTitle.scss";

const PageTitle = ({ title }) => {
    const { t } = useTranslation();

    return (
        <div className="page-title">
            <div className="page-title__links">
                <NavLink className="page-title__link" to="/">
                    {t("home_title")}
                </NavLink>
                <span>/</span>
                <p>{title}</p>
                <span>/</span>
            </div>
            <h2 className="page-title__title">{title}</h2>
        </div>
    );
};

export default PageTitle;
