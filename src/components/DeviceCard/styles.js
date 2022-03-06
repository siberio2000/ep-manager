import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    deviceCard: {
       padding: '5px',
       cursor: 'pointer',
       marginTop: '40px' 
    },
    title: {
        fontWeight: 'bold',
    },
    unselected: {
        border: 'none'
    },
    selected: {
        border: '5px solid #3F51B5'
    }
}));