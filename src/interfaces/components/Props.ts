import { ReactNode } from 'react';

import { IReview } from '../pages/Main';

interface ITitleProps {
    fontSize: string | number,
    lineHeight: string | number,
    fontWeight: string | number,
    content: string,
}

interface IReviewListProps {
    reviews: IReview[],
    elementCount: number,
}

interface IReviewProps {
    data: IReview | undefined,
}

interface IPopUpProps {
    picture: string | undefined,
}

interface IFavoritePostActionProps {
    postData: IReview,
}

interface IThemeContext {
    theme: string
    handleTheme: () => void
}

interface IThemeProviderProps {
    children: ReactNode;
}

type ThemeHookType =  () => IThemeContext | null;

export type {
    ITitleProps,
    IReviewListProps,
    IReviewProps,
    IPopUpProps,
    IFavoritePostActionProps,
    IThemeProviderProps,
    IThemeContext,
    ThemeHookType,
};