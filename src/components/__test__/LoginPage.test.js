import { render, screen } from '@testing-library/react';
import LoginPage from '../LoginPage';
import {BrowserRouter as Router} from 'react-router-dom';
import userEvent from "@testing-library/user-event";


describe("Test the Login Component", () => {
    test('should render Login compoennt', () => {
    const {asFragment} = render( 
    <Router>
        <LoginPage />,
    </Router>
    );
    expect(asFragment(<LoginPage/>)).toMatchSnapshot();
    });


    test("render the login form submit button on the screen", async () => {
      render(<Router>
        <LoginPage />,
    </Router>);
      const buttonList = await screen.findAllByRole("button");
      expect(buttonList).toHaveLength(1);
    });

    // test("should display alert if error", () => {
    //     render(<Router>
    //         <LoginPage />,
    //     </Router>);

    //     const username = screen.getByPlaceholderText("Enter username");
    //     const password = screen.getByPlaceholderText("Password");
    //     const buttonList = screen.getAllByRole("button");
    
    //     userEvent.type(username, "User");
    //     userEvent.type(password, "123456");
    //     userEvent.click(buttonList[0]);
    //     const error = screen.getByText("Username is not valid");
    //     expect(error).toBeInTheDocument();
    //   });

    test("should be able to submit the form", () => {
        const component = render(<Router>
            <LoginPage />,
        </Router>);
        const username = screen.getByPlaceholderText("Enter username");
        const password = screen.getByPlaceholderText("Password");
        const btnList = screen.getAllByRole("button");
    
        userEvent.type(username, "User");
        userEvent.type(password, "123456");
        userEvent.click(btnList[0]);
    
        const user = screen.getByText("User");
        expect(user).toBeInTheDocument();
      });
    });