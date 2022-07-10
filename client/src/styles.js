import { makeStyles } from "@material-ui/core/styles";

export default makeStyles(() => ({
    appBar: {
      borderRadius: 15,
      backgroundColor: '#EB1D36',
      margin: '30px 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    heading: {
      color: '#F5EDDC',
    },
    image: {
      marginLeft: '15px',
      height: '5vmax',
      marginBottom: '2px',
      marginTop:'2px',
    },

    formButton:{
      position:'fixed',
      bottom:'2vmax',
      right:'9.5vmax',
      zIndex:'1000',
      // height:'5vmax',
      // width:'5vmax',
      backgroundColor:'#EB1D36',
      color:'#F5EDDC',
    }
    
    
  }));