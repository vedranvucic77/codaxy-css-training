import { ContentPlaceholder } from "cx/widgets";
import { NavItem } from "../components/Navitem";
import Controller from "./Controller";

export default (
    <cx>
        <div>
            <nav
                controller={Controller}
                className="sidebar"
                class={{
                    sidebar_inactive: { bind: "page.sidebar" },
                }}
            >
                <div class="sidebar_header">
                    <div class="sidebar_companylogo">
                        <img
                            src="../../assets/img/logo.png"
                            alt="logo"
                            class="logo"
                        />
                        <h1 class="company_name">Company</h1>
                        <div class="line"></div>
                        <img
                            src="../../assets/img/arrow.png"
                            alt="arrow"
                            class="arrow"
                            onClick={(e, { store }) => {
                                store.toggle("page.sidebar");
                            }}
                        />
                    </div>
                    <div class="profile">
                        <img
                            src="../../assets/img/avatar.png"
                            class="avatar"
                            alt="avatar"
                        />
                        <div class="info">
                            <h4 class="user_name">Ashfak Sayem</h4>
                            <p class="user_email">ashfaksayem@gmail.com</p>
                        </div>
                    </div>
                    <div class="sidebar_list">
                        <NavItem
                            path="#"
                            icon="../../assets/img/calendar.png"
                            title="Dashboard"
                            active
                        />
                        <NavItem
                            path="#"
                            icon="../../assets/img/rewards.png"
                            title="Rewards"
                        />
                        <NavItem
                            path="#"
                            icon="../../assets/img/location.png"
                            title="Address"
                        />
                        <NavItem
                            path="#"
                            icon="../../assets/img/wallet.png"
                            title="Payments Methods"
                        />
                        <NavItem
                            path="#"
                            icon="../../assets/img/offers.png"
                            title="Offers"
                        />
                        <NavItem
                            path="#"
                            icon="../../assets/img/friend.png"
                            title="Refer a Friend"
                        />
                        <NavItem
                            path="#"
                            icon="../../assets/img/contact.png"
                            title="Contact"
                        />
                    </div>
                </div>

                <div class="sidebar_footer">
                    <div class="line"></div>
                    <div class="sidebar_colorsheme">
                        <img src="../../assets/img/question_mark.png" />
                        <h4>Color Scheme</h4>
                    </div>

                    <div class="sidebar_themecontrol">
                        <div class="sidebar_theme active">
                            <img
                                src="../../assets/img/sun.png"
                                class="active"
                            />
                            <h4>Light</h4>
                        </div>
                        <div class="sidebar_theme">
                            <img src="../../assets/img/moon.png" />
                            <h4>Dark</h4>
                        </div>
                    </div>
                </div>
            </nav>
            <ContentPlaceholder class="test" />
        </div>
    </cx>
);
