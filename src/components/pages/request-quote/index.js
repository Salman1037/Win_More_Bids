import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import requestQuoteBanner from '../../assets/img/banner/banner.jpg';
import RequestQuoteMain from "./request-quote";
import FooterOne from "../../layout/footers/footer-one";

const RequestQuotePage = () => {
    return (
        <>
            <SEO pageTitle="Request an Estimate" />
            <HeaderTwo />
            <BreadCrumb title="Request an Estimate" innerTitle="Request an Estimate" bgImage={requestQuoteBanner} />
            <RequestQuoteMain />
            <FooterOne />
        </>
    );
};

export default RequestQuotePage;