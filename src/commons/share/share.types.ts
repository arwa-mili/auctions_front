export type ShareProps = {
  url: string;
  socialTypes: Array<ShareSocialType>;
  renderButton: (
    onClick: (event: React.MouseEvent<HTMLButtonElement>) => void,
    ariaDescribedby?: string
  ) => React.ReactNode;
};

export enum ShareSocialType {
  Facebook = "Facebook",
  WhatsApp = "WhatsApp",
  Twitter = "Twitter",
  LinkedIn = "LinkedIn",
  Telegram = "Telegram",
  Reddit = "Reddit",
  Line = "Line",
  Instapaper = "Instapaper",
  Hatena = "Hatena",
  email = "Email",
  Live_Journal = "Live Journal",
  Ok = "Ok",
  Mailru = "Mailru",
}
