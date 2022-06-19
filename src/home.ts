import { Home, GetContent, Parser, PageBase, Http, Util } from "@tenarix/core";

export const _home = (
  content: GetContent,
  parser: Parser,
  http: Http,
  { decodeRoute, encodeRoute }: Util
) => {
  return async (execPath: string): Promise<Home> => {
    const { innerHTML } = await content("https://baseurl", execPath);
    const $ = parser(innerHTML);
    const popular: PageBase[] = [
      {
        img: "",
        title: "",
        type: "",
        route: "",
      },
    ];
    return {
      popular,
    };
  };
};
