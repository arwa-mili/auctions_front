import { IconButton, Stack } from "@mui/material";
import { createRef, FC } from "react";
//svgs
import { Svgs } from "../../svgs";
//components
import { ModalFullScreen } from "../../modals";
import { Avatar } from "../avatar/avatar";
//hooks
import { useDownload } from "../../hooks";
//styles
import { Container, Mask, Name } from "./imageActions.styles";
//types
import { ActionsProps } from "./imageActions.types";

const ImageActions: FC<ActionsProps> = (props) => {
  const {
    label,
    url,
    emptyImage,
    alt,
    height,
    width,
    objectFit = "cover",
    actions,
    sxActions,
    sxContainer,
    sx,
  } = props;
  const refPhoto = createRef<ModalFullScreen>();
  const [_, download] = useDownload();

  //functions
  const onClickDownload = async (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    if (!url) return;
    event.stopPropagation();
    await download(url);
  };
  const onClickView = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    event.stopPropagation();
    refPhoto.current?.show();
  };

  //render
  return (
    <Stack gap={0.5} sx={sxContainer}>
      {label && <Name title={label}>{label}</Name>}
      <Container sx={sx}>
        <Avatar
          alt={alt || ""}
          variant="rounded"
          objectFit={objectFit}
          width={width}
          height={height}
          src={url || emptyImage}
          sx={(theme) => ({
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: theme.spacing(1),
          })}
        />

        {url && (
          <Mask className="mask" sx={sxActions}>
            <Stack direction="row" gap={0.5}>
              {actions?.isDownloaded && (
                <IconButton size="extra-small" onClick={onClickDownload}>
                  <Svgs.IconDownload01
                    sx={(theme) => ({
                      width: 16,
                      height: 16,
                      color: theme.palette.common.white,
                    })}
                  />
                </IconButton>
              )}
              {actions?.isViewed && (
                <IconButton size="extra-small" onClick={onClickView}>
                  <Svgs.IconEye
                    fontSize="small"
                    sx={(theme) => ({ color: theme.palette.common.white })}
                  />
                </IconButton>
              )}
            </Stack>
          </Mask>
        )}
      </Container>
      <ModalFullScreen
        ref={refPhoto}
        fullScreen={false}
        fullWidth
        maxWidth="lg"
        radius={1}
        onClose={() => refPhoto.current?.hide()}
      >
        <IconButton
          size="small"
          sx={{
            position: "absolute",
            background: "#00000050",
            right: 8,
            top: 8,
          }}
          onClick={() => refPhoto.current?.hide()}
        >
          <Svgs.IconXClose fontSize="medium" sx={{ color: "white" }} />
        </IconButton>
        <img
          alt={alt}
          src={url}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </ModalFullScreen>
    </Stack>
  );
};

export { ImageActions };
