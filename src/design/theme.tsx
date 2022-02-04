import { createTheme} from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    background: {
      default: "#E7EBF0"
    },
    secondary: {
      main: '#ffffff'
    } 
  },
  typography: {
    h4: {
      marginBottom: '0.5em'
    }
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: 'text' },
          style: {
            justifyContent: 'left'
          }
        }
      ]
    },
    MuiContainer: {
      defaultProps: {  
        maxWidth:false,  
        sx: {
          overflow: 'auto',
          padding:"2em"
        }
      }
    },
    MuiStack: {
      defaultProps: {  
        bgcolor : "#95999e",
         padding: "1em",
         borderRadius: "2px",
        sx: {
          minWidth: '200px'
        }
      }
    }
  }
});

