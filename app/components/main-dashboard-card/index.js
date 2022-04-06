import { Button } from "cx/widgets";

export const MainDashboardPost = ({ className }) => (
    <cx>
        <div class="maindashboardcard" className={className}>
            <div class="maindashboardcard_photo"></div>
            <div class="maindashboardcard_content post padding-right-10">
                <div class="post_author">Author Name</div>
                <h2 class="post_title title">
                    The best way to learn CSS is by building something
                </h2>
                <p class="line-clamp-2 margin-top-8">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aliquam consectetur venenatis blandit. Praesent vehicula,
                    libero non pretium vulputate, lacus arcu facilisis lectus,
                    sed feugiat tellus nulla eu dolor. Nulla porta bibendum
                    lectus quis euismod. Aliquam volutpat ultricies porttitor.
                    Cras risus nisi, accumsan vel cursus ut, sollicitudin vitae
                    dolor. Fusce scelerisque eleifend lectus in bibendum.
                    Suspendisse lacinia egestas felis a volutpat.
                </p>
                <Button class="post_button" mod="primary">
                    Build Something
                </Button>
            </div>
        </div>
    </cx>
);
