import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import privacyBanner from '../../assets/img/banner/banner.jpg';
import PrivacyPolicyMain from './privacy-policy';
import FooterOne from "../../layout/footers/footer-one";

const PrivacyPolicyPage = () => {
    return (
        <>
            <SEO pageTitle="Privacy Policy" />
            <HeaderTwo />
            <BreadCrumb title="Privacy Policy" innerTitle="Privacy Policy" bgImage={privacyBanner} />
            <PrivacyPolicyMain />
            <FooterOne />
        </>
    );
};

export default PrivacyPolicyPage;
