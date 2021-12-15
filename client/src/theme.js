import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
    typography: {
        fontFamily: "Roboto",
        h1: {
            fontStyle: "normal",
            fontWeight: 600,
            fontSize: "36px",
            lineHeight: "125%",
            color: "#091156",
            letterSpacing: "0em",
        },
        h2: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            color: "#fff",
            lineHeight: "125%",
        },
        h3: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "13px",
            color: "#fff",
            lineHeight: "125%",
        },
        h4: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            color: "rgba(0,0,0,.87)",
            lineHeight: "125%",
        },
        h5: {
            color: "#8B8B8B",
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: "14px",
            lineHeight: "21px",
            letterSpacing: "0.1em",
        },
        h6: {
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "48px",
            lineHeight: "125%",
            color: "#FFFFFF",
            marginBottom: "15px",
        },
    },
    palette: {},
});
