import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import blogStandardBanner from "../../../assets/img/banner/blog.webp";
import BlogStandardMain from "./blog-standard";
import FooterOne from "../../../layout/footers/footer-one";


const BlogStandardPage = () => {
    return (
        <>
            <SEO pageTitle="Blog Standard" />
            <HeaderTwo />
            <BreadCrumb title="Blog Standard" innerTitle="Blog Standard" bgImage={blogStandardBanner} />
            <BlogStandardMain />
            <FooterOne />
        </>
    );
};

export default BlogStandardPage;