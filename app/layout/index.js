import { ContentPlaceholder } from "cx/ui";
import Controller from "./Controller";

export default (
    <cx>
        <div
            controller={Controller}
            class={{
                layout: true,
            }}
        >
            <main
                class={{
                    sidebarOpened: {
                        bind: "sidebar.opened",
                    },
                }}
                onMouseDownCapture="onMainClick"
            >
                <ContentPlaceholder />
            </main>
            <div className="sidebar"></div>
        </div>
    </cx>
);
