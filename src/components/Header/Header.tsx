'use client';

import { Navbar } from './Nav/Navbar';
import { MdMenu, MdClose } from '@/icons';
import useHeader from './Hook/useHeader';
import { useState } from 'react';
import Image from 'next/image';
import { StyleHeader } from './StyleHeader';
import {
  Badge,
  Box,
  Button,
  ButtonLink,
  StyleLink,
  StyleTypography,
} from '@/components';

export function Header() {
  const { showMenu, toggleMenu } = useHeader();
  const [isConnected, setIsConnected] = useState(true);

  return (
    <StyleHeader>
      <StyleTypography tag="h2" size="sm" color="dark">
        <Badge variant="transparent">+</Badge>Flavor
      </StyleTypography>

      <Navbar className={showMenu ? 'active' : ''}>
        <StyleLink variant="normal" href="#home">
          Home
        </StyleLink>
        <StyleLink variant="normal" href="">
          Review
        </StyleLink>
        <StyleLink variant="normal" href="">
          About Us
        </StyleLink>
        <StyleLink variant="normal" href="">
          Contact Us
        </StyleLink>
      </Navbar>

      <Button
        variant="solid"
        size="sm"
        className="btnMenu"
        onClick={toggleMenu}
      >
        {showMenu ? <MdClose /> : <MdMenu />}
      </Button>

      {isConnected ? (
        <Box className="buttons">
          <ButtonLink size="lg" variant="outline" href="/signin" target="_self">
            Sign In
          </ButtonLink>

          <ButtonLink size="lg" variant="solid" href="/signup" target="_self">
            Sign Up
          </ButtonLink>
        </Box>
      ) : (
        <Box className="profilePicture">
          <StyleLink variant="standard" href="">
            <Image
              src="/img/avatar-02.jpg"
              alt="Profile picture"
              width={60}
              height={60}
            />
          </StyleLink>
        </Box>
      )}
    </StyleHeader>
  );
}
