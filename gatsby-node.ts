import { generateCv } from "./generate-cv";

export const onPostBuild = async () => {
    await generateCv();
};
