import { useEffect, useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import priceData from "./priceData";
import "./PriceList.scss";

const PriceList = () => {
    useEffect(() => {
        document.title = "Ceník";
    }, []);

    const [filter, setFilter] = useState("");

    const inactiveFilterBtn = "inactive-filter-btn";
    const activeFilterBtn = "inactive-filter-btn active-filter-btn";

    return (
        <section className="price-list">
            <PageTitle activeLink="Úvod" title="Ceník" />
            <div className="filter-btn-wrapper">
                <button
                    className={
                        filter === "" ? activeFilterBtn : inactiveFilterBtn
                    }
                    onClick={(e) => setFilter(e.target.dataset.service)}
                    data-service=""
                >
                    All
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
                    Braces
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
                    Dentistry
                </button>
            </div>
            {filter === "" && (
                <div className="price-list__wrapper">
                    <p className="price-list__title">Braces</p>
                    <table className="price-list__table">
                        <tbody>
                            {priceData
                                .filter((el) => {
                                    return el.service === "braces";
                                })
                                .map((el, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{el.name}</td>
                                            <td>{el.price}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                    <p className="price-list__title">Dentistry</p>
                    <table className="price-list__table">
                        <tbody>
                            {priceData
                                .filter((el) => {
                                    return el.service === "dentistry";
                                })
                                .map((el, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{el.name}</td>
                                            <td>{el.price}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            )}
            {filter === "braces" && (
                <div className="price-list__wrapper">
                    <p className="price-list__title">Braces</p>
                    <table className="price-list__table">
                        <tbody>
                            {priceData
                                .filter((el) => {
                                    return el.service === "braces";
                                })
                                .map((el, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{el.name}</td>
                                            <td>{el.price}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            )}
            {filter === "dentistry" && (
                <div className="price-list__wrapper">
                    <p className="price-list__title">Dentistry</p>
                    <table className="price-list__table">
                        <tbody>
                            {priceData
                                .filter((el) => {
                                    return el.service === "dentistry";
                                })
                                .map((el, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{el.name}</td>
                                            <td>{el.price}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            )}
        </section>
    );
};

export default PriceList;
