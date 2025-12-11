import { formatDate } from '@/app/_libs/utils';
import Image from 'next/image';
import React from 'react'

type Props = {
    date: string;
}

export default function Date({ date }: Props) {
    return (
        <span>
            <Image src='/clock.svg' alt='' width={16} height={16} loading='eager' />
            {formatDate(date)}
        </span>
    )
}
