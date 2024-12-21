import PropTypes from "prop-types";
// import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <div>{children}</div>
            {/* <Footer /> */}
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.node, // Xác định kiểu của children
};
