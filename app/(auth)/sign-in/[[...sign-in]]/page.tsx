import { SignIn } from '@clerk/nextjs'
import React from 'react'

const page = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 '>

            <div className='flex justify-center items-center h-screen order-first md:order-last'>
                <SignIn />
            </div>

        </div>
    )
}

export default page