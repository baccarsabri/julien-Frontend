import './App.css';

import Landing from "./components/landing"
import AppSection from './components/appSection';
import Discount from "./components/discount"
import FeaturedIn from './components/featuredIn';
import Footer from './components/footer';
import MeetNurse from './components/meetNurse';
import MemberBenefits from './components/member_benefits';
import Socials from './components/socials';
import Testimonials from './components/testimonials';
import WhatIs from './components/what_is';
import ZoomMeetings from './components/zoomMeetings';

const countDownDate = "Jan 30, 2024 15:37:25"

function App() {
  return (
    <div>
      <Landing />

      <Discount countDownDate={countDownDate} />

      <MemberBenefits />
      <WhatIs />
      <Socials />
      <AppSection />
      <ZoomMeetings />
      <MeetNurse />
      <FeaturedIn />
      <Testimonials />

      <Footer />
    </div>
  );
}

export default App;
