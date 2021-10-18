import React from "react";
import {BrowserRouter, Route , Switch } from 'react-router-dom';
import AddExpencePage from "../components/AddExpencePage";
import EditExpencePage from "../components/EditExpencePage";
import ExpenceDashboardPage from "../components/ExpenceDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
                <Switch>
                    <Route path="/" component={ExpenceDashboardPage} exact={true}/>
                    <Route path="/create" component={AddExpencePage}/>
                    <Route path="/edit/:id" component={EditExpencePage}/>
                    <Route path="/help" component={HelpPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
        </div>
    </BrowserRouter>
)


export default AppRouter;