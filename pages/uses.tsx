import {Container, Heading, SimpleGrid} from "@chakra-ui/react";
import Layout from "../components/layouts/article";
import Section from "../components/section"
import {UseGridItem} from "../components/grid-item";

import thumbnailKeyboard from "../public/images/uses/keyboard-akko-3084b-plus.png"
import thumbnailLaptop from "../public/card.png"

const Uses = () => (
    <Layout title={"Uses"}>
        <Container>
            <Heading as={"h3"} fontSize={20} mb={4}>
                What I Uses
            </Heading>

            <Section delay={0.1}>
                <SimpleGrid columns={[1, 1, 2]} gap={6}>
                    <UseGridItem
                        id={"keyboard"}
                        title={"AKKO 3084B Plus"}
                        thumbnail={thumbnailKeyboard}
                    >
                        Mechanical keyboard
                    </UseGridItem>
                    <UseGridItem
                        id={"laptop"}
                        title={"Laptop MSI Katana GF66"}
                        thumbnail={thumbnailLaptop}
                    >
                        Laptop gaming
                    </UseGridItem>
                </SimpleGrid>
            </Section>
        </Container>
    </Layout>
)

export default Uses
export { getServerSideProps } from '../components/chakra'