import { NavLink } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useTranslation } from "react-i18next";
import "./PageTitle.scss";

const PageTitle = ({ title, previousPath }) => {
    const { t } = useTranslation();

    return (
        <div className="page-title">
            <div className="page-title__links">
                <NavLink className="page-title__link" to="/">
                    {t("home_title")}
                </NavLink>
                <span>/</span>
                {previousPath && (
                    <>
                        <HashLink className="page-title__link" to="/#services">
                            {previousPath}
                        </HashLink>
                        <span>/</span>
                    </>
                )}
                <span>{title}</span>
            </div>
            <h1 className="page-title__title">{title}</h1>
        </div>
    );
};

export default PageTitle;
