import { NavLink } from "react-router-dom";
import nextIcon from "./../../assets/icons/next.png";
import "./PageTitle.scss";

const PageTitle = ({ activeLink, link, title }) => {
    return (
        <div className="page-title">
            <div className="divider"></div>
            <div className="links-container">
                <NavLink className="page-title__link" to="/">
                    {activeLink} <img width={20} src={nextIcon} alt="" />
                </NavLink>
                <p>
                    {link} <img width={20} src={nextIcon} alt="" />
                </p>
            </div>
            <h2 className="page-title__title">{title}</h2>
            <div className="divider"></div>
        </div>
    );
};

export default PageTitle;
