import Landing from "../components/landing"
import AppSection from '../components/appSection';
import Discount from "../components/discount"
import FeaturedIn from '../components/featuredIn';
import MeetNurse from '../components/meetNurse';
import Socials from '../components/socials';
import Testimonials from '../components/testimonials';
import WhatIs from '../components/what_is';
import ZoomMeetings from '../components/zoomMeetings';
import MembershipSection from "../components/membershipSection";
import InfoFloat from "../components/infoFloat";
import { useEffect } from "react";
import SignUpPopup from "../components/signupPopup";
import React, { useRef } from 'react';


const countDownDate = "Mar 20, 2024 15:37:25"

const SubscriptionPage = () => {
    useEffect(() => {
        document.querySelector("body").style.overflow = "auto"
    }, []);

    const ScrolToMembership = () => {
        // Scroll to the element
        window.scrollTo({
            top: 750,
            left: 0,
            behavior: 'smooth'
        });

    };

    return (
        <>
            <SignUpPopup />

            <main>
                <InfoFloat
                    text="Step 2: Choose your plan below"
                />

                <Landing />
                <MembershipSection />

                <Discount countDownDate={countDownDate} />

                <WhatIs handleClick={ScrolToMembership} verify={true} />
                <Socials />
                <AppSection handleClick={ScrolToMembership} verify={true} />
                <ZoomMeetings handleClick={ScrolToMembership} verify={true} />
                <MeetNurse handleClick={ScrolToMembership} verify={true} />
                <FeaturedIn />
                <Testimonials handleClick={ScrolToMembership} verify={true} />
            </main>
        </>
    );
}

export default SubscriptionPage;