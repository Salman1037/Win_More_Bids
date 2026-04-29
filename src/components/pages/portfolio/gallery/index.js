import SEO from "../../../data/seo";
import BreadCrumb from "../../common/breadcrumb";
import galleryBanner from "../../../assets/img/banner/banner.jpg";
import HeaderTwo from "../../../layout/headers/header-two";
import PortfolioFilter from "./portfolio-filter";
import FooterOne from "../../../layout/footers/footer-one";

const PortfolioFilterPage = () => {
    return (
        <>
            <SEO pageTitle="Filterable Gallery" />
            <HeaderTwo />
            <BreadCrumb title="Filterable Gallery" innerTitle="Filterable Gallery" bgImage={galleryBanner} />
            <PortfolioFilter />
            <FooterOne />
        </>
    );
};

export default PortfolioFilterPage;