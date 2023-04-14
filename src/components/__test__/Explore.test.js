import { render, screen } from '@testing-library/react';
import Explore from '../Explore';


describe('Explore Component', () => {
    test('should render Explore compoennt', () => {
    const {asFragment} = render( 
        <Explore />,
    );
    expect(asFragment(<Explore/>)).toMatchSnapshot();
    });

    test('test', () => {
        render(<Explore/>);
        expect(true).toBe(true);
    });
});