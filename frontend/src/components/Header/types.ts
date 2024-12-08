export type IHeaderProps = {
  scrollIntoView: () => void;
  className: string;
  onOpenSearchModal?: () => void;
  onResetSearch?: () => void;
};

export type UrlParams = {
  page: string;
  category: string;
};
