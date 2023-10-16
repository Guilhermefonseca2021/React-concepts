import styled from "styled-components";


export const Root = styled.div`
#root {
    max-width: 1280px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
}

button {
    background-color: #1EFE1E;
    color: #fff;
    border-radius: 8px;
    border: none;
    padding: 2rem;
    transition: all 1s linear;
}

button[type='submit']:hover {
    background-color: #2ef;
    transform: translate(1000px);
}

button:hover {
    background-color: #fff;
    color: black;
    transform: translateZ(1200px);
}

.animation {
    width: 300px;
}
`;