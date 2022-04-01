import { KeySelection } from "cx/ui";
import { Grid } from "cx/widgets";

export const Overview = () => (
    <cx>
        <div class="overview boxshadow border">
            <Grid
                records-bind="$page.records"
                style={{ width: "100%" }}
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
