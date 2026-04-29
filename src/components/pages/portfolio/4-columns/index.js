import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import portfolio4Banner from "../../../assets/img/banner/banner.jpg";
import FooterOne from "../../../layout/footers/footer-one";
import FourColumns from "./four-columns";

const PortfolioFourColumns = () => {
    return (
        <>
            <SEO pageTitle="Portfolio 4 Columns" />
            <HeaderTwo />
            <BreadCrumb title="Portfolio 4 Columns" innerTitle="4 Columns" bgImage={portfolio4Banner} />
            <FourColumns />
            <FooterOne />    
        </>
    );
};

export default PortfolioFourColumns;