import BreadCrumb from "../common/breadcrumb";
import aboutBanner from "../../assets/img/banner/banner.jpg";
import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import AboutMain from "./about";
import Video from "./video";
import Certification from "./certification";
import Team from "./team";
import FooterOne from "../../layout/footers/footer-one";

const AboutUs = () => {
    return (
        <>
            <SEO pageTitle="About Us" />
            <HeaderTwo />
            <BreadCrumb title="About Us" innerTitle="About Us" bgImage={aboutBanner} />
            <AboutMain />
            <Video />
            <Certification />
            <Team />
            <FooterOne />
        </>
    );
};

export default AboutUs;