import { IconButton, Stack } from "@mui/material";
import { createRef, forwardRef } from "react";
//svgs
import { ModalFullScreen } from "../../../modals";
import { Svgs } from "../../../svgs";
//hooks
import { useDownload } from "../../../hooks";
//styles
import { Container, ContainerDelete } from "./actions.styles";
//types
import { ActionsProps } from "./actions.types";

const Actions = forwardRef(
  (props: ActionsProps, ref?: React.LegacyRef<HTMLDivElement>) => {
    const { field, actions, sxActions, sxActionDelete, onClickClear } = props;
    const refPhoto = createRef<ModalFullScreen>();
    const [_, download] = useDownload();

    //functions
    const onClickDownload = async (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.stopPropagation();
      if (typeof field.value === "string") {
        await download(field.value);
      }
    };
    const onClickView = (
      event: React.MouseEvent<HTMLButtonElement, MouseEvent>
    ) => {
      event.stopPropagation();
      refPhoto.current?.show();
    };

    //render
    return (
      <>
        <Container ref={ref} className="mask" sx={sxActions}>
          {actions?.isDeletable && (
            <ContainerDelete sx={sxActionDelete}>
              <IconButton
                size="extra-small"
                sx={{ background: "#00000050" }}
                onClick={onClickClear}
              >
                <Svgs.IconTrash01
                  sx={(theme) => ({
                    width: 16,
                    height: 16,
                    color: theme.palette.common.white,
                  })}
                />
              </IconButton>
            </ContainerDelete>
          )}
          <Stack direction="row" gap={0.5}>
            {actions?.isEditable && (
              <IconButton size="extra-small">
                <Svgs.IconEdit05
                  sx={(theme) => ({
                    width: 16,
                    height: 16,
                    color: theme.palette.common.white,
                  })}
                />
              </IconButton>
            )}
            {actions?.isDownloaded && (
              <IconButton size="extra-small" onClick={onClickDownload}>
                <Svgs.IconDownload01
                  fontSize="small"
                  sx={(theme) => ({
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
        </Container>
        <ModalFullScreen
          ref={refPhoto}
          fullScreen={false}
          fullWidth
          maxWidth="lg"
          radius={1}
          onClose={(e) => {
            e.stopPropagation();
            refPhoto.current?.hide();
          }}
        >
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              background: "#00000050",
              right: 8,
              top: 8,
            }}
            onClick={(e) => {
              e.stopPropagation();

              refPhoto.current?.hide();
            }}
          >
            <Svgs.IconXClose fontSize="medium" sx={{ color: "white" }} />
          </IconButton>
          <img
            alt={field.value}
            src={field.value}
            style={{ objectFit: "cover", width: "100%", height: "100%" }}
          />
        </ModalFullScreen>
      </>
    );
  }
);
export default Actions;
