import { useEffect, useState } from "react";

export default function Homepage({ searchData }) {
    /* Initialise localState */
    const [articleData, setArticleData] = useState([]);

    /* Récupère les grosses news en France depuis l'API et les stock dans le localState */
    useEffect(() => {
        const fetchData = async() => {
            const response = await fetch('https://newsapi.org/v2/top-headlines?country=fr&apiKey=' + process.env.REACT_APP_NEWS_API_KEY)
            const newsData = await response.json()
            setArticleData(newsData.articles.slice(0,6))
        }
        fetchData()
    }, [])

    /* Affiche soit les infos en France, soit celles que l'on as recherché avec la barre de recherche */
    return searchData.length === 0 ? (
        // Affiche Infos en France si aucune recherche faite
        <div className="homepage">
            {articleData.map((articleData, k) =>
                <a key={k} href={articleData.url} className='homepage__article'>
                    <img src={articleData.urlToImage} alt="Représentation de l'article" className="homepage__article__picture" />
                    <p className="homepage__article__title">{articleData.title}</p>
                </a>
            )}
        </div>) : (
        // Affiche Infos trouvées lors d'une recherche
        <div className="homepage">
            {searchData.map((searchData, k) =>
                <a key={k} href={searchData.url} className='homepage__article'>
                    <img src={searchData.urlToImage} alt="Représentation de l'article" className="homepage__article__picture" />
                    <p className="homepage__article__title">{searchData.title}</p>
                </a>
            )}
        </div>)
}