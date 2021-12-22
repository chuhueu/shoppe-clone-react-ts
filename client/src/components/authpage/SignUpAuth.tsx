import React, { useState } from "react";
import { Box, Typography, Grid, Button, Hidden } from "@material-ui/core";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import logo from "../../assets/images/auth/shopee-logo-big.png";
import facebookIcon from "../../assets/images/auth/facebook-logo.png";
import googleIcon from "../../assets/images/auth/google-logo.png";
import appleIcon from "../../assets/images/auth/apple-logo.png";
import InputForm from "./InputForm";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    styleWrapper: {
      backgroundColor: "rgb(238,77,45)",
      width: "100%",
      height: "calc(100vh - 84px)",
    },
    styleContainer: {
      maxWidth: "1200px",
      padding: "0 24px",
      margin: "0 auto",
      height: "100%",
      [theme.breakpoints.down("md")]: {
        padding: "0 16px",
      },
    },
    styleLeft: {
      height: "100%",
      width: "70%",
      margin: "0 auto",
      textAlign: "center",
    },
    styleRight: { height: "100%" },
    styleLogo: {
      width: "350px",
      height: "350px",
      marginBottom: "40px",
    },

    styleLogin: {
      backgroundColor: "#fff",
      width: "400px",
      boxShadow: "0 3px 10px 0 rgb(0 0 0 / 14%)",
      borderRadius: "0.25rem",
    },
    styleHeading: { padding: "22px 30px" },
    styleHeadingText: {
      color: "#222",
      fontFamily: "Roboto",
      fontSize: "1.25rem",
      fontWeight: 400,
      textTransform: "capitalize",
    },
    styleForm: {
      padding: "0 1.875rem",
      display: "flex",
      flexDirection: "column",
    },
    styleButton: {
      color: "#fff",
      backgroundColor: "#ee4d2d",
      boxShadow: "0 1px 1px rgb(0 0 0 / 9%)",
      height: "2.5rem",
      marginBottom: "1.275rem",
      "&:hover": {
        opacity: 0.91,
        backgroundColor: "#ee4d2d",
      },
    },
    styleLoginOther: {
      padding: "0 1.875rem 1.875rem 1.875rem",
    },
    styleOr: {
      paddingBottom: "0.875rem",
      "& div": {
        height: "1px",
        width: "100%",
        backgroundColor: "#dbdbdb",
        flex: 1,
      },
      "& span": {
        fontFamily: "Roboto",
        fontSize: "0.75rem",
        color: "#ccc",
        padding: "0 1rem",
        textTransform: "uppercase",
      },
    },
    styleButtonSocial: {
      flex: 1,
      margin: "0.3125rem",
      backgroundColor: "#1877f2",
      fontFamily: "Roboto",
      color: "#fff",
      fontSize: "0.875rem",
      borderRadius: "2px",
      height: "2.5rem",
      boxShadow: "0 1px 1px rgb(0 0 0 / 9%)",
      padding: "0.1rem",
      cursor: "pointer",
    },
    styleLogoSocial: {
      width: "2.5rem",
      height: "2.5rem",
      backgroundColor: "#fff",
      borderRadius: "2px",
    },
    styleLogoSocialImg: {
      width: "1.375rem",
      height: "1.375rem",
    },
    styleFormBottom: {
      padding: "0 1.875rem 1.875rem 1.875rem",
      textAlign: "center",
      "& span": {
        fontFamily: "Roboto",
        fontSize: "0.875rem",
        color: "rgba(0,0,0,.26)",
      },
    },
    styleLinkTo: {
      paddingLeft: "0.25rem",
      textDecoration: "none",
      color: "#ee4d2d",
    },
    styleFormRule: {
      padding: "0 1.875rem 1.875rem 1.875rem",
      textAlign: "center",
      "& span": {
        fontFamily: "Roboto",
        fontSize: "12px",
        color: "rgba(0,0,0,.87)",
      },
    },
  })
);

const SignUpAuth = () => {
  const classes = useStyles();

  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  interface valuesInput {
    id: number;
    name: string;
    type: string;
    placeholder: string;
    errorMessage: string;
    pattern?: string;
    required: boolean;
  }

  const inputs: Array<valuesInput> = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeholder: "Tên tài khoản",
      errorMessage:
        "Tên cần phải có từ 3-16 kí tự và không được chứa kí tự đặc biệt",
      pattern: "^[A-Za-z0-9]{3,16}$",
      required: true,
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      errorMessage: "Bạn phải nhập đúng địa chỉ email",
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Mật khẩu",
      errorMessage:
        "Mật khẩu phải từ 6-20 kí tự và bao gồm ít nhất 1 chữ,1 số và 1 kí tự đặc biệt",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,20}$`,
      required: true,
    },
    {
      id: 4,
      name: "confirmPassword",
      type: "password",
      placeholder: "Nhập lại mật khẩu",
      errorMessage: "Mật khẩu phải trùng nhau!",
      pattern: values.password,
      required: true,
    },
  ];

  const onChange = (e: any) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const submitHandler = (e: any) => {
    e.preventDefault();
  };

  return (
    <Box className={classes.styleWrapper}>
      <Box className={classes.styleContainer}>
        <Grid container justifyContent="center" style={{ height: "100%" }}>
          <Hidden mdDown>
            <Grid item lg={6}>
              <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
                className={classes.styleLeft}
              >
                <img src={logo} alt="" className={classes.styleLogo} />
                <Typography variant="overline">
                  Nền tảng thương mại điện tử yêu thích ở Đông Nam Á & Đài Loan
                </Typography>
              </Box>
            </Grid>
          </Hidden>
          <Grid item lg={6} md={12}>
            <Box
              display="flex"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              className={classes.styleRight}
            >
              <Box className={classes.styleLogin}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  className={classes.styleHeading}
                >
                  <p className={classes.styleHeadingText}>Đăng Ký</p>
                </Box>
                <form className={classes.styleForm}>
                  {inputs.map((input) => (
                    <InputForm
                      key={input.id}
                      {...input}
                      value={(values as any)[input.name]}
                      onChange={onChange}
                    />
                  ))}
                  <Button className={classes.styleButton}>Đăng Ký</Button>
                </form>
                <Box className={classes.styleLoginOther}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    className={classes.styleOr}
                  >
                    <div></div>
                    <span>HOẶC</span>
                    <div></div>
                  </Box>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      className={classes.styleButtonSocial}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        className={classes.styleLogoSocial}
                      >
                        <img
                          src={facebookIcon}
                          alt=""
                          className={classes.styleLogoSocialImg}
                        />
                      </Box>
                      <span>Facebook</span>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      className={classes.styleButtonSocial}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        className={classes.styleLogoSocial}
                      >
                        <img
                          src={googleIcon}
                          alt=""
                          className={classes.styleLogoSocialImg}
                        />
                      </Box>
                      <span>Google</span>
                    </Box>
                    <Box
                      display="flex"
                      alignItems="center"
                      justifyContent="space-between"
                      className={classes.styleButtonSocial}
                    >
                      <Box
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        className={classes.styleLogoSocial}
                      >
                        <img
                          src={appleIcon}
                          alt=""
                          className={classes.styleLogoSocialImg}
                        />
                      </Box>
                      <span>Apple</span>
                    </Box>
                  </Box>
                </Box>
                <Box className={classes.styleFormRule}>
                  <span>
                    Bằng việc đăng kí, bạn đã đồng ý với Shopee về
                    <Link to="#" className={classes.styleLinkTo}>
                      Điều khoản dịch vụ
                    </Link>
                    &
                    <Link to="#" className={classes.styleLinkTo}>
                      Chính sách bảo mật
                    </Link>
                  </span>
                </Box>
                <Box className={classes.styleFormBottom}>
                  <span>
                    Bạn đã có tài khoản?
                    <Link to="/login" className={classes.styleLinkTo}>
                      Đăng nhập
                    </Link>
                  </span>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SignUpAuth;
