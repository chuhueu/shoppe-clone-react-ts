import { Box, Hidden, Grid, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import { makeStyles, createStyles, Theme } from "@material-ui/core/styles";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleBox: {
      position: "relative",
      margin: "-24px",
      "& img": {
        width: "100%",
      },
    },
    styleGrid: {
      "&:hover": {
        transform: "translateY(-2px)",
      },
    },
    styleLink: {
      textDecoration: "none",
      color: "#fff",
      "&:hover div:nth-child(2)": {
        visibility: "visible",
      },
    },
    styleText: {
      background: "#fff",
      "&:hover": {
        border: "1px solid #ee4d2d",
      },
      "& p": {
        color: "rgba(0,0,0,.87)",
        lineHeight: "14px",
        fontSize: ".75rem",
        overflow: "hidden",
        display: "-webkit-box",
        textOverflow: "ellipsis",
        "-webkit-box-orient": "vertical",
        "-webkit-line-clamp": 2,
      },
      "& span": {
        color: "#ee4d2d",
      },
      "& div:nth-child(2)": {
        color: "rgba(0,0,0,.54)",
        fontSize: ".75rem",
      },
    },
    styleFind: {
      visibility: "hidden",
      height: "1.875rem",
      backgroundColor: "#ee4d2d",
      position: "absolute",
      width: "187px",
      borderRadius: "0px 0px 3px 3px",
    },
  })
);
const ListChristmas = () => {
  const classes = useStyles();
  const list = [];
  for (let i = 0; i < 12; i++) {
    list.push(
      <Grid item xs={6} sm={4} md={2} key={`product-${i + 1}`}>
        <Link to="/" className={classes.styleLink}>
          <Box className={classes.styleText}>
            <img src={`/images/listproduct/product-${i + 1}.png`} alt="" />
            <Box padding={1}>
              <Typography>
                Set nguyên liệu đầy đủ làm kẹo sữa hạt NOUGAT 750G - Tự làm kẹo
                sữa hạt
              </Typography>
              <Box
                mt={2}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Box>
                  <Box component="span" fontSize=".75rem">
                    đ
                  </Box>
                  <Box component="span" fontSize="1rem">
                    190.000
                  </Box>
                </Box>
                <Box>47 sold</Box>
              </Box>
            </Box>
          </Box>
          <Hidden mdDown>
            <Box textAlign="center" className={classes.styleFind}>
              Find Similar
            </Box>
          </Hidden>
        </Link>
      </Grid>
    );
  }
  return (
    <Box pt={1} className={classes.styleBox}>
      <Grid
        container
        justifyContent="center"
        spacing={2}
        className={classes.styleGrid}
      >
        {list}
      </Grid>
    </Box>
  );
};

export default ListChristmas;
