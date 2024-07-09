import React from 'react'
import dynamic from 'next/dynamic'

const AnimatedContainer = dynamic(() => import('./AnimatedContainer'), {
    ssr: false
})

export default function Container({ image }) {
    return <AnimatedContainer image={image} />
}
