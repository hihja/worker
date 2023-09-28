import {NextPage} from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JobPosting from "@/screens/job-posting/JobPosting";

const JobPostingPage: NextPage = () => {
    return (
        <main>
            <Header/>
            <JobPosting/>
            <Footer/>
        </main>
    )
}

export default JobPostingPage