import React from 'react';
import {render, screen} from "@testing-library/react"
import Login from '../Component/Login/Login';


describe('test login component', () => {
    it('renders the correct text', () => {
       render(<Login text="Hello, Jest!" />);
    });
});