import { Controller } from "cx/ui";

export default class extends Controller {
    onInit() {
        var y1 = 300,
            y2 = 200,
            y3 = 100,
            y4 = 50;
        this.store.set(
            "$page.points",
            Array.from({ length: 21 }, (_, i) => ({
                x: i * 4,
                y1: (y1 = y1 + (Math.random() - 0.5) * 30),
                y2: (y2 = y2 + (Math.random() - 0.5) * 30),
                y3: (y3 = y3 + (Math.random() - 0.5) * 30),
                y4: (y4 = y4 + (Math.random() - 0.5) * 30),
            }))
        );
    }
}
