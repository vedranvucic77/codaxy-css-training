import { Button } from "cx/widgets";

export const Main = () => (
    <cx>
        <div class="main">
            <div class="main_photo"></div>
            <div class="main_content post">
                <p class="post_author">Author Name</p>
                <h2 class="post_title">
                    The best way to learn CSS is by building something
                </h2>
                <h4 class="post_description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam consectetur venenatis blandit. Praesent vehicula,
                    libero non pretium vulputate, lacus arcu facilisis lectus,
                    sed feugiat tellus nulla eu dolor. Nulla porta bibendum
                    lectus quis euismod. Aliquam volutpat ultricies porttitor.
                    Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae
                    dolor. Fusce scelerisque eleifend lectus in bibendum.
                    Suspendisse lacinia egestas felis a volutpat.
                </h4>
                <Button class="post_button" mod="primary">
                    Build Something
                </Button>
            </div>
        </div>
    </cx>
);
