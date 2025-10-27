// import Footer from "@/components/Footer";
// import Section1 from "@/components/home/Section1";
// import Section2 from "@/components/home/Section2";
// import Section3 from "@/components/home/Section3";
// import Section4 from "@/components/home/Section4";
// import Section5 from "@/components/home/Section5";
// import Section6 from "@/components/home/Section6";
// import Section7 from "@/components/home/Section7";
// import Section8 from "@/components/home/Section8";
// import Navbar from "@/components/Navbar";
// import React from "react";

// function page() {
//   return (
//     <div>
//       <Navbar />
//       <Section1 />
//       <Section2 />
//       <Section3 />
//       <Section4 />
//       <Section5 />
//       <Section6 />
//       <Section7 />
//       <Section8 />
//       <Footer />
//     </div>
//   );
// }

// export default page;












"use client";
import React, { useRef } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Section4 from "@/components/home/Section4";
import Section5 from "@/components/home/Section5";
import Section6 from "@/components/home/Section6";
import Section7 from "@/components/home/Section7";
import Section8 from "@/components/home/Section8";

function Page() {
  const section4Ref = useRef(null);
  const section8Ref = useRef(null);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <Navbar />
      <Section1
        onExploreClick={() => scrollToSection(section4Ref)}
        onContactClick={() => scrollToSection(section8Ref)}
      />
      <Section2 />
      <Section3 />
      <div ref={section4Ref}>
        <Section4 />
      </div>
      <Section5 />
      <Section6 />
      <Section7 />
      <div ref={section8Ref}>
        <Section8 />
      </div>
      <Footer />
    </div>
  );
}

export default Page;
