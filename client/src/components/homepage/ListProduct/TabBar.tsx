import React from "react";
import { Container } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import ListProduct from "./ListProduct";
import ListChristmas from "./ListChristmas";
interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleAppBar: {
      backgroundColor: "#fff",
      color: "rgb(238, 77, 45)",
      "& button": {
        padding: "20px",
      },
      "& button span": {
        fontSize: "17px",
        fontWeight: "500",
      },
      "& button:nth-child(2) span": {
        backgroundImage: `url("/images/listproduct/christmas.png")`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "contain",
        backgroundPosition: "center",
        width: "100%",
      },
    },
  })
);

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}

const TabBar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Container>
      <AppBar position="static" className={classes.styleAppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
        >
          <Tab label="DAILY DISCOVER" {...a11yProps(0)} />
          <Tab {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ListProduct />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ListChristmas />
      </TabPanel>
    </Container>
  );
};
export default TabBar;
