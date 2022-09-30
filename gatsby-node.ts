import { GatsbyNode } from "gatsby";

import { generateCv } from "./generate-cv";

export const onCreatePage: GatsbyNode["onCreatePage"] = async ({
    page,
    actions,
}) => {
    if (page.path.match(/^\/cv/)) {
        await generateCv();
        actions.deletePage(page);
    }
};
