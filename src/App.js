import React, { useContext } from 'react';
import { CssBaseline , Container, Paper, ThemeProvider, createMuiTheme ,  } from "@material-ui/core";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Route } from 'react-router-dom';
import ChooseScreen from './screens/ChooseScreen';
import OrderScreen from './screens/OrderScreen';
import ReviewScreen from './screens/ReviewScreen';
import SelectPaymentScreen from './screens/SelectPaymentScreen';
import PaymentScreen from './screens/PaymentScreen';
import CompleteOrderScreen from './screens/CompleteOrderScreen';
import AdminScreen from './screens/AdminScreen';
import { Store } from './Store';

const theme = createMuiTheme ({
  typography:{

    h1:{fontWeight:'bold'},
    h2: {
      fontSize:'2rem',
      color:'black',
    },
    h3:{
      fontSize: '1.8rem',
      fontWeight:'bold',
      color:'white',
    },
  },
  pallete: {
    primary:{ main: '#ff1744'},
    secondary:{
      main:'#118e16',
      contrastText:'#ffffff',
    },
    
  },
});

function App() {
  const {state} = useContext(Store);

  return (
    <BrowserRouter>
    <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth={state.widthScreen ? 'lg' : 'sm'} >
          <Paper>
            <Route path="/" component={HomeScreen} exact={true}></Route>
            <Route path="/choose" component={ChooseScreen} exact={true}></Route>
            <Route path="/order" component={OrderScreen} exact={true}></Route>
            <Route path="/review" component={ReviewScreen} exact></Route>
            <Route path="/select-payment" component={SelectPaymentScreen} exact></Route>
            <Route path="/payment" component={PaymentScreen} exact></Route>
            <Route path="/complete" component={CompleteOrderScreen} exact></Route>
            <Route path="/admin" component={AdminScreen} exact></Route>

          </Paper>

        </Container>
    </ThemeProvider>
    </BrowserRouter>
    
  );
}

export default App;
