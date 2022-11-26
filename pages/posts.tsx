import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section"
import {GridItem} from "../components/grid-item";

import thumbTicTacToe from "../public/images/contents/twitter-tic-tac-toe-nika-lan-linh.png"

const Posts = () => (
    <Layout title={"Posts"}>
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                Popular Posts
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <GridItem
                        title={"Tic-Tac-Toe (Nika Lan Linh Edition)"}
                        thumbnail={thumbTicTacToe}
                        href={"https://twitter.com/galaxyvn_dev/status/1585985027539492864"}
                    >
                    </GridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Posts
export { getServerSideProps } from '../components/chakra'
