import styled from 'styled-components';

const Button = styled.button`
margin: 0.5rem;
    padding: 0.5rem 0.7rem;
    text-decoration: none;
    color: black;
    font-size: 1rem;
    background-color: #CDDC39;
    border-radius: 5rem;

&:hover {
    background-color: #AFB42B;
    cursor: pointer;
}
`;

export default Button;