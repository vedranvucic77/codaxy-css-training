import { FirstVisibleChildLayout } from "cx/ui";
import { Sandbox } from "cx/widgets";
import AppLayout from "../layout";

export default () => (
    <cx>
        <Sandbox
            key-bind="url"
            storage-bind="pages"
            outerLayout={AppLayout}
            layout={FirstVisibleChildLayout}
        >
            <div class="main">
                <div
                    class="box"
                    style="grid-column-start: 1; grid-column-end: 5"
                ></div>
                <div
                    class="box"
                    style="grid-column-start: 5; grid-column-end: 7"
                ></div>
                <div
                    class="text"
                    style="grid-row-start: 2; grid-column-start: 1; grid-column-end: 5"
                >
                    <div class="box"></div>
                    <div class="box"></div>
                </div>
                <div
                    class="box"
                    style="grid-row-start: 2; grid-column-start: 5; grid-column-end: 7"
                ></div>
                <div
                    class="box"
                    style="grid-row-start: 3; grid-column-start: 1; grid-column-end: 7"
                ></div>
            </div>
        </Sandbox>
    </cx>
);
