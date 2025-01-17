import React from 'react';
import {
  Box,
  Button,
  chakra,
  Heading,
  SimpleGrid,
  Image,
} from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
export const About = () => {
  const MotionGrid = motion(SimpleGrid);
  const MotionButton = motion(Button);
  const MotionHeading = motion(Heading);
  const { ref, inView } = useInView({ threshold: 0.1 }); //variable of useInView declaration
  const animation = useAnimation();

  useEffect(() => {
    console.log('el hook ye5dem', inView);
    if (inView) {
      animation.start({});
    }

    if (!inView) {
      animation.start({
        x: '-100vw',
      });
    }
  }, [animation, inView]);

  return (
    <Box ref={ref} maxW={'7xl'} px={8} mx="auto" id="about">
      <MotionHeading
        as="h1"
        size="3xl"
        fontWeight="bold"
        maxW="48rem"
        mx="auto"
        lineHeight="1.2"
        letterSpacing="tight"
        textAlign="center"
        py={10}
      >
        About <span>us</span>
      </MotionHeading>
      <MotionGrid
        alignItems="start"
        columns={{ base: 1, md: 2 }}
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
      >
        <Box mt={'12vh'}>
          <chakra.h2
            mb={4}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            textAlign={{ base: 'center', md: 'left' }}
            color="gray.900"
            _dark={{ color: 'gray.400' }}
            lineHeight={{ md: 'shorter' }}
          >
            Investment made easy.
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: 'center', sm: 'left' }}
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ md: 'lg' }}
          >
            Indigenes is an investment platform that helps investors find and
            reach out to projects across Tunisia, so you can invest with ease
            and support the noble cause of aiding African development at the
            same time.
          </chakra.p>
        </Box>
        <Box
          // ! this is the picture number 1
          w="full"
          h="full"
        >
          <Image
            src="https://media.istockphoto.com/videos/farmer-shaking-hands-with-an-executive-video-id647270542?s=640x640"
            objectFit="cover"
            borderRadius={'2xl'}
          ></Image>
        </Box>
      </MotionGrid>

      <MotionGrid
        alignItems="center"
        columns={{ base: 1, md: 2 }}
        flexDirection="column-reverse"
        mb={24}
        spacingY={{ base: 10, md: 32 }}
        spacingX={{ base: 10, md: 24 }}
        // initial={{ opacity: 0, x: '-150vw', scale: 0.5 }} //second box animation
        // animate={{ opacity: 1, x: 0, scale: 1 }} //foufou kesa7 #t3alm ya balti
        // transition={{ type: 'spring', duration: 1, bounce: 0.3 }}
      >
        <Box order={{ base: 'initial', md: 2 }}>
          <chakra.h2
            mb={4}
            fontSize={{ base: '2xl', md: '4xl' }}
            fontWeight="bold"
            letterSpacing="tight"
            textAlign={{ base: 'center', md: 'left' }}
            color="gray.900"
            _dark={{ color: 'gray.400' }}
            lineHeight={{ md: 'shorter' }}
          >
            Better technology, less risk.
          </chakra.h2>
          <chakra.p
            mb={5}
            textAlign={{ base: 'center', sm: 'left' }}
            color="gray.600"
            _dark={{ color: 'gray.400' }}
            fontSize={{ md: 'lg' }}
          >
            We want to be as straightforward and transparent as possible, so our
            fees and rates are clearly stated upfront, we never charge any
            hidden fees or commissions. You don't need to worry about anything
            but investing.
          </chakra.p>
        </Box>
        <Box
          // ! this is the picture number 2
          w="full"
          h="full"
        >
          <Image
            src="https://chinaobservers.eu/wp-content/uploads/2022/03/germany.jpg"
            objectFit="cover"
            borderRadius={'2xl'}
          ></Image>
        </Box>
      </MotionGrid>
    </Box>
  );
};
