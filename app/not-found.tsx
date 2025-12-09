import styles from './not-found.module.css'
import React from 'react'

export default function NotFound() {
    return (
        <div className={styles.container}>
            <dl>
                <dt className={styles.title}>ページが見つかりません</dt>
                <dd className={styles.text}>
                    あなたがアクセスしようとしたページは存在しません。
                    <br />
                    URLをご確認ください
                </dd>
            </dl>
        </div>
    )
}
