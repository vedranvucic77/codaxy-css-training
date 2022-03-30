import { Button } from "cx/widgets";

export const Card = ({ title, desc, btn }) => (
    <cx>
        <div class="randomtext border boxshadow">
            <h2 class="title">{title}</h2>
            <p
                class="desc"
                style="-webkit-line-clamp: 3; max-width: 328px; height: 65px"
            >
                {desc}
            </p>
            <div style="margin-top: 65px"></div>
            <Button mod="hollow" class="read-more">
                {btn}
            </Button>
        </div>
    </cx>
);
