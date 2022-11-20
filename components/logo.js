import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import { GiGalaxy } from "react-icons/gi";
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transfrom: rotate(20deg);
    }
`

const Logo = () => {
    return (
        <Link href="/" scroll={false}>
            <LogoBox>
                    <GiGalaxy />
                    <Text 
                        color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                        fontFamily='M PLUS Rounded 1c", sans-serif'
                        fontWeight="bold"
                        ml={3}
                    >
                        GalaxyVN
                    </Text>
                </LogoBox>
        </Link>
    )
}

export default Logo