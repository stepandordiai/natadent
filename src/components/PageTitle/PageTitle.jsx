import { NavLink } from "react-router-dom";
import CustomDivider from "../CustomDivider/CustomDivider";
import nextIcon from "./../../assets/icons/next.png";
import "./PageTitle.scss";

const PageTitle = ({ activeLink, title }) => {
    return (
        <div className="page-title">
            <CustomDivider />
            <div className="links-container">
                <NavLink className="page-title__link" to="/">
                    {activeLink}
                </NavLink>
                <span>/</span>
                <p>{title}</p>
                <span>/</span>
            </div>
            <h2 className="page-title__title">{title}</h2>
            <CustomDivider />
        </div>
    );
};

export default PageTitle;
