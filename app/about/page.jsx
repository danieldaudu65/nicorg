"use client"

import React from 'react';
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import OurMandate from '@/components/WhoWe/OurMandate';
import Mission from '@/components/WhoWe/Mission';
import Values from '@/components/WhoWe/Values';
import Declearation from '@/components/WhoWe/Declearation';
import StatementOfFaith from '@/components/WhoWe/StatementOfFaith';
import Leadership from '@/components/WhoWe/Leadership';
import BMis from '@/components/WhoWe/BMis';
import OurStory from '@/components/WhoWe/OurStory';
import StoryGalary from '@/components/WhoWe/StoryGalary';

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-20'>
        {/* <OurMandate /> */}
        <BMis />
        <Mission />
        {/* <Values /> */}
        <StoryGalary />
        <OurStory />
        <StatementOfFaith />
        <Declearation />
        <Leadership />
        <Footer />
      </div>
    </div>
  );
}



export default page;
