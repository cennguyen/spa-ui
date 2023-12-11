import Api from "./api";

/** Local ZONE */
export const getTemplateFromLocal = async (skin) =>
    await Api.get(`${process.env.PUBLIC_URL}/template/${skin}.json`);