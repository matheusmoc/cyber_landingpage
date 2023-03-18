import { Inter } from 'next/font/google'
import { Box, Button, Grid, GridItem, Heading, Text, useColorMode } from '@chakra-ui/react'
import { ToggleTheme } from '@/components/ToggleTheme'
import { ParticlesItens } from '@/components/ParticlesItens';

const inter = Inter({ subsets: ['latin'] })



export default function Home() {
  const { colorMode } = useColorMode();
  const isLight = colorMode === 'light';


  return (
    <main>
      <Box position="absolute" h="100vh" color='black'>
        <ParticlesItens />
      </Box>

      <ToggleTheme position="absolute" aria-label="Toggle theme" margin={5} />
      <Box
        h="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          gap={{ base: 0 }}
          w={{ base: "100%", md: "90%" }}
          boxShadow={isLight ? 'lg' : 'dark-lg'}
          position="absolute"
        >
          <GridItem
            bgGradient={isLight ? "linear(to-r, white, gray.400 )" : "linear(to-r, #000000, #434343)"}
            color="white"
            py={{ base: 10, md: "10rem" }}
            px={{ base: 5, md: 20 }}
            textAlign={{ base: "center", md: "left" }}
            h={{ base: "40vh", md: "100%" }}
          >
            <Heading
              bgGradient={isLight ? 'linear(to-r, #9de1f6, #1b1e23)' : 'linear(to-r, #9de1f6, #005499, black)'}
              bgClip='text'
              fontSize='5xl'
              fontWeight='bold'
              textAlign={'center'}
              position="relative"
              py={{ bade: 5 }}

            >
              Deluxe inc.
            </Heading>
            {/* <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
              eget felis ullamcorper, pharetra nibh vel, malesuada mi. Nullam sed
              dolor vitae quam elementum maximus eu id ante. Sed sodales, sapien
              vel aliquet dapibus, tortor urna maximus tellus, ac consequat odio
              velit id est.
            </Text> */}
          </GridItem>

          <Button
            position='absolute'
            px='100px'
            py='30px'
            as='button'
            fontWeight='bold'
            fontSize='15px'
            borderRadius='md'
            bg="transparent"
            boxShadow="lg"
            backdropFilter="saturate(20%) blur(4px) brightness(90%)"
            _hover={{
              bgGradient: isLight ? "linear(to-r, #4F93FF, #0066FF)" : "linear(to-r, #FF4F4F, #FF0000)",
              boxShadow: isLight ? "0 8px 16px -4px #0066FF, 0 0 0 1px #0066FF" : "0 8px 16px -4px red, 0 0 0 1px red",
              scale: 1.5
            }}
            alignSelf="center"
            justifySelf="center"
            children="Connect me"
          />



          <GridItem
            bgImage={isLight ? "url('/android2.jpg')" : "url('/cyberpunk.jpg')"}
            bgSize="cover"
            bgPosition="center"
            h={{ base: "40vh", md: "100%" }}
          />

        </Grid>
      </Box>
    </main>
  );

}
