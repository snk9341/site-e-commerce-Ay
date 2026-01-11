export default function ArticleList({ infoArticle }) {
    return (
        <>
            <div id="listing">
                <a className="card" href={infoArticle[0].lien}>
                    <div className="imgArticle">
                        <img src={infoArticle[0].image} alt="" />
                        <h4>{infoArticle[0].name}</h4>
                    </div>
                    <p>{infoArticle[0].prix} €</p>
                </a>
                <a className="card" href={infoArticle[0].lien}>
                    <div className="imgArticle">
                        <img src={infoArticle[0].image} alt="" />
                        <h4>{infoArticle[0].name}</h4>
                    </div>
                    <p>{infoArticle[0].prix} €</p>
                </a>
                <a className="card" href={infoArticle[0].lien}>
                    <div className="imgArticle">
                        <img src={infoArticle[0].image} alt="" />
                        <h4>{infoArticle[0].name}</h4>
                    </div>
                    <p>{infoArticle[0].prix} €</p>
                </a>
                <a className="card" href={infoArticle[0].lien}>
                    <div className="imgArticle">
                        <img src={infoArticle[0].image} alt="" />
                        <h4>{infoArticle[0].name}</h4>
                    </div>
                    <p>{infoArticle[0].prix} €</p>
                </a>
            </div>
        </>
    )
}