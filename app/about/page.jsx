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

const page = () => {
  return (
    <div>
      <Navbar />
      <div className='pt-20'>
        <OurMandate />

        <Mission />
        <Values />
        <Declearation />
        <StatementOfFaith />
        <Leadership />
        <Footer />
      </div>
    </div>
  );
}



export default page;
