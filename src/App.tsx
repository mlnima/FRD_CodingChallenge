import React from 'react';
import styled from "styled-components";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import GlobalStyle from "./Components/Style/GlobalStyle";

const AppStyledDiv = styled.div`
    margin: auto;
`

const App : React.FC = () => {
    return (
        <AppStyledDiv className="App">
            <GlobalStyle/>
            <Header/>
            <Main/>
        </AppStyledDiv>
    );
}

export default App;
