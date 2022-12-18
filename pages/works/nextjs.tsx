import {
    Container,
    Badge,
    Link,
    List,
    ListItem
} from "@chakra-ui/react";
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from "../../components/layouts/article";

const Work = () => (
    <Layout title={"Next.js Website"}>
        <Container>
            <Title>
                My Portfolio Nextjs <Badge>2022-</Badge>
            </Title>
            <P>
                Yes, another learning material of mine using to building this
                website i don&apos;t know but i like styling with JavaScript
                so ye no more.
            </P>
            <List ml={4} my={4}>
                <ListItem>
                    <Meta>Website</Meta>
                    <Link>https://github.com/Galaxy-VN/galaxyvn-hompage <ExternalLinkIcon mx={"2px"}/></Link>
                </ListItem>
                <ListItem>
                    <Meta>Platform</Meta>
                    <span>Windows/macOS/Linux/iOS/Android</span>
                </ListItem>
                <ListItem>
                    <Meta>Stack</Meta>
                    <span>TypeScript, JavaScript</span>
                </ListItem>
            </List>


        </Container>
    </Layout>
)

export default Work