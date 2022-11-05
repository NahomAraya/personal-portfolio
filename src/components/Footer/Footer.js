import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillMail, AiFillPhone } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="tel:314-343-3432">Yodahe Zemichael</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="+251 91 145 1088">
          +251 91 145 1088
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Contact</LinkTitle>
          <LinkItem href="tel:314-343-3432">Bereker G.Hiwot</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="+251 91 145 1088">
          +251 91 1695831
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Built with NextJS</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="github.com/NahomAraya">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="email:nahomaraya8@gmail.com">
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="tel:+251927710686">
            <AiFillPhone size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
