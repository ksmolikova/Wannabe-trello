import Home from './views/Home';
import BoardDetail from './views/BoardDetail';
import React from 'react';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { AppBar, Button, Container, CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './design/theme';
import ErrorBoundary from './views/ErrorBoundary';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
        <header>
          <AppBar position="static" >
            <Button color="secondary" href="/">
                    Trello
            </Button> 
          </AppBar>    
        </header>
        <main>
          <ErrorBoundary>
            <Container>
              <BrowserRouter>
                <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/board/:id" element={<BoardDetail/>} />
                </Routes>
              </BrowserRouter>
            </Container>
          </ErrorBoundary>
        </main>    
      </ThemeProvider>
  );
}

export default App;
