import SEO from "../../../data/seo";
import HeaderTwo from "../../../layout/headers/header-two";
import BreadCrumb from "../../common/breadcrumb";
import blogBanner from "../../../assets/img/banner/blog.webp";
import BlogGridMain from "./blog-grid";
import FooterOne from "../../../layout/footers/footer-one";


const BlogGrid = () => {
    return (
        <>
            <SEO pageTitle="Blog Grid" />
            <HeaderTwo />
            <BreadCrumb title="Blog Grid" innerTitle="Blog Grid" bgImage={blogBanner} />
            <BlogGridMain />
            <FooterOne />
        </>
    );
};

export default BlogGrid;