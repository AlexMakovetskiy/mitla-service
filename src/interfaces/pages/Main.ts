interface IReview {
    id: number,
    image: string,
    text: string,
    date: string,
    lesson_num: number,
    title: string,
    author: number,
}

type DisableMouseEventType = {
    preventDefault: () => void
}

interface ISearchPageProps {
    searchLine: string,
}

export type { 
    IReview,
    DisableMouseEventType,
    ISearchPageProps,
};