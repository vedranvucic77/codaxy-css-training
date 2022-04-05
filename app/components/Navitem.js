import { Link } from "cx/widgets";

export const NavItem = ({ path, icon, title, active = false }) => (
    <cx>
        <div class="sidebar_item item" className={`${active ? "active" : ""}`}>
            <img class="item_icon" src={icon} />
            <Link class="item_url" href={path}>
                {title}
            </Link>
        </div>
    </cx>
);
