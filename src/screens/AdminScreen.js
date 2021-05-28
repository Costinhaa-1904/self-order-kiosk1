import { Box, Button, CircularProgress, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { Store } from '../Store';
import React, { useContext, useEffect } from 'react';
import { useStyles } from '../styles';
import { listOrders } from '../actions';
import axios from 'axios';
import { Alert } from '@material-ui/lab';

export default function AdminScreen() {
    const styles = useStyles();
    const {state, dispatch} = useContext(Store);

    const {orders, loading , error} = state.orderList ;
    useEffect(() => {
        listOrders(dispatch);
    },[dispatch]);

    const setOrderStateHandler = async (order, action) => {
        try {
            await axios.put ('/api/orders/' + order._id , {
                action: action,
            });
            listOrders(dispatch);
        } catch (err){
            alert(err.message);
        }
    };



    return  <Box className={[styles.root]}>
        <Box className={[styles.main]}>
        {loading ? (
               <CircularProgress />
        ): error ?(
            <Alert severity="error">{error}</Alert>
        ) : (
            <TableContainer component={Paper}>
                <Table aria-label="Orders">
                    <TableHead>
                        <TableRow>
                           <TableCell>Order Number</TableCell>
                           <TableCell align="right">Price ($)</TableCell>
                           <TableCell align="right">Count</TableCell>
                           <TableCell align="right">Items</TableCell>
                           <TableCell align="right">Type</TableCell>
                           <TableCell align="right">Payment</TableCell>
                        </TableRow>

                    </TableHead>
                    <TableBody>
                      {orders.map((order) => (
                          <TableRow key={order.name}>
                              <TableCell component="th" scope="row">
                                  {order.number}
                              </TableCell>
                              <TableCell align="right"> {order.totalPrice} </TableCell>
                              <TableCell align="right"> {order.orderItems.length} </TableCell>
                              <TableCell align="right">
                                  {order.orderItems.map ((item) =>(
                                      <Box>
                                          {item.name }
                                      </Box>
                                ))}
                              </TableCell>
                              <TableCell align="right">{order.orderType}</TableCell>
                              <TableCell align="right">{order.paymentType}</TableCell> 
                              <TableCell align="right">
                                  {order.inProgress 
                                        ? 'In Progress' 
                                        : order.isReady 
                                        ?  'Ready'
                                        : order.isDelivered
                                        ? ' Delivered' 
                                        : 'Uknown' }</TableCell>
                                        <TableCell align="right">
                                          <Button variant="contained"
                                                    onClick={() => setOrderStateHandler (order,'ready')}  
                                                    color="primary"
                                                    >
                                                        Ready
                                                    </Button>
                                                    <Button 
                                                    color="secondary"
                                                    variant="contained"
                                                    onClick={() => setOrderStateHandler (order,'cancel')}  
                                                   
                                                    >
                                                        Cancel
                                                    </Button>
                                                    <Button variant="contained"
                                                    onClick={() => setOrderStateHandler (order,'deliver')}  
                                                    >
                                                        Deliver
                                                    </Button>
                                        </TableCell>
                          </TableRow>
                      ))}  
                    </TableBody>
                </Table>
            </TableContainer>
        )}

        </Box>

    </Box>
    
}
