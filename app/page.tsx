import Image from 'next/image'
import styles from './page.module.css'
import {Article} from "@/app/types";

async function getArticles() {
  const res = await fetch("http://localhost:3000/api/articles");

  //エラーハンドリング
  if (!res.ok) {
      throw new Error("fetch article 失敗");
  }

  const data = await res.json();
  return data.articles as Article[];
}

export default async function Home() {
    const articles = await getArticles();

  return (
      <div>
          <h1>新着記事</h1>
          <ul>
              {articles.map((article: Article) => (
                  <li key={article.id}>{article.title}</li>
              ))}
          </ul>
      </div>
  )
}
