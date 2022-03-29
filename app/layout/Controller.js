import { Controller } from "cx/ui";

export default class extends Controller {
    onInit() {
        this.store.set("sidebar.opened", true);
    }

    onMainClick() {
        if (window.innerWidth < 800) store.set("layout.aside.open", false);
    }
}
