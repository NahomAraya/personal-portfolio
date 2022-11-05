import Link from 'next/link';
import { React, useState, Fragment, useEffect} from 'react';
import { AiFillGithub,  AiFillMail, AiFillPhone } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';


const Header = () =>  {
  const [colorChange, setColorchange] = useState(false);
  const changeNavbarColor = () =>{
     if(window.scrollY >= 80){
       setColorchange(true);
     }
     else{
       setColorchange(false);
     }
  };
  useEffect(() => {
    // window is accessible here.
    console.log("window.innerHeight", window.innerHeight);
    window.addEventListener('scroll', changeNavbarColor);
  }, [])
 
  return(
  <Container className={colorChange ? 'navbar colorChange' : 'navbar'}>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Nahom Araya</span>
        </a>
      </Link>
    </Div1>
    <Div2>
        
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>  
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>   
    </Div2>
      <Div3>
      <SocialIcons href="github.com/NahomAraya">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="email:nahomaraya8@gmail.com">
            <AiFillMail size="3rem" />
          </SocialIcons>
          <SocialIcons href="tel:+251927710686">
            <AiFillPhone size="3rem" />
          </SocialIcons>
      </Div3>
    </Container>
); }

export default Header;
