import { useState, useEffect } from "react"
import { Col, Row } from "react-bootstrap"

import SingleArticle from "./SingleArticle"
import Result from "../types/Article"

const Articles = () => {
    const [articles, setArticles] = useState<Result[]>([])
    const ARTICLES_URL = "https://api.spaceflightnewsapi.net/v4/articles"

    const getArticles = async () => {
        fetch(ARTICLES_URL)

        try {
            const response = await fetch(ARTICLES_URL)
            if (response.ok) {
                const ArticlesObj = await response.json()
                console.log(ArticlesObj)
                setArticles(ArticlesObj.results)
            } else { throw new Error('errore nella fetch') }
        }
        catch (error) { console.log(error) }
    }

    useEffect(() => {
        getArticles()
    }, [])
    return (
        <>
            <h2>Your Space Flights news</h2>

            <Row>

                {articles.map((a) => {
                    return (
                        <Col xs={12} md={6} key={a.id} className="mb-5"><SingleArticle article={a} /></Col>)
                }
                )}
            </Row>

        </>

    )
}

export default Articles