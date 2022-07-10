import { Container, CssBaseline, ThemeProvider } from "@mui/material";
import { useEffect } from "react";
import Appbar from "./components/appbar/Appbar";
// import Navbar from "./components/Navbar";
import { theme } from "./styles/Theme";
function App() {
  useEffect(() => {
    document.title = "Azure app";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar />
      {/* <Container maxWidth="xl" sx={{ backgroundColor: "white" }}>
        <Appbar />
      </Container> */}
    </ThemeProvider>
  );
}

export default App;

