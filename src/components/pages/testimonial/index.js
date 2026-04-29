import SEO from "../../data/seo";
import HeaderTwo from "../../layout/headers/header-two";
import BreadCrumb from "../common/breadcrumb";
import testimonialBanner from "../../assets/img/banner/banner.jpg";
import TestimonialMain from "./testimonial";
import FooterOne from "../../layout/footers/footer-one";

const Testimonial = () => {
    return (
        <>
            <SEO pageTitle='Testimonials' />
            <HeaderTwo />
            <BreadCrumb title='Testimonials' innerTitle='Testimonials' bgImage={testimonialBanner} />
            <TestimonialMain />
            <FooterOne />
        </>
    );
};

export default Testimonial;