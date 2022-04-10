export interface ILink {
  title: string;
  subtitle: string;
  url: string;
}

export interface ILinkGroup {
  title: string;
  links: ILink[];
}