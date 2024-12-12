import { useState, useEffect } from "react"
import { Col, Container, Row } from "react-bootstrap"

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
        <div>
            <h2>Your Space Flights news</h2>
            <Container>
                <Row>
                    <Col xs={12} md={4}>
                        {articles.map((a) => {
                            return (<SingleArticle article={a} key={a.id} />)
                        }
                        )}</Col>
                </Row>
            </Container>
        </div>

    )
}

export default Articles