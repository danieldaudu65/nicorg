"use client"

import Footer from "@/components/Footer";
import BecomeAMember from "@/components/home/BecomeAMember";
import Card from "@/components/home/Card";
import Homepage from "@/components/home/Homepage";
import Pray from "@/components/home/Pray";
import Programs from "@/components/home/Programs";
import Testimonials from "@/components/home/Testimomials";
import Welcome from "@/components/home/Welcome";
import Navbar from "@/components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Navbar />
       <Homepage />
       <Welcome />
       <Programs />
       <Card />
       <BecomeAMember />
       <Testimonials />
       <Pray />
       <Footer />
    </div>
  );
}
