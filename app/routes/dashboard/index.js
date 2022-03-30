import { Button } from "cx/widgets";
import Controller from "./Controller";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div
                    class="phototext boxshadow border"
                    style="grid-column-start: 1; grid-column-end: 5"
                >
                    <div class="photo"></div>
                    <div>
                        <p>Author Name</p>
                        <h2>
                            The best way to learn CSS is by building something
                        </h2>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor ...
                        </h4>
                        <Button mod="primary">Build something</Button>
                    </div>
                </div>
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
        </div>
    </cx>
);
