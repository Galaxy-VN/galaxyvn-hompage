import {
  Container,
  Heading,
  Box,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Image from 'next/image'

const ProfileImage = chakra(Image, {
    shouldForwardProp: prop => ['width', 'height', 'src', 'alt', "marginBottom"].includes(prop)
})

  
const Page = () => {
    return (
        <Container>
            <Box 
                borderRadius="lg" 
                mb={6}
                p={3}
                textAlign="center"
                bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
                css={{ backdropFilter: 'blur(10px)' }}
            >
                Hello, I&apos;m a senior high school student and backend developer in Vietnam!
            </Box>

            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        GalaxyVN
                    </Heading>
                    <p>Editor / Developer / Designer</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Box
                        borderColor="whiteAlpha.800"
                        borderWidth={3}
                        borderStyle="solid"
                        w="100px"
                        h="100px"
                        display="inline-block"
                        borderRadius="full"
                        overflow="hidden"
                    >
                        <ProfileImage
                            src="/images/profile.jpg"
                            alt="Profile image"
                            borderRadius="full"
                            width="95"
                            height="95"
                        />
                    </Box>
                </Box>
            </Box>
        </Container>
    )
}


export default Page