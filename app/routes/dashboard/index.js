import {
    Chart,
    Column,
    Gridlines,
    LineGraph,
    Marker,
    NumericAxis,
    CategoryAxis,
} from "cx/charts";
import { Svg } from "cx/svg";
import { Button, Repeater } from "cx/widgets";

import { Card } from "../../components/Card";
import { Main } from "../../components/Main";
import { Overview } from "../../components/Overview";
import { columnSelection } from "./Controller";
import Controller from "./Controller";

export default (
    <cx>
        <div
            controller={Controller}
            className="dashboard min_margin"
            class={{
                full_margin: { expr: "!{page.sidebar}" },
            }}
        >
            <Main />

            <div class="chart">
                <div class="about">
                    <h2 class="title">Line Chart</h2>
                    <p class="description">
                        Lorem ipsum dolor sitLorem ipsum dolor sit amet,
                        consectetur adipiscing elit...Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit amet, consectetur
                        adipiscing elitrarararara
                    </p>
                    <Button style="margin-top: 24px;" mod="standard">
                        See Analysis
                    </Button>
                </div>
                <Svg class="svgchart">
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
                            colorIndex={3}
                            yField="y1"
                            active:bind="$page.line1"
                        />
                        <LineGraph
                            name="Line 2"
                            data:bind="$page.points"
                            colorIndex={1}
                            yField="y2"
                            active:bind="$page.line2"
                        />
                        <LineGraph
                            name="Line 3"
                            data:bind="$page.points"
                            colorIndex={2}
                            yField="y3"
                            active:bind="$page.line3"
                        />
                        <LineGraph
                            name="Line 4"
                            data:bind="$page.points"
                            colorIndex={0}
                            yField="y4"
                            active:bind="$page.line4"
                        />
                        <Repeater
                            records:bind="$page.points"
                            recordAlias="$point"
                        >
                            <Marker
                                x-bind="$point.x"
                                y-bind="$point.y1"
                                colorIndex={3}
                            />
                            <Marker
                                x-bind="$point.x"
                                y-bind="$point.y2"
                                colorIndex={1}
                            />
                            <Marker
                                x-bind="$point.x"
                                y-bind="$point.y3"
                                colorIndex={2}
                            />
                            <Marker
                                x-bind="$point.x"
                                y-bind="$point.y4"
                                colorIndex={1}
                            />
                        </Repeater>
                    </Chart>
                </Svg>
            </div>

            <div class="card_carrier">
                <Card
                    title="Some random text instead of a really long title"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredoloredoloredoloredoloredolore"
                    btn="Read More"
                />
                <Card
                    title="Some random text instead of a really long title"
                    desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et doloredoloredoloredoloredoloredolore"
                    btn="Read More"
                />
            </div>

            <div class="chart box_chart">
                <div class="about">
                    <h2 class="title">Line Chart</h2>
                    <p class="description">
                        Lorem ipsum dolor sitLorem ipsum dolor sit amet,
                        consectetur adipiscing elit...Lorem ipsum dolor sit
                        amet, consectetur adipiscing elit amet, consectetur
                        adipiscing elitrarararara
                    </p>
                    <Button style="margin-top: 24px;" mod="standard">
                        See Analysis
                    </Button>
                </div>
                <Svg class="svgchart">
                    <Chart
                        offset="20 -20 -30 40"
                        axes={{
                            x: { type: CategoryAxis },
                            y: {
                                type: NumericAxis,
                                vertical: true,
                                snapToTicks: 0,
                            },
                        }}
                    >
                        <Gridlines />
                        <Repeater records-bind="$page.bars" recordAlias="$bar">
                            <Column
                                colorIndex-expr="0"
                                width={0.7}
                                offset={0}
                                x-bind="$bar.x"
                                y-bind="$bar.v1"
                                tooltip-tpl="{$bar.x} {$bar.v1:n}"
                                selection={columnSelection}
                            />

                            <Column
                                colorIndex-expr="1"
                                width={0.7}
                                offset={0}
                                x-bind="$bar.x"
                                y0-bind="$bar.v1"
                                y-bind="$bar.v2"
                                tooltip="X2"
                                selection={columnSelection}
                            />

                            <Column
                                colorIndex-expr="2"
                                width={0.7}
                                offset={0}
                                x-bind="$bar.x"
                                y0-bind="$bar.v2"
                                y-bind="$bar.v3"
                                tooltip="X2"
                                selection={columnSelection}
                            />
                            <Column
                                colorIndex-expr="3"
                                width={0.7}
                                offset={0}
                                x-bind="$bar.x"
                                y0-bind="$bar.v3"
                                y-bind="$bar.v4"
                                tooltip="X3"
                                selection={columnSelection}
                            />
                        </Repeater>
                    </Chart>
                </Svg>
            </div>

            <Overview />
        </div>
    </cx>
);
