import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  title: {
    paddingBottom: '35px',
    fontSize: '25px',
  },
  mainBox: {
    paddingTop: '100px',
    maxWidth: '900px',
    width: '100%',
  },
  table: {
    minWidth: 650,
  },
  buttonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    flexWrap: 'wrap',
  },
  button: {
    justifyContent: 'space-evenely',
    width: '150px',
    padding: '10px',
    marginLeft: '20px !important',
    marginBottom: '20px !important',
    [theme.breakpoints.down('xs')]: {
      width: '100%',
    },
  }
}));
