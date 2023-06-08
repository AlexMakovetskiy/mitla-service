import { ReactElement, ReactNode } from 'react';

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

interface IWrapperReduxRouterProps {
    children: ReactNode;
}

type AppWrapperType = ({children}: IWrapperReduxRouterProps) => ReactElement;

export type { 
    IReview,
    DisableMouseEventType,
    ISearchPageProps,
    IWrapperReduxRouterProps,
    AppWrapperType,
};