import Article from "@/app/_compornents/Article"
import ButtonLink from "@/app/_compornents/ButtonLink/Index"
import { getNewDetail } from "@/app/_libs/microcms"
import styles from './page.module.css'
import { notFound } from "next/navigation"

type Props = {
    params: {
        slug: string
    };
    searchParams: {
        dk?: string;
    }
}

export default async function Page({ params, searchParams }: Props) {
    const data = await getNewDetail(params.slug, {
        draftKey: searchParams.dk
    }).catch(notFound)

    return (
        <>
            <Article data={data} />
            <div className={styles.footer}>
                <ButtonLink href='/news'>ニュース一覧へ</ButtonLink>
            </div>
        </>
    )
}