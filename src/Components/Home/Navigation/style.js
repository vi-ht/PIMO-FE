import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    toolBar_style:{
      backgroundColor: 'rgba(0, 0, 0, 0) !important',
      minHeight :'1rem !important',
    },
    appBar_style:{
      backgroundColor: 'rgba(0, 0, 0, 0) !important',
    },
    nameOfMenu_Style:{
      marginTop:'0.4rem',
      backgroundColor: 'rgba(0, 0, 0, 0) !important',
      color:'white !important',
    },
    appName_style:{
        marginRight:'10px',
        fontSize:'25px',
        fontWeight:'800',
    },   
    searchInput_Style:{
      minHeight:'8px !important',
      color:'white !important',
      width:'35rem !important',
      border:'2px solid rgba(0, 0, 0, 0)',
      backgroundColor: 'rgba(0, 0, 0, 0) !important',
      fontSize:'10px',
      '::-webkit-input-placeholder':{
        color: 'while',
      },
    },
  } 
));
export default useStyles;
