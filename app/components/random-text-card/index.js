import { Button } from "cx/widgets";

export const RandomTextCard = ({ title, desc, btn }) => (
    <cx>
        <div class="randomtextcard">
            <h2 class="randomtextcard_title title">{title}</h2>
            <p class="randomtextcard_description line-clamp-2">{desc}</p>
            <Button mod="hollow" class="randomtextcard_readmore">
                {btn}
            </Button>
        </div>
    </cx>
);
