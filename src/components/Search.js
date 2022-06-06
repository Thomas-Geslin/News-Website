export default function Search({ setSearchData }) {

    /* Requête l'API en fonction de ce qu'on as tapé dans la barre de recherche */
    const searchNews = () => {
        // Récupère valeur barre de recherche
        const searchValue = document.getElementById('searchInput').value;
        
        // Requête API et stocke infos dans le localState
        const fetchData = async() => {
            const response = await fetch('https://newsapi.org/v2/everything?q=' + searchValue +'&from=2022-06-05&sortBy=popularity&apiKey=' + process.env.REACT_APP_NEWS_API_KEY)
            const searchNewsData = await response.json()
            setSearchData(searchNewsData.articles.slice(0,6))
        }
        fetchData()
    }

    /* Barre de recherche */
    return(<div className="search">
                <input type='search' className="search__input" id="searchInput"></input>
                <button onClick={searchNews} className='search__button'>Search</button>
            </div>)
}