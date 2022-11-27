import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNijigen from '../public/images/works/nijigen.jpg'
import thumbOregen3 from '../public/images/works/oregen3.jpg'
import thumbNextjs from '../public/images/works/next-js.png'
import thumbPotato from '../public/images/works/potato.jpg'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid columns={[1, 1, 2]} gap={6}>
                <Section>
                    <WorkGridItem id={"nijigen"} title={"Nijigen Website"} thumbnail={thumbNijigen}>
                        A fansite I write in summer.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id={"oregen"} title={"Oregen"} thumbnail={thumbOregen3}>
                        The next generation of Oregen recoded.
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id={"nextjs"} title={"Next.js"} thumbnail={thumbNextjs}>
                        Dynamic without limits
                    </WorkGridItem>
                </Section>
                <Section>
                    <WorkGridItem id={"potato"} title={"Potato"} thumbnail={thumbPotato}>
                        Forking potatoes is an ancient and well-mannered tradition.
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'