import Layout from "../../components/Layouts/Layout";
import Section1 from "./Section1";
import "../../styles/HomeStyle.css"
export default function Home() {
    return (
        <>
            <Layout>
                {/* Home section hero banner */}
                <Section1 />
            </Layout>
        </>
    );
}
