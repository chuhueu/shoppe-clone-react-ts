import PropTypes from "prop-types";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  ListItem,
  ListItemText,
  List,
  TextField,
} from "@material-ui/core";
interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: any;
  value: any;
  className: any;
}
const useStyles = makeStyles((theme) => ({
  styleList: {
    maxHeight: 200,
    overflow: "auto",
  },
  styleTab: {
    "& > div": {
      padding: "unset",
    },
  },
  styleTypography: {
    color: "#222",
    fontSize: "16px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: 300,
    lineHeight: "125%",
  },
}));
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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
interface Item {
  value: number;
  label: any;
}
interface Props {
  value: number;
  handleChange: any;
  handleCity: any;
  handleDistrict: any;
  handleWard: any;
  cityOptions: any;
  districtOptions: any;
  wardOptions: any;
}
export default function ChooseAddress({
  value,
  handleChange,
  handleCity,
  handleDistrict,
  handleWard,
  cityOptions,
  districtOptions,
  wardOptions,
}: Props) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="static"
        color="default"
        style={{ backgroundColor: "#fff" }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Tỉnh/Thành Phố" />
          <Tab label="Quận/Huyện" />
          <Tab label="Phường/Xã" />
        </Tabs>
      </AppBar>
      <TabPanel
        value={value}
        index={0}
        dir={theme.direction}
        className={classes.styleTab}
      >
        <List className={classes.styleList}>
          {cityOptions.map((item: Item) => {
            return (
              <ListItem button key={item.value}>
                <ListItemText
                  primary={item.label}
                  onClick={() => handleCity(item)}
                />
              </ListItem>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel
        value={value}
        index={1}
        dir={theme.direction}
        className={classes.styleTab}
      >
        <List className={classes.styleList}>
          {districtOptions.map((item: Item) => {
            return (
              <ListItem button key={item.value}>
                <ListItemText
                  primary={item.label}
                  onClick={() => handleDistrict(item)}
                />
              </ListItem>
            );
          })}
        </List>
      </TabPanel>
      <TabPanel
        value={value}
        index={2}
        dir={theme.direction}
        className={classes.styleTab}
      >
        <List className={classes.styleList}>
          {wardOptions.map((item: Item) => {
            return (
              <ListItem button key={item.value}>
                <ListItemText
                  primary={item.label}
                  onClick={() => handleWard(item)}
                />
              </ListItem>
            );
          })}
        </List>
      </TabPanel>
    </>
  );
}
