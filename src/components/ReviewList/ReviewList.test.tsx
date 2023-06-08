import { screen } from '@testing-library/react';

import { appRender, testUserData } from '../../utils/Testing';
import { IReview } from '../../interfaces/pages/Main';

import ReviewList from './ReviewList';

describe('test component ReviewList', () => {
    const testDataList: IReview[] = [testUserData, testUserData];

    test('should render  correctly', () => {
        appRender(<ReviewList reviews={testDataList} elementCount={testDataList.length-1}/>);

        const favoriteElementList = screen.getAllByTestId('favorite-post-button-test');
        const dateElementList = screen.getAllByText(/21/i);
        expect(favoriteElementList.length).toBe(2);
        expect(dateElementList.length).toBe(2);
    });

    test('should render incorrectly', () => {
        appRender(<ReviewList reviews={[]} elementCount={0}/>);

        const favoriteElementList = screen.queryAllByTestId('favorite-post-button-test');
        const dateElementList = screen.queryAllByText(/21/i);
        expect(favoriteElementList.length).toBe(0);
        expect(dateElementList.length).toBe(0);
    });
});