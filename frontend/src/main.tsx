import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { StyledEngineProvider } from "@mui/material/styles";
import { theme } from "./theme.ts";
import { CssBaseline } from "@mui/material";

ReactDOM.createRoot(document.getElementById("root")!).render(
    // <React.StrictMode>

    <StyledEngineProvider injectFirst>
        <Provider store={store}>
            <CssBaseline />
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </StyledEngineProvider>,
    // </React.StrictMode>,
);
