import { Button } from "cx/widgets";

export const Card = ({ title, desc, btn }) => (
    <cx>
        <div class="card">
            <h2 class="card_title">{title}</h2>
            <p class="card_desc">{desc}</p>
            <Button mod="hollow" class="card_readmore">
                {btn}
            </Button>
        </div>
    </cx>
);
