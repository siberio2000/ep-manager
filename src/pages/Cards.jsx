import React, { useState, useEffect, useContext } from "react";
import { DeviceCard } from "../components";
import { Box, Button, Container } from "@material-ui/core";
import axios from "axios";
import { LogsContext } from "../utils/table";
import useStyles from "./styles";
import { Link } from "react-router-dom";

// Uncomment for json backup

// import json from "../data.json";
// const devices = json;

const Cards = () => {
  const classes = useStyles();
  const { addLog } = useContext(LogsContext);

  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(false); // we use loading since we're fetching data from an API
  const [selected, setSelected] = useState({});

  const fetchDevices = async () => {
    setLoading(true); // set loading to true because we're in the process of fetching
    const response = await axios.get(
      "https://api.mockaroo.com/api/08100050?count=1000&key=3e2ade60"
    );
    setDevices(response.data);
    setLoading(false); // set loading back to false
  };

  useEffect(() => {
    fetchDevices();
  }, []);

  // Switch on/off card (show if selected) 
  const addDevices = (device) => {
    setSelected((state) => ({ ...state, [device.id]: !state[device.id] }));
  };

  const onAction = (action) => {
    const ids = Object.entries(selected)
      .filter(([, value]) => value)
      .map(([key]) => Number(key));
    const selectDevices = devices.filter((it) => ids.includes(it.id));
    addLog(selectDevices, action);
  };

  return (
    <Box mx="auto" className={classes.mainBox}>
      <Container>
        <Box className={classes.title}>Available Endpoints</Box>
        <Box className={classes.buttonBox}>
          <Button
            component={Link}
            to="/logs"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Table
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => onAction("Scan")}
            className={classes.button}
          >
            Scan
          </Button>
          <Button
            variant="contained"
            onClick={() => onAction("Terminate")}
            className={classes.button}
          >
            Terminate
          </Button>
        </Box>
      </Container>
      <DeviceCard
        devices={devices}
        loading={loading}
        onClick={addDevices}
        selected={selected}
      />
    </Box>
  );
};

export default Cards;
