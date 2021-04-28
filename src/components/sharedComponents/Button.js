import styled from 'styled-components';

const accentColor = 'rgb(12, 150, 220)'

const Button = styled.button`
align-items: center;
background-color:${props => props.variant === 'primary' ? accentColor : 'white'};

&:hover {
    background-color: green;
    cursor: pointer;
}
`;

export default Button;