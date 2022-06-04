import { useEffect, useState } from "react";

export default function Homepage() {
    //
    const [articleData, setArticleData] = useState([]);

    //
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=fr&apiKey=8dde87dbe2d34f70bb932aa1daed0964')
            const newsData = await response.json()
            console.log(newsData.articles)
            setArticleData(newsData.articles.slice(0,6))
        }
        fetchData()
    }, [])

    //
    return(<div className="homepage">
                {articleData.map((articleData, k) =>
                <a key={k} href={articleData.url} className='homepage__article'>
                        <img src={articleData.urlToImage} alt="Représentation de l'article" className="homepage__article__picture" />
                        <p className="homepage__article__title">{articleData.title}</p>
                </a>
                )}
            </div>)
}