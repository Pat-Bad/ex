import Result from "./Article";

interface IArticle {
    count: number;
    next: string | null;
    previous: string | null;
    results: Result[]
}

export default IArticle