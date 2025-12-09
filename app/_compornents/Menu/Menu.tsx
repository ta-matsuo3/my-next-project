import Link from 'next/link'
import styles from './Menu.module.css'

import React, { useState } from 'react'
import Image from 'next/image'
import cx from 'classnames'

export default function Menu() {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const open = () => setIsOpen(true)

    return (
        <>
            <div >
                <nav className={`${styles.nav} ${isOpen ? styles.open : ''}`}>
                    <ul className={styles.items}>
                        <li>
                            <Link href="/news">ニュース</Link>
                        </li>
                        <li>
                            <Link href="/members">メンバー</Link>
                        </li>
                        <li>
                            <Link href="/contact">お問い合わせ</Link>
                        </li>
                    </ul>
                    <button className={cx(styles.button, styles.close)} onClick={() => setIsOpen(false)}>
                        <Image
                            src='/close.svg'
                            alt='閉じる'
                            width={24}
                            height={24}
                            priority
                        />
                    </button>
                </nav >
                <button className={styles.button} onClick={open}>
                    <Image src='/menu.svg' alt='メニュー' width={24} height={24} />
                </button>
            </div>
        </>
    )
}
