import ZettelList from "zettel/ui/z/zettel_list";
import { filterZettels } from "zettel/lib/retrieve";

export const id = "algebra";
export const title = "Algebra";
export const abstract = "Algebra is the study of equations and their relations.";
export const tags = ["math", "algebra"];

export default async function Topology() {
    const zettels = await filterZettels({
        globPattern: "math/alg/**/*.mdx",
        sortMethod: (a, b) => (a.sectionNumber || 0) - (b.sectionNumber || 0)
    });
    return <ZettelList zettels={zettels} />;
}
