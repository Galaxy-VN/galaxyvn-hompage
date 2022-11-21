import { motion } from 'framer-motion'
import { chakra, shouldForwardProp } from '@chakra-ui/react'

const StyleDiv = chakra(motion.div, {
    shouldForwardProp: prop => {
        return shouldForwardProp(prop) || prop === 'transtion'
    }
})

export default StyleDiv