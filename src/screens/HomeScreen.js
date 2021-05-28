import React, { useEffect, useState } from 'react';
import {Box,Card,CardActionArea,Typography} from '@material-ui/core';
import TouchAppIcon from '@material-ui/icons/TouchApp';
import {useStyles} from '../styles';
import Logo from '../components/Logo';


export default function HomeScreen(props) {
    const styles = useStyles();
    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });


    return (
     
       
       <Card>
           <CardActionArea onClick={() => props.history.push('/choose')}>
               <Box className={[styles.root, styles.red]}>
                    <Box className={[styles.main, styles.center]}>
                        <Typography component="h6" variant="h6">
                            Fast & Easy
                        </Typography>
                        <Typography component="h1" variant="h1">
                           Order <br/> & pay <br/> here
                        </Typography>
                        <TouchAppIcon fontSize="large"></TouchAppIcon>
                        <p></p>
                        <Typography component="h4" variant="h4">
                        Time : {date.toLocaleTimeString()}
                        </Typography>
                       
                    </Box>
                        <Box className={[styles.center, styles.green]}>
                            <Logo large></Logo>
                            <Typography component="h4" variant="h4">
                                Touch to Start
                            </Typography>
                            
                        </Box>
                      
               </Box>
           </CardActionArea>
       </Card>
    );
}
