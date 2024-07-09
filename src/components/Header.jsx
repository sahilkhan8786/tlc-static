import React from 'react'

export default function Header() {
    return (
        <header className='  w-full  fixed top-4 left-0 z-20 px-2'>
            <nav className='bg-white/40 max-w-screen-2xl mx-auto  py-4 rounded-lg flex justify-between items-center px-2 shadow-md backdrop-blur-xl'>
                <div className='bg-white max-w-fit  p-2 rounded-lg'>
                    <h1>The Learning Code</h1>
                </div>

                <ul>
                    <li>HOME</li>
                </ul>
            </nav>

        </header>
    )
}
