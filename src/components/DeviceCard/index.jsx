import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import useStyles from "./styles";
import cx from "classnames";

const DeviceCard = ({ devices, loading, selected, onClick }) => {
  const classes = useStyles();

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <Container maxWidth="md">
      <Grid container spacing={4}>
        {devices.map((device) => (
          <Grid item xs={12} sm={6} md={4} key={device.id}>
            <Card
              selected={selected[device.id]}
              onClick={() => onClick(device)}
              className={cx(classes.deviceCard, {
                [classes.selected]: selected[device.id],
                [classes.unselected]: !selected,
              })}
            >
              <CardContent sx={{ flexGrow: 1, m: 6 }}>
                <Typography gutterbottom="true" className={classes.title}>{device.deviceName}</Typography>
                <Typography>{device.ipAddress}</Typography>
                <Typography>{device.operatingSystem}</Typography>
                <Typography>{device.status}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default DeviceCard;
