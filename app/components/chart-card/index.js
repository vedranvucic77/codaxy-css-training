import { Button } from "cx/widgets";

export const ChartCard = ({
    title,
    description,
    buttonText,
    children,
    className,
}) => (
    <cx>
        <div class="chartcard padding-10x" className={className}>
            <div class="chartcard_post">
                <h2 class="chartcard_title title" text={title} />
                <p class="line-clamp-3" text={description} />
                <Button
                    class="chartcard_button"
                    mod="secondary"
                    text={buttonText}
                />
            </div>
            {children}
        </div>
    </cx>
);
