import React from "react";
import { Router } from "@reach/router";
import MainHeader from "./MainHeader";
import "./App.css";
import { Dashboard } from "./routes/Dashboard";
import { Accounts } from "./routes/Accounts";
import { Transactions } from "./routes/Transactions";
import { Reports } from "./routes/Reports";
import { FileCabinet } from "./routes/FileCabinet";
import { Administration } from "./routes/Administration";
import { ExceptionsShadeRoute } from "./routes/ExceptionsShadeRoute";
import { ApprovalsShadeRoute } from "./routes/ApprovalsShadeRoute";
import { NotFound } from "./routes/NotFound";
import { Logout } from "./routes/Logout";
import { getCookie } from "./utils/getCookie";
import Footer from "./components/Footer/Footer";
import { useMediaQuery } from "react-responsive";
import Drawer from "./components/Footer/Mobile/Drawer";
import FloatingIcon from "./components/Footer/Mobile/FloatingIcon";

const baseUrl = `${process.env.PUBLIC_URL || ""}`;

export default () => {
  const isDesktop = useMediaQuery({ query: "(min-width: 480px)" });
  const isMobile = !isDesktop;

  const RootComponent = ({ children }) => (
    <div>
      <MainHeader />
      {children}
    </div>
  );

  if (!getCookie("isLoggedIn")) {
    document.location = `${baseUrl}/login.html`;
    return <div />;
  }
  return (
    <>
      <Router>
        <RootComponent path={`/`}>
          <Dashboard path={`${baseUrl}/`} />
          <Accounts path={`${baseUrl}/accounts`} />
          <Transactions path={`${baseUrl}/transactions`} />
          <Reports path={`${baseUrl}/reports`} />
          <FileCabinet path={`${baseUrl}/file-cabinet`} />
          <Administration path={`${baseUrl}/administration`} />
          <ExceptionsShadeRoute path={`${baseUrl}/exceptions/items/:keyName`} />
          <ApprovalsShadeRoute path={`${baseUrl}/approvals/items/:keyName`} />
        </RootComponent>
        <Logout path={`${baseUrl}/logout`} />
        <NotFound default />
      </Router>
      <footer>
        {isMobile && (
          <>
            <Drawer /> <FloatingIcon />
          </>
        )}
        {isDesktop && <Footer />}
      </footer>
    </>
  );
};
