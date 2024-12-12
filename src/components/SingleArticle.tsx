import { Card } from "react-bootstrap";

import Result from "../types/Article";

interface SingleArticleProps {
    article: Result
}

const SingleArticle = (props: SingleArticleProps) => {
    return (

        <Card className="h-100 m-2">
            <Card.Img variant="top" src={props.article.image_url} />
            <Card.Body>
                <Card.Title>{props.article.title}</Card.Title>
                <Card.Text>{props.article.summary}</Card.Text>
                <Card.Text>{props.article.news_site}</Card.Text>
            </Card.Body>
        </Card>)
}

export default SingleArticle