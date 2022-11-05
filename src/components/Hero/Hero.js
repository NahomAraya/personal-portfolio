import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Nahom Araya, <br />
          Software Developer
        </SectionTitle>
        <SectionText>
        Seeking a beginner role to enhance and explore my technical knowledge. I hold a B.Tech degree from Addis Ababa University and have a few
projects under my belt. I have a proffesional experience in Frappe Framework and ERPNEXT.  
        </SectionText>
        
      </LeftSection>
    </Section>
  </>
);

export default Hero;