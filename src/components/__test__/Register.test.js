import { render, screen } from '@testing-library/react';
import {BrowserRouter as Router} from 'react-router-dom';
import Register from '../Register';

describe('Register Component', () => {
    test('should render Register compoennt', () => {
    const {asFragment} = render( 
    <Router>
        <Register />,
    </Router>
    );
    expect(asFragment(<Register/>)).toMatchSnapshot();
    });


    test("render the Register form submit button on the screen", async () => {
      render(<Router>
        <Register />,
    </Router>);
      const buttonList = await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(1);
    });

    test("passport input should have type password ", () => {
        render(<Router>
        <Register />,
    </Router>);
        const password = screen.getByPlaceholderText("Password");
        expect(password).toHaveAttribute("type", "password");
      });
});
