import { Button } from "cx/widgets";

export const RandomTextCard = ({ title, desc, btn }) => (
    <cx>
        <div class="randomtextcard flex-col">
            <h2 class="randomtextcard_title title">{title}</h2>
            <p class="randomtextcard_description line-clamp-3">{desc}</p>
            <Button mod="hollow" class="randomtextcard_readmore margin-top-4">
                {btn}
            </Button>
        </div>
    </cx>
);
