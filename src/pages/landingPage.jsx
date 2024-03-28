import Landing from "../components/landing"
import AppSection from '../components/appSection';
import Discount from "../components/discount"
import FeaturedIn from '../components/featuredIn';
import Footer from '../components/footer';
import MeetNurse from '../components/meetNurse';
import MemberBenefits from '../components/member_benefits';
import Socials from '../components/socials';
import Testimonials from '../components/testimonials';
import WhatIs from '../components/what_is';
import ZoomMeetings from '../components/zoomMeetings';
import SignUpPopup from "../components/signupPopup";


const countDownDate = "Mar 20, 2024 15:37:25"

const LandingPage = () => {

    return (
        <>
            <SignUpPopup />

            <main>
                <Landing />

                <Discount countDownDate={countDownDate} />

                <MemberBenefits />
                <WhatIs verify={false} />
                <Socials />
                <AppSection verify={false} />
                <ZoomMeetings verify={false} />
                <MeetNurse verify={false} />
                <FeaturedIn />
                <Testimonials verify={false} />
            </main>

            <Footer />
        </>
    );
}

export default LandingPage;