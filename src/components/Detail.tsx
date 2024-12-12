//fetch con `https://api.example.com/articles/${id}`

import { useEffect, useState } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { useParams } from "react-router-dom"
import Detail from "../types/detail"


const Details = () => {
    const { id } = useParams()
    console.log('ID from URL:', id)
    const [article, setArticle] = useState<Detail | null>(null)  //mi arriva un solo libro che è un oggetto dell'array.
    const MY_URL_WITH_PARAMS = `https://api.example.com/articles/${id}`;

    //fetch con parametri
    const getDetail = async () => {

        try {
            const response = await fetch(MY_URL_WITH_PARAMS)
            if (response.ok) {
                const ArticleDetail = await response.json()
                console.log(ArticleDetail)
                setArticle(ArticleDetail)
            }
            else { throw new Error('failed fetch!') }
        }
        catch (error) { console.log(error) }

    }

    useEffect(() => {
        if (id) {
            getDetail();
        }
    }, [id]);



    return (
        <>
            <h2>Here's your news of choice</h2>
            <Container>
                <Row>
                    <Col>
                        <Card className="h-100 m-2">
                            <Card.Img variant="top" src={article?.image_url} />
                            <Card.Body>
                                <Card.Title>{article?.title}</Card.Title>
                                <Card.Text>{article?.summary}</Card.Text>
                                <Card.Text>{article?.news_site}</Card.Text>
                            </Card.Body>
                        </Card></Col></Row></Container></>
    )

}

export default Details


//ricevo un oggetto, metto come stato iniziale l'interfaccia unita a null (asusual)
//set state come al solito, useeffect metto come secondo parametro quello di useparams tra quadre
//sotto punto di domanda perché può essere oggetto OPPUre null.