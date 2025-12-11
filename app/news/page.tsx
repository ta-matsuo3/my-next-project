import NewsList from "../_compornents/NewsList/NewsList";
import { getNewsList } from "../_libs/microcms";

export default async function Page() {
    const { contents: news } = await getNewsList()

    return <NewsList news={news} />
}