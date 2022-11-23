import { forwardRef } from 'react'
import { Box, Spinner } from '@chakra-ui/react'

export const MoonSpinner = () => (
    <Spinner
        size="xl"
        position="absolute"
        left="50%"
        top="50%"
        ml="calc(0px - var(--spinner-size) / 2)"
        mt="calc(0px - var(--spinner-size))"
    />
)

// eslint-disable-next-line react/display-name
export const MoonContainer = forwardRef(({ children }, ref) => (
    <Box
        ref={ref}
        className="voxel-moon"
        m="auto"
        mt={['-20px', '-60px', '-120px']}
        mb={['-40px', '-140px', '-200px']}
        w={[290, 490, 650]}
        h={[290, 490, 650]}
        position="relative"
    >
        {children}
    </Box>
))

const Loader = () => {
    return (
        <MoonContainer>
            <MoonSpinner />
        </MoonContainer>
    )
}

export default Loader