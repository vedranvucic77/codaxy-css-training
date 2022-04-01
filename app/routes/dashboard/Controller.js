import { Controller, KeySelection } from "cx/ui";

export const columnSelection = new KeySelection({
    keyField: "x",
    bind: "$page.selection",
    record: { bind: "$point" },
    index: { bind: "$index" },
});

export default class extends Controller {
    onInit() {
        let y1 = 300;
        let y2 = 200;
        let y3 = 100;
        let y4 = 50;
        let v1 = 10;
        const categories = ["Jan", "Feb", "Mar", "Apr", "May"];

        const points = Array.from({ length: 5 }, (_, i) => ({
            x: i * 2,
            y1: (y1 = y1 + (Math.random() - 0.5) * 30),
            y2: (y2 = y2 + (Math.random() - 0.5) * 30),
            y3: (y3 = y3 + (Math.random() - 0.5) * 30),
            y4: (y4 = y4 + (Math.random() - 0.5) * 30),
        }));

        this.store.set("$page.points", points);

        this.store.set(
            "$page.bars",
            Array.from({ length: categories.length }, (_, i) => ({
                x: categories[i],
                v1: (v1 = v1 + (Math.random() - 0.5) * 2),
                v2: v1 + 5 + Math.random() * 10,
                v3: v1 + 20 + Math.random() * 10,
                v4: v1 + 10 + Math.random() * 10,
            }))
        );
    }
}
