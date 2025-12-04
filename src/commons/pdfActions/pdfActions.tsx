import { Divider, IconButton, Stack } from "@mui/material";
import { createRef, FC } from "react";
// components & svgs
import { Button, Share, ShareSocialType } from "../../commons";
import { ModalFullScreen } from "../../modals";
import { Svgs } from "../../svgs";
// styles
import { CardFooter, Container, Iframe } from "./pdfActions.styles";
// types
import { PdfActionsProps } from "./pdfActions.types";

const PdfActions: FC<PdfActionsProps> = (props) => {
  const { src, textPreview, textDownload, textShare, onClickDownload } = props;
  const refPreview = createRef<ModalFullScreen>();

  const onClickPreview = () => {
    refPreview.current?.show();
  };
  const onClickClosePreview = () => {
    refPreview.current?.hide();
  };

  //render
  return (
    <>
      <Container>
        <Stack flex={1} alignItems="center" justifyContent="center">
          <Iframe src={`${src}#toolbar=0`} width={220} height={286} />
        </Stack>

        <CardFooter
          direction="row"
          divider={<Divider flexItem orientation="vertical" />}
        >
          <Button
            variant="text"
            startIcon={<Svgs.IconEye />}
            onClick={onClickPreview}
          >
            {textPreview}
          </Button>
          <Button
            variant="text"
            startIcon={<Svgs.IconDownload01 />}
            onClick={onClickDownload}
          >
            {textDownload}
          </Button>
          <Share
            url={src}
            socialTypes={[
              ShareSocialType.Facebook,
              ShareSocialType.LinkedIn,
              ShareSocialType.Telegram,
              ShareSocialType.Twitter,
              ShareSocialType.WhatsApp,
              ShareSocialType.Mailru,
              ShareSocialType.email,
            ]}
            renderButton={(onClick, ariaDescribedby) => (
              <Button
                startIcon={<Svgs.IconShare07 />}
                variant="text"
                onClick={onClick}
                aria-describedby={ariaDescribedby}
              >
                {textShare}
              </Button>
            )}
          />
        </CardFooter>
      </Container>
      <ModalFullScreen
        ref={refPreview}
        fullScreen={false}
        fullWidth
        radius={1}
        onClose={onClickClosePreview}
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            background: "#00000050",
            right: 8,
            top: 8,
          }}
          onClick={onClickClosePreview}
        >
          <Svgs.IconXClose fontSize="medium" sx={{ color: "white" }} />
        </IconButton>
        <Stack flex={1} alignItems="center" justifyContent="center">
          <Iframe src={`${src}#toolbar=0`} width={600} height={825} />
        </Stack>
      </ModalFullScreen>
    </>
  );
};

export { PdfActions };
