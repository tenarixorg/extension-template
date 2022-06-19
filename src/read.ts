import { GetContent, Http, Parser, Read, Util } from "@tenarix/core";

export const _read = (
  content: GetContent,
  parser: Parser,
  http: Http,
  { decodeRoute, encodeRoute }: Util
) => {
  return async (id: string, execPath: string): Promise<Read> => {
    const url = "https://baseurl/read/using/id";
    const { innerHTML } = await content(url, execPath);
    const $ = parser(innerHTML);
    return {
      id: "",
      title: "",
      info: "",
      pages: 0,
      imgs: [],
    };
  };
};
