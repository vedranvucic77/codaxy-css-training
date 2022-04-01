import { KeySelection } from "cx/ui";
import { Button, Checkbox, Grid } from "cx/widgets";

export const Overview = () => (
    <cx>
        <div class="overview">
            <div class="header">
                <h4>Customer Overview</h4>
                <Button mod="standard">Add Customer</Button>
            </div>

            <Grid
                records-bind="$page.customers"
                style={{ width: "100%", padding: "10px 16px 16px 16px" }}
                columns={[
                    {
                        header: {
                            items: (
                                <cx>
                                    <Checkbox
                                        value-bind="$page.selectAll"
                                        indeterminate
                                        unfocusable
                                    />
                                </cx>
                            ),
                        },
                        field: "selected",
                        style: "width: 1px",
                        items: (
                            <cx>
                                <Checkbox
                                    value-bind="$record.selected"
                                    unfocusable
                                />
                            </cx>
                        ),
                    },
                    {
                        header: "NAME",
                        field: "name",
                        sortable: true,
                        style: "padding-top: 12px; padding-bottom: 32px",
                    },
                    {
                        header: "DESCRIPTION",
                        field: "description",
                        sortable: true,
                        style: "padding-top: 12px; padding-bottom: 32px",
                    },
                    {
                        header: "STATUS",
                        field: "status",
                        sortable: true,
                        style: "padding-top: 12px; padding-bottom: 32px",
                    },
                    {
                        header: "RATE",
                        field: "rate",
                        sortable: true,
                        style: "padding-top: 12px; padding-bottom: 32px",
                    },
                ]}
                selection={{ type: KeySelection, bind: "$page.selection" }}
                sorters-bind="$page.sorters"
            />
        </div>
    </cx>
);
