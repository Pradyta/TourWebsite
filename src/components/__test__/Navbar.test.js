import { render, screen } from '@testing-library/react';
import Navbar from '../Navbar';
import {BrowserRouter as Router} from 'react-router-dom';

describe('Navbar Component', () => {
    test('should render Navbar compoennt', () => {
    const {asFragment} = render( 
        <Router>
        <Navbar />,
        </Router>
    );
    expect(asFragment(<Navbar/>)).toMatchSnapshot();
    });
    
});