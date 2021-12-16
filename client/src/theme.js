import { createTheme } from "@material-ui/core/styles";

export const theme = createTheme({
    typography: {
        fontFamily: "Roboto",
        h1: {
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "20px",
            color: "#555",
            lineHeight: "125%",
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
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "14px",
            color: "#d0011b",
            lineHeight: "125%",
        },
        h6: {
            fontStyle: "normal",
            fontWeight: 400,
            fontSize: "16px",
            color: "rgba(0,0,0,.87)",
            lineHeight: "125%",
        },
        subtitle1: {
            fontStyle: "normal",
            fontWeight: 500,
            fontSize: "17px",
            color: "#d0011b",
            lineHeight: "100%",
        },
    },
    palette: {},
});
