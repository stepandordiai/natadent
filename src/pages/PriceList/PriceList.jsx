import { useEffect } from "react";
import "./PriceList.scss";
import PageTitle from "../../components/PageTitle/PageTitle";

const PriceList = () => {
    useEffect(() => {
        document.title = "Price list";
    }, []);

    return (
        <>
            <PageTitle activeLink="Home" title="Price list" />
            <table className="price-list__table">
                <tbody>
                    <tr>
                        <td>Oral Hygienist</td>
                        <td>2.070 CZK</td>
                        <td>Helewqlo</td>
                    </tr>
                    <tr>
                        <td>Teeth Cleaning</td>
                        <td>1.250 CZK</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>Care Advice</td>
                        <td>from 900 CZK</td>
                        <td>Heasdsallo</td>
                    </tr>
                    <tr>
                        <td>Dental Care</td>
                        <td>2.160 CZK</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>Tooth Protection</td>
                        <td>550 CZK</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>Whitening Teeth</td>
                        <td>9.100 CZK</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>Dental Implants</td>
                        <td>550 CZK</td>
                        <td>Hello</td>
                    </tr>
                    <tr>
                        <td>Oral Surgery</td>
                        <td>260 CZK</td>
                        <td>Hello</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
};

export default PriceList;
