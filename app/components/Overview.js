import { KeySelection } from "cx/ui";
import { Button, Grid } from "cx/widgets";

export const Overview = () => (
    <cx>
        <div class="overview">
            <div class="overview_header">
                <h4 class="overview_title">Customer Overview</h4>
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
                    },
                    {
                        header: "DESCRIPTION",
                        field: "description",
                        sortable: true,
                    },
                    {
                        header: "STATUS",
                        field: "status",
                        sortable: true,
                    },
                    {
                        header: "RATE",
                        field: "rate",
                        sortable: true,
                    },
                ]}
            />
        </div>
    </cx>
);
