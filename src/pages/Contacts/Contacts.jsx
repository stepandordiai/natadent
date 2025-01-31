import PageTitle from "../../components/PageTitle/PageTitle";
import "./Contacts.scss";

const FindUs = () => {
    return (
        <section className="contacts">
            <PageTitle activeLink="Home" link="Contacts" title="Contacts" />
            <iframe
                className="contacts__google-map"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5126.647298667424!2d15.214303!3d50.024031!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c153bee9daf87%3A0xc91ccf8d204d4cb!2sPod%20Hroby%20271%2F271%2C%20280%2002%20Kol%C3%ADn%20IV!5e0!3m2!1scs!2scz!4v1738164855741!5m2!1scs!2scz"
                loading="lazy"
            ></iframe>
        </section>
    );
};

export default FindUs;
