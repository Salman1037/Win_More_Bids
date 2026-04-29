import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import pricingBanner from "../../assets/img/banner/banner.jpg";
import PricingPlansMain from "./pricing-plans";
import FooterOne from "../../layout/footers/footer-one";

const PricingPages = () => {
    return (
        <>
            <SEO pageTitle="Price Plan" />
            <HeaderTwo />
            <BreadCrumb title="Price Plan" innerTitle="Price Plan" bgImage={pricingBanner} />
            <PricingPlansMain />
            <FooterOne />
        </>
    );
};

export default PricingPages;