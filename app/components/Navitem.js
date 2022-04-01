import { Link } from "cx/widgets";

export const NavItem = ({ path, icon, title, active = false }) => (
    <cx>
        <div class="sidebar_item" className={`${active ? "active" : ""}`}>
            <img src={icon} />
            <Link href={path}>{title}</Link>
        </div>
    </cx>
);
