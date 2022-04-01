import { FirstVisibleChildLayout } from "cx/ui";
import { Route, Sandbox } from "cx/widgets";
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
            <Route path="~/dashboard" url-bind="url">
                <Dashboard />
            </Route>
        </Sandbox>
    </cx>
);
