import {
  Box,
  Button,
  Center,
  Flex,
  Portal,
  SimpleGrid,
  useBoolean,
  useFocusOnShow,
  VStack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import * as React from 'react'
import FocusLock from 'react-focus-lock'
import {
  HiBookOpen,
  HiCloudDownload,
  HiCurrencyDollar,
  HiOutlineMenu,
  HiOutlineX,
  HiQuestionMarkCircle,
} from 'react-icons/hi'
import { RemoveScroll } from 'react-remove-scroll'
import { Logo } from './Logo'
import { NavLink } from './NavLink'
import {ColorModeSwitcher} from '../../ColorModeSwitcher'
import { Link } from 'react-router-dom'

const variants = {
  show: {
    display: 'revert',
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: 'easeOut',
    },
  },
  hide: {
    opacity: 0,
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: 'easeIn',
    },
    transitionEnd: {
      display: 'none',
    },
  },
}

const Backdrop = ({ show }) => (
  <Portal>
    <motion.div
      initial={false}
      animate={show ? 'show' : 'hide'}
      transition={{
        duration: 0.1,
      }}
      variants={{
        show: {
          opacity: 1,
          display: 'revert',
        },
        hide: {
          opacity: 0,
          transitionEnd: {
            display: 'none',
          },
        },
      }}
      style={{
        width: '100%',
        height: '100vh',
        position: 'absolute',
        background: 'rgba(0,0,0,0.2)',
        inset: 0,
      }}
    />
  </Portal>
)

const Transition = (props) => {
  const { in: inProp, ...rest } = props
  return (
    <motion.div
      {...rest}
      initial={false}
      variants={variants}
      animate={inProp ? 'show' : 'hide'}
      style={{
        transformOrigin: 'top right',
        position: 'absolute',
        width: 'calc(100% - 32px)',
        top: '24px',
        left: '16px',
        margin: '0 auto',
        zIndex: 1,
      }}
    />
  )
}

export const MobileNav = () => {
  const [show, { toggle, off }] = useBoolean()
  const ref = React.useRef(null)
  useFocusOnShow(ref, {
    visible: show,
    shouldFocus: true,
  })
  return (
    <>
      <Box
        as="button"
        type="button"
        p="1"
        fontSize="2xl"
        color="blackAlpha.700"
        _dark={{color: "white"}}
        onClick={toggle}
        display={{
          base: 'block',
          lg: 'none',
        }}
      >
        <HiOutlineMenu />
      </Box>

      <Transition in={show}>
        <RemoveScroll enabled={show}>
          <Backdrop show={show} />
        </RemoveScroll>
        <FocusLock disabled={!show} returnFocus>
          <Box
            bg={mode('white', 'gray.700')}
            shadow="lg"
            rounded="lg"
            ref={ref}
            tabIndex={0}
            outline={0}
          >
            <Box pt="5" pb="6" px="5">
              <Flex justify="space-between" align="center">
                <Logo h="6" iconColor="yellow.400" />
                <Box mr="-2" mt="-2">
                  <Center
                    as="button"
                    type="button"
                    onClick={off}
                    rounded="base"
                    p="1"
                    color={mode('gray.600', 'gray.400')}
                    _hover={{
                      bg: mode('gray.100', 'gray.600'),
                    }}
                  >
                    <Box srOnly>Close menu</Box>
                    <HiOutlineX aria-hidden fontSize="1.5rem" />
                  </Center>
                </Box>
              </Flex>
              <SimpleGrid
                as="nav"
                gap="6"
                mt="8"
                columns={{
                  base: 1,
                  sm: 2,
                }}
              >
                <NavLink.Mobile icon={HiCloudDownload}>About</NavLink.Mobile>
                <NavLink.Mobile icon={HiCurrencyDollar}>Features</NavLink.Mobile>
                <NavLink.Mobile icon={HiBookOpen}>Pricing</NavLink.Mobile>
                <NavLink.Mobile icon={HiQuestionMarkCircle}>Contact us</NavLink.Mobile>
                 <ColorModeSwitcher/>
              </SimpleGrid>
              <VStack mt="8" spacing="4">
                 <Link to='/signin'><Button w="full" colorScheme="yellow" onClick={CloseEvent}>
               Sign in
                </Button></Link> 
                
                <Box textAlign="center" fontWeight="medium">
                  Don't have an account?{' '}
                  <Link to='/signup'> <Box as="a" color={mode('yellow.400', 'yellow.400')} >
                    Sign up
                  </Box></Link>
                 
                </Box>
              </VStack>
            </Box>
          </Box>
        </FocusLock>
      </Transition>
    </>
  )
}
