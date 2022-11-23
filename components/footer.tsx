import { Box } from '@chakra-ui/react'

export const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} GalaxyVN. All Rights Reserved.
        </Box>
    )
}