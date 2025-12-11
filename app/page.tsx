import Image from "next/image";
import styles from "./page.module.css";
import ButtonLink from "./_compornents/ButtonLink/Index";
import NewsList from "./_compornents/NewsList/NewsList";
import { getNewsList } from "./_libs/microcms";
import { NEWS_LIST_LIST } from "./_constants";


export default async function Home() {

  const data = await getNewsList({
    limit: NEWS_LIST_LIST
  })


  return (
    <>
      <section className={styles.top}>
        <div>
          <h1 className={styles.title}>Hello</h1>
          <p className={styles.description}>私たちは云々かんぬん</p>
        </div>

        <img className={styles.bgimg} src="/img-mv.jpg" alt="" />
        <Image src="/img-mv.jpg" className={styles.bgimg}
          alt="背景"
          width={4000}
          height={1200}
        />
      </section>
      <section className={styles.news}>
        <h2 className={styles.newsTitle}>News</h2>
        <NewsList news={data.contents} />
        <div className={styles.newsLink}>
          <ButtonLink href="/news">
            もっと見る
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
