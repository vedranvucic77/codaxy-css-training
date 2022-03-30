import { FirstVisibleChildLayout } from "cx/ui";
import { RedirectRoute, Route, Sandbox } from "cx/widgets";

import AppLayout from "../layout";
import Dashboard from "./dashboard";
export default () => (
    <cx>
        <Sandbox
            key-bind="url"
            storage-bind="pages"
            outerLayout={AppLayout}
            layout={FirstVisibleChildLayout}
        >
            <RedirectRoute route="~/" redirect="~/dashboard" url-bind="url" />

            <Route url-bind="url" path="~/dashboard">
                <Dashboard />
            </Route>
        </Sandbox>
    </cx>
);
