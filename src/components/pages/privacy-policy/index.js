import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from '../common/breadcrumb';
import PrivacyPolicyMain from './privacy-policy';
import FooterOne from "../../layout/footers/footer-one";

const PrivacyPolicyPage = () => {
    return (
        <>
            <SEO pageTitle="Privacy Policy" />
            <HeaderTwo />
            <BreadCrumb title="Privacy Policy" innerTitle="Privacy Policy" />
            <PrivacyPolicyMain />
            <FooterOne />
        </>
    );
};

export default PrivacyPolicyPage;
