import { Box, Card,CardContent, Grid, Typography} from '@mui/material'
import { Link } from 'react-router-dom';
import { Board } from '../../types';

interface Props {
    board:Board
}

const BoardCard = (props: Props) => {
    const {board}=props;
    return (
            <Grid xs item key={board.id}>                  
                <Link to={`board/${board.id}`} state={board.name} style={{ textDecoration: 'none'}}  >
                    <Box sx={{ minWidth: 150}} >         
                        <Card >
                            <CardContent>
                                <Typography variant="h6" component="div">
                                    {board.name} 
                                </Typography>
                            </CardContent>
                        </Card>
                    </Box>
                </Link>
            </Grid>
    )           
}

export default BoardCard
