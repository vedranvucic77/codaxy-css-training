import { KeySelection } from "cx/ui";
import { Button, Grid } from "cx/widgets";

export const Overview = () => (
    <cx>
        <div class="overview">
            <div class="header">
                <h4>Customer Overview</h4>
                <Button mod="standard">Add Customer</Button>
            </div>

            <Grid
                records-bind="$page.customers"
                class="overview_grid"
                columns={[
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
            />
        </div>
    </cx>
);
