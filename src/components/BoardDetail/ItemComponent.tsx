import { Item} from '../../types'
import { Box, Card,  CardContent, Typography} from '@mui/material'


interface Props {
    item:Item
}

const ItemComponent = (props: Props) => {
    const {item}=props
    return (
        <Box sx={{ minWidth: 150}} >         
            <Card>
                <CardContent>
                    <Typography variant="body1" component="div">{item.name} </Typography>
                </CardContent>
            </Card>
       </Box>
    )
}

export default ItemComponent
