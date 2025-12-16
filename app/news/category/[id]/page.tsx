import { getCategoryDetail, getNewsList } from "@/app/_libs/microcms";
import NewsList from "@/app/_compornents/NewsList/NewsList";
import NotFound from "@/app/not-found";
import Category from "@/app/_compornents/Category/Category";

import React from 'react'
import { notFound } from "next/navigation";
import { NEWS_LIST_LIMIT } from "@/app/_constants";
import Pagination from "@/app/_compornents/Pagination";

type Props = {
    params: {
        id: string;
    }

}

export default async function Page({ params }: Props) {
    const category = await getCategoryDetail(params.id).catch(notFound);

    const { contents: news, totalCount } = await getNewsList({
        limit: NEWS_LIST_LIMIT,
        filters: `category[equals]${category.id}`,
    })

    return (
        <>
            <p style={{ textAlign: "center" }}>
                <Category category={category} />の一覧
            </p>
            <NewsList news={news} />
            <Pagination totalCount={totalCount} basePath={`/news/category/${category.id}`} />
        </>
    )
}
