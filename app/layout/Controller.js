import { Controller } from "cx/ui";

export default class extends Controller {
    onInit() {
        this.store.init("page.sidebar", true);
    }
}
