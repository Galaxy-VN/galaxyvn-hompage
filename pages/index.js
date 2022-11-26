import NextLink from 'next/link'
import {
    Link,
    Container,
    Heading,
    Box,
    List,
    ListItem,
    useColorModeValue,
    Button,
    SimpleGrid, Avatar
} from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Paragraph from '../components/paragraph'
import { BioSection, BioYear } from '../components/bio'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import { IoLogoTwitter, IoLogoInstagram, IoLogoGithub, IoLogoFacebook } from 'react-icons/io5'
import thumbYouTube from '../public/images/links/youtube.jpg'
import thumbNijigen from '../public/images/works/nijigen.jpg'

const Home = () => (
    <Layout>
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
                    <p>GalaxyVN (Developer / Editor / Designer)</p>
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
                        <Avatar
                            size={"auto"}
                            name="Profile Image"
                            src="/images/profile.jpg"
                        />
                    </Box>
                </Box>
            </Box>
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    Work
                </Heading>
                <Paragraph>
                    I&apos;m a freelancer developer and still learn for full-stack 
                    developer. Currently i am still a student at high school about
                    to graduate and working on product called{' '}
                    <NextLink href="/works/nijigen-website">
                        <Link>Nijigen Website</Link>
                    </NextLink>
                    {' '}(fansite).
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button
                                rightIcon={<ChevronRightIcon />}
                                colorScheme="teal"
                            >
                                My Stupid Portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Paragraph>
            </Section>
            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                <BioSection>
                    <BioYear>2005</BioYear>
                    Born in Ho Chi Minh City, Viet Nam
                </BioSection>
                <BioSection>
                    <BioYear>2019</BioYear>
                    Graduated from secondary school
                </BioSection>
                <BioSection>
                    <BioYear>2020 to present</BioYear>
                    Learning as a high school student
                </BioSection>
            </Section>
            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    On The Web
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://github.com/galaxy-vn" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoGithub />}
                            >
                                @galaxy-vn
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://twitter.com/galaxyvn_dev" target="__blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoTwitter />}
                            >
                                @galaxyvn_dev
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.instagram.com/galaxyvn.dev/" target="_blank">
                            <Button
                                variant="ghost"
                                colorScheme="teal"
                                leftIcon={<IoLogoInstagram />}
                            >
                                @galaxyvn.dev
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://www.facebook.com/galaxyvn.dev/" target={"_blank"}>
                            <Button
                                variant={"ghost"}
                                colorScheme={"teal"}
                                leftIcon={<IoLogoFacebook />}
                            >
                                Pham Gia Huy
                            </Button>
                        </Link>
                    </ListItem>
                </List>

                <SimpleGrid columns={[1, 2, 2]} gap={6}>
                <GridItem
                    href="https://www.youtube.com/channel/UCKgGqDMob1OL7vCjAWaFhOw"
                    title="GalaTriVN 清志銀河"
                    thumbnail={thumbYouTube}
                >
                    My YouTube channel
                </GridItem>
                <GridItem
                    href="https://unofficial-nijigen.camchua.moe/"
                    title="Nijigen Website"
                    thumbnail={thumbNijigen}
                >
                    A fansite I write
                </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)


export default Home
export { getServerSideProps } from '../components/chakra'