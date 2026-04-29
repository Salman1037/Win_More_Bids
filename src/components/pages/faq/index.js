import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import faqBanner from "../../assets/img/banner/service-3.png";
import FaqArea from "./faq"; 
import FooterOne from "../../layout/footers/footer-one";

const FaqPage = () => {
    return (
        <> 
            <SEO pageTitle="FAQs" />
            <HeaderTwo />
            <BreadCrumb title="FAQs" innerTitle="FAQs" bgImage={faqBanner} />
            <FaqArea />
            <FooterOne />
        </>
    );
};

export default FaqPage;