import { render, screen } from '@testing-library/react';
import Footer from '../Footer';


describe('Footer Component', () => {
    test('should render Footer compoennt', () => {
    const {asFragment} = render( 
        <Footer />,
    );
    expect(asFragment(<Footer/>)).toMatchSnapshot();
    });
    
});


