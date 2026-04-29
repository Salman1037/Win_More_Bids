import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import portfolio2Banner from "../../../assets/img/banner/banner.jpg";
import FooterOne from "../../../layout/footers/footer-one";
import TwoColumns from "./two-columns";

const PortfolioTowColumns = () => {
    return (
        <>
            <SEO pageTitle="Portfolio 2 Columns" />
            <HeaderTwo />
            <BreadCrumb title="Portfolio 2 Columns" innerTitle="2 Columns" bgImage={portfolio2Banner} />
            <TwoColumns />
            <FooterOne />    
        </>
    );
};

export default PortfolioTowColumns;