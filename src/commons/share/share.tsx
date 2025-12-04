import { FC, useState } from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  EmailShareButton,
  HatenaShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  LivejournalShareButton,
  MailruShareButton,
  OKShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  XIcon,
  WhatsappShareButton,
  HatenaIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  LivejournalIcon,
  MailruIcon,
  OKIcon,
  RedditIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon,
} from "react-share";
import { Divider, Popover, Typography } from "@mui/material";
//styles
import { Container, Row } from "./share.styles";
//types
import { ShareProps, ShareSocialType } from "./share.types";

const Share: FC<ShareProps> = (props) => {
  const { socialTypes, url, renderButton } = props;

  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const onClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "share-popover" : undefined;

  //render
  const renderItem = () => {
    return socialTypes.map((item) => {
      if (ShareSocialType.Facebook === item) {
        return (
          <FacebookShareButton key={item} url={url}>
            <Row>
              <FacebookIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </FacebookShareButton>
        );
      } else if (ShareSocialType.Hatena === item) {
        return (
          <HatenaShareButton key={item} url={url}>
            <Row>
              <HatenaIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </HatenaShareButton>
        );
      } else if (ShareSocialType.Instapaper === item) {
        return (
          <InstapaperShareButton key={item} url={url}>
            <Row>
              <InstapaperIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </InstapaperShareButton>
        );
      } else if (ShareSocialType.Line === item) {
        return (
          <LineShareButton key={item} url={url}>
            <Row>
              <LineIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </LineShareButton>
        );
      } else if (ShareSocialType.LinkedIn === item) {
        return (
          <LinkedinShareButton key={item} url={url}>
            <Row>
              <LinkedinIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </LinkedinShareButton>
        );
      } else if (ShareSocialType.Live_Journal === item) {
        return (
          <LivejournalShareButton key={item} url={url}>
            <Row>
              <LivejournalIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </LivejournalShareButton>
        );
      } else if (ShareSocialType.Mailru === item) {
        return (
          <MailruShareButton key={item} url={url}>
            <Row>
              <MailruIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </MailruShareButton>
        );
      } else if (ShareSocialType.Ok === item) {
        return (
          <OKShareButton key={item} url={url}>
            <Row>
              <OKIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </OKShareButton>
        );
      } else if (ShareSocialType.Reddit === item) {
        return (
          <RedditShareButton key={item} url={url}>
            <Row>
              <RedditIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </RedditShareButton>
        );
      } else if (ShareSocialType.Telegram === item) {
        return (
          <TelegramShareButton key={item} url={url}>
            <Row>
              <TelegramIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </TelegramShareButton>
        );
      } else if (ShareSocialType.Twitter === item) {
        return (
          <TwitterShareButton key={item} url={url}>
            <Row>
              <XIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </TwitterShareButton>
        );
      } else if (ShareSocialType.WhatsApp === item) {
        return (
          <WhatsappShareButton key={item} url={url}>
            <Row>
              <WhatsappIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </WhatsappShareButton>
        );
      } else if (ShareSocialType.email === item) {
        return (
          <EmailShareButton key={item} url={url}>
            <Row>
              <EmailIcon size={24} round />
              <Typography fontSize={14} fontWeight="500" color="grey.600">
                {item}
              </Typography>
            </Row>
          </EmailShareButton>
        );
      }
    });
  };
  return (
    <>
      {renderButton(onClick, id)}
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={onClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Container divider={<Divider />}>{renderItem()}</Container>
      </Popover>
    </>
  );
};

export { Share, ShareSocialType };
