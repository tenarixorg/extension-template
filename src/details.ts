import {
  Details,
  GetContent,
  Http,
  Parser,
  Util,
  Chapter,
} from "@tenarix/core";

export const _details = (
  content: GetContent,
  parser: Parser,
  http: Http,
  { decodeRoute, encodeRoute }: Util
) => {
  return async (route: string, execPath: string): Promise<Details> => {
    const url = "https://baseurl" + route;
    const { innerHTML } = await content(url, execPath);
    const $ = parser(innerHTML);
    const genres: string[] = [];
    const chapters: Chapter[] = [];
    return {
      title: "",
      description: "",
      status: "",
      img: "",
      type: "",
      genres,
      chapters,
    };
  };
};
