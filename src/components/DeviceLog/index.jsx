import React, { useContext } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
} from "@material-ui/core";
import useStyles from "./styles";
import { LogsContext } from "../../utils/table";

const DeviceLog = () => {
  const {
    state: { logs },
  } = useContext(LogsContext);
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S.No</TableCell>
            <TableCell align="right">Action</TableCell>
            <TableCell align="right">Devices</TableCell>
            <TableCell align="right">Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {logs.map((row, index) => (
            <TableRow key={row.time}>
              <TableCell component="th" scope="row">
                {index + 1}
              </TableCell>
              <TableCell align="right"> {row.action}</TableCell>
              <TableCell align="right">
                {" "}
                {row.items.map((it) => it.deviceName).join(", ")}
              </TableCell>
              <TableCell align="right">
                {new Date(row.time).toLocaleString()}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DeviceLog;
