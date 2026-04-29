import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import termsBanner from '../../assets/img/banner/banner.jpg';
import TermsMain from './terms-and-conditions';
import FooterOne from "../../layout/footers/footer-one";

const TermsPage = () => {
    return (
        <>
            <SEO pageTitle="Terms & Conditions" />
            <HeaderTwo />
            <BreadCrumb title="Terms & Conditions" innerTitle="Terms & Conditions" bgImage={termsBanner} />
            <TermsMain />
            <FooterOne />
        </>
    );
};

export default TermsPage;
