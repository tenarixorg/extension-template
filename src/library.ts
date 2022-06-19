import {
  Filters,
  GetContent,
  Http,
  Library,
  PageBase,
  Parser,
  Util,
} from "@tenarix/core";

const libraryParams = (page: string, filters?: Filters) => {
  return "https://baseurl?doSearch&&usingPage&&filters";
};

export const _library = (
  content: GetContent,
  parser: Parser,
  http: Http,
  { decodeRoute, encodeRoute }: Util
) => {
  return async (
    page: string,
    execPath: string,
    filters?: Filters
  ): Promise<Library> => {
    const { innerHTML } = await content(libraryParams(page, filters), execPath);
    const $ = parser(innerHTML);
    const items: PageBase[] = [{ img: "", route: "", title: "", type: "" }];
    return {
      items,
    };
  };
};
