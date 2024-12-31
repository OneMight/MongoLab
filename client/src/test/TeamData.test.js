import React from 'react';
import { render } from '@testing-library/react';
import ConWithInf from '../components/ConWithInf/ConWithInf.jsx';

describe('ConWithInf Component', () => {
    const mockGroups = [
        {
            idGroup: 1,
            imageGroup: 'group1.png',
            groupName: 'Group One',
            desciption: 'This is group one'
        },
        {
            idGroup: 2,
            imageGroup: 'group2.png',
            groupName: 'Group Two',
            desciption: 'This is group two'
        }
    ];

    it('should render correctly with provided groups', () => {
        const { getByText,getAllByText  } = render(<ConWithInf group={ mockGroups } />);
        expect(getByText('Group One')).toBeInTheDocument();
        expect(getAllByText('This is group one')).toHaveLength(1);
        expect(getByText('Group Two')).toBeInTheDocument();
        expect(getByText('This is group two')).toBeInTheDocument();
    });
});