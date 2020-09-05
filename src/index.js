import App from './app';
function Index(){
    return(
    <div  >
    <img style={styles.btn} src='https://image.flaticon.com/icons/svg/838/838479.svg'></img>
    </div>)
  }

  const styles = { 
    btn : {
        width: 50,
        height:50,
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        borderBottomLeftRadius: 25,
        position: 'fixed',
    bottom : '5rem',
    right: '5rem'
    },
    btn2:{
        position: 'fixed',
        width: 50,
        height:50,
        borderRadius: 25
    }
    }