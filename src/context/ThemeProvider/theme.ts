import {
  createTheme,
  PaletteMode,
  responsiveFontSizes,
} from "@mui/material/styles";
import { Poppins } from "next/font/google";

export const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

const theme = responsiveFontSizes(
  createTheme({
    cssVariables: true, // Enables CSS variables
    components: {
      // reset the default styles of the components
      MuiCssBaseline: {
        styleOverrides: `
      *, *::before, *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      },
      html{
        font-size: 14px;
        scroll-behaviour: smooth;
      },
      `,
      },
      MuiLink: {
        defaultProps: {
          underline: "none",
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
        },
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            variants: [
              {
                props: { variant: "outlined" },
                style: {
                  border: "1px solid #F2F2F2",
                },
              },
            ],
          },
        },
      },
      MuiContainer: {
        defaultProps: {
          maxWidth: "xl",
        },
        styleOverrides: {
          root: {
            "@media (min-width: 0px)": {
              paddingLeft: 0,
              paddingRight: 0,
              maxWidth: "100%",
            },
          },
        },
      },
    },
    typography: {
      fontFamily: poppins.style.fontFamily, // or fontFamily: "var(--font-poppins)",
    },
    colorSchemes: {
      light: {
        palette: {
          mode: "light" as PaletteMode,
          primary: {
            main: "#5C6BC0", // Vibrant blue
            light: "#8E99F3", // Softer blue
            dark: "#26418F", // Deep blue
            50: "#E3F2FD", // Lightest blue
            100: "#BBDEFB", // Light blue
          },
          secondary: {
            main: "#FF8A65", // Soft coral
            50: "#FFF3E0", // Light coral
            100: "#FFE0B2", // Mellow orange
          },
          error: {
            main: "#E53935", // Bright red
            50: "#FFEBEE", // Light red
            100: "#FFCDD2", // Soft red
          },
          success: {
            main: "#43A047", // Forest green
            light: "#76D275", // Light green
            100: "#C8E6C9", // Pale green
            50: "#E8F5E9", // Lightest green
          },
          info: {
            main: "#039BE5", // Bright sky blue
            light: "#63CCFF", // Pale blue
            dark: "#0277BD", // Deep blue
            50: "#E1F5FE", // Light blue tint
            100: "#B3E5FC", // Mellow blue
          },
        },
      },
      dark: {
        palette: {
          mode: "dark" as PaletteMode,
          primary: {
            main: "#90CAF9", // Soft blue
            light: "#E3F2FD", // Pale blue
            dark: "#1565C0", // Deep rich blue
            50: "#212121", // Dark gray
            100: "#424242", // Medium gray
          },
          secondary: {
            main: "#FF7043", // Vibrant orange
            50: "#FFF3E0", // Soft orange
            100: "#FFE0B2", // Mellow orange
          },
          error: {
            main: "#EF5350", // Bright coral red
            50: "#FFEBEE", // Pale coral
            100: "#FFCDD2", // Light coral
          },
          success: {
            main: "#66BB6A", // Soft green
            light: "#81C784", // Mellow green
            100: "#A5D6A7", // Light green
            50: "#C8E6C9", // Pale green
          },
          info: {
            main: "#29B6F6", // Bright blue
            light: "#81D4FA", // Light blue
            dark: "#0288D1", // Rich blue
            50: "#B3E5FC", // Soft blue tint
            100: "#E1F5FE", // Light blue wash
          },
        },
      },
    },
  })
);

export default theme;
