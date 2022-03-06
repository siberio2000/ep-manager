import React from "react";
import { Box, Button, Container } from "@material-ui/core";
import useStyles from "./styles";
import { DeviceLog } from "../components";
import { Link } from "react-router-dom";

const LogTable = ({}) => {
  const classes = useStyles();

  return (
    <Box mx="auto" className={classes.mainBox}>
      <Container>
        <Box className={classes.buttonBox}>
          <Link to="/">
            <Button
              spacing={2}
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Back
            </Button>
          </Link>
        </Box>
        <DeviceLog />
      </Container>
    </Box>
  );
};

export default LogTable;
