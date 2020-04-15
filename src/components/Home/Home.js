import React, { useState } from 'react';
import SectionOne from './SectionOne/SectionOne';
import SectionTwo from './SectionTwo/SectionTwo';
import SectionThree from './sectionThree/SectionThree';
import Section4 from './Section4/SectionFour';
import Section5 from './Section5/Section5';
import Section6 from './Section6/Section6';
import Section7 from './Section7/Section7';
export default function Home() {
  
    return (
        <div>
            <SectionOne />
            <SectionTwo />
            <SectionThree />
            <Section4 />
            <Section5/>
            <Section6 />
            <Section7 />
        </div>
    )
}