'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'
export default function Container({ image }) {
    return (
        <section >
            <motion.article
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='absolute backdrop-blur-xl top-1/3 left-1/2 bg-white/40 py-2 px-4 -translate-x-1/2 -translate-y-1/2 z-20'>

                We offer you you a privatre session for all your Problems
            </motion.article>

            <motion.div
                initial={{ x: '-100%' }}
                whileInView={{ x: 0 }}
                transition={{ duration: 0.5, type: 'spring', delay: 0.5 }}
                className='absolute top-0 left-0 w-full h-full'            >

                <Image
                    src={image}
                    className='object-cover w-full h-screen  absolute top-0 left-0' alt='Interview image' />
            </motion.div>
        </section >
    )
}