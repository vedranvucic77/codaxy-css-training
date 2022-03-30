import { Chart, Gridlines, LineGraph, NumericAxis } from "cx/charts";
import { Svg } from "cx/svg";
import { Button } from "cx/widgets";
import { Infobtn } from "../../components/Infobtn";
import Controller from "./Controller";

export default (
    <cx>
        <div controller={Controller}>
            <div class="main">
                <div
                    class="phototext boxshadow border"
                    style="grid-column-start: 1; grid-column-end: 4"
                >
                    <div class="photo"></div>
                    <div>
                        <p>Author Name</p>
                        <h2 class="title">
                            The best way to learn CSS is by building something
                        </h2>
                        <h4 class="desc" style="-webkit-line-clamp: 2;">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod temporloremee ipsum dolor sit
                            amet, consectetur adipiscing elit, sed do eiusmod
                            temporLorem ipsum dolor sit amet, consectetur
                            adipiscing elit, sed do eiusmod tempor
                        </h4>
                        <Button mod="primary" style="margin-top: 18px;">
                            Build something
                        </Button>
                    </div>
                </div>
                <div
                    class="chart boxshadow border"
                    style="grid-column-start: 4; grid-column-end: 7"
                >
                    <div>
                        <h2 class="title">Line Chart</h2>
                        <h4
                            class="desc"
                            style="-webkit-line-clamp: 3; width: 162px; height: 65px"
                        >
                            Lorem ipsum dolor sitLorem ipsum dolor sit amet,
                            consectetur adipiscing elit...Lorem ipsum dolor sit
                            amet, consectetur adipiscing elit... amet,
                            consectetur adipiscing elitrarararara
                        </h4>
                        <Infobtn text="See Analysis"></Infobtn>
                    </div>
                    <Svg style="width:270px; height:200px; margin-right: 32px;">
                        <Chart
                            offset="20 -10 -40 40"
                            axes={{
                                x: { type: NumericAxis },
                                y: { type: NumericAxis, vertical: true },
                            }}
                        >
                            <Gridlines />
                            <LineGraph
                                name="Line 1"
                                data:bind="$page.points"
                                colorIndex={0}
                                yField="y1"
                                active:bind="$page.line1"
                            />
                            <LineGraph
                                name="Line 2"
                                data:bind="$page.points"
                                colorIndex={5}
                                yField="y2"
                                active:bind="$page.line2"
                            />
                            <LineGraph
                                name="Line 3"
                                data:bind="$page.points"
                                colorIndex={10}
                                yField="y3"
                                active:bind="$page.line3"
                            />
                            <LineGraph
                                name="Line 4"
                                data:bind="$page.points"
                                colorIndex={2}
                                yField="y4"
                                active:bind="$page.line4"
                            />
                        </Chart>
                    </Svg>
                </div>
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
