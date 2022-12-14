import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import VoxelBlockLoader from "../voxel-block-loader";
import {Footer} from "../footer";

const LazyVoxelBlock = dynamic(() => import('../voxel-block'), {
    ssr: false,
    loading: () => <VoxelBlockLoader />
})

const Main = ({children, router}) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="GalaxyVN's homepage" />
                <meta name="author" content="GalayVN" />
                <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

                <meta name="twitter:title" content="GalaxyVN 清志銀河" />
                <meta name="twitter:card" content="/card.png" />
                <meta name="twitter:site" content="@galaxyvn_dev" />
                <meta name="twitter:creator" content="@galaxyvn_dev" />
                <meta property="og:site_name" content="GalaxyVN" />
                <meta name="og:title" content="GalaxyVN" />
                <meta property="og:type" content="website" />

                <meta property="og:image" content="/favicon.ico" />
                <meta property="og:image:alt" content="avt" />
                <title>GalaxyVN - Homepage</title>
            </Head>

            <NavBar path={router.asPath} />

            <Container maxW="container.md" pt={14}>
                <LazyVoxelBlock />

                {children}

                <Footer />
            </Container>
        </Box> 
    )
}

export default Main