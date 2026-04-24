import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import TermsMain from './terms-and-conditions';
import FooterOne from "../../layout/footers/footer-one";

const TermsPage = () => {
    return (
        <>
            <SEO pageTitle="Terms & Conditions" />
            <HeaderTwo />
            <BreadCrumb title="Terms & Conditions" innerTitle="Terms & Conditions" />
            <TermsMain />
            <FooterOne />
        </>
    );
};

export default TermsPage;
