import {NextPage} from "next";
import AboutUs from "@/screens/about-us/AboutUs";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AboutUsPage: NextPage = () => {
    return (
        <main>
            <Header/>
            <AboutUs/>
            <Footer/>
        </main>
    )
}

export default AboutUsPage