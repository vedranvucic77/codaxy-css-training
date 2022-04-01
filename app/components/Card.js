import { Button } from "cx/widgets";

export const Card = ({ title, desc, btn }) => (
    <cx>
        <div class="card">
            <h2 class="title">{title}</h2>
            <p class="desc">{desc}</p>
            <div style="margin-top: 65px"></div>
            <Button mod="hollow" class="read-more">
                {btn}
            </Button>
        </div>
    </cx>
);
