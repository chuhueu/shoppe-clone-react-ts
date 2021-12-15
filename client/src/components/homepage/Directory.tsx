import { Box, Grid, Container, Typography } from "@material-ui/core";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import tShirt from "../../assets/images/directory/t-shirt.png";
import womenFashion from "../../assets/images/directory/womenFashion.png";
import phone from "../../assets/images/directory/phone.png";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleContainer: {
      marginTop: theme.spacing(2),
    },
    styleTitle: {
      background: "#fff",
      height: "3.75rem",
      borderBottom: "1px solid rgba(0,0,0,.05)",
      padding: "0 1.25rem",
      "& p": {
        color: "rgba(0,0,0,.54)",
        fontWeight: 500,
        textTransform: "uppercase",
      },
    },
    styleDirectory: {
      background: "#fff",
      "& img": {
        width: "100px",
      },
    },
    styleLink: {
      width: "10%",
      "& a": {
        textDecoration: "none",
        borderRight: "1px solid rgba(0,0,0,.05)",
        borderBottom: "1px solid rgba(0,0,0,.05)",
        position: "relative",
        display: "block",
        padding: "14px",
      },
      "& a p": {
        color: "rgba(0,0,0,.8)",
        fontSize: ".875rem",
        textDecoration: "none",
        lineHeight: "1.25rem",
        height: "2.5rem",
        marginBottom: ".625rem",
      },
    },
  })
);

const Directory = () => {
  const classes = useStyles();
  return (
    <Container className={classes.styleContainer}>
      <Box display="flex" alignItems="center" className={classes.styleTitle}>
        <Typography>Directory</Typography>
      </Box>
      <Box
        position="relative"
        width="100%"
        height="100%"
        overflow="hidden"
        textAlign="center"
        className={classes.styleDirectory}
      >
        <Box display="flex" className={classes.styleLink}>
          <Box>
            <Link to="/">
              <img src={tShirt} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={phone} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={tShirt} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={phone} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={tShirt} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={phone} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={tShirt} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={phone} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={tShirt} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
          <Box>
            <Link to="/">
              <img src={phone} alt="" />
              <Typography>Men's Fashion</Typography>
            </Link>
            <Link to="/">
              <img src={womenFashion} alt="" />
              <Typography>Women's Fashion</Typography>
            </Link>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Directory;
