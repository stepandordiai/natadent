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
                    {activeLink} <img width={20} src={nextIcon} alt="Next" />
                </NavLink>
                <p>
                    {title} <img width={20} src={nextIcon} alt="Next" />
                </p>
            </div>
            <h2 className="page-title__title">{title}</h2>
            <CustomDivider />
        </div>
    );
};

export default PageTitle;
