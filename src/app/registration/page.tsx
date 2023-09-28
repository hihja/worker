import {NextPage} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Registration from "@/screens/registration/Registration";

const RegistrationPage: NextPage = () => {
    return (
        <main>
            <Header/>
            <Registration/>
            <Footer/>
        </main>
    )
}

export default RegistrationPage