'use client';
import { formUrlQuery, removeKeysFromUrlQuery } from '@jsmastery/utils';
import Image from 'next/image';
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const SearchInput = () => {
    const pathname = usePathname();
    const router = useRouter();
    const searchParams = useSearchParams();
    const query = searchParams.get('topic') || '';
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        const delayDebounce = setTimeout(() => {
            if (searchQuery) {
                const newUrl = formUrlQuery({
                    params: searchParams.toString(),
                    key: "topic",
                    value: searchQuery,
                });
                console.log('New URL:', newUrl);
                router.push(newUrl, { scroll: false });
            } else {
                if (pathname === '/companions') {
                    const newUrl = removeKeysFromUrlQuery({
                        params: searchParams.toString(),
                        keysToRemove: ["topic"],
                    });

                    router.push(newUrl, { scroll: false });
                }
            }

        }, 500);

    }, [searchQuery, router, pathname, searchParams])

    return (
        <div className='relative border border-black rounded-lg items-center gap-2 flex py-1 h-fit px-2'>
            <Image src={'/icons/search.svg'} alt='search' width={15} height={15} />
            <input placeholder='search companions...' className='outline-none ' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

        </div>
    )
}

export default SearchInput
