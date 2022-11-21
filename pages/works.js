import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import thumbNijigen from '../public/images/works/thumb_0.jpg'

const Works = () => (
    <Layout title="Works">
        <Container>
            <Heading as="h3" fontSize={20} mb={4}>
                Works
            </Heading>

            <SimpleGrid column={[1,2,2]} gap={6}>
                <Section>
                    <WorkGridItem id="nijigen-website" title="Nijigen Website" thumbnail={thumbNijigen}>
                        A fansite i write when i was free (Will write again when i have time).
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    </Layout>
)

export default Works
export { getServerSideProps } from '../components/chakra'