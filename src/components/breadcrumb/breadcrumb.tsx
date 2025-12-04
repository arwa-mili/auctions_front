import { FC } from "react";
import { Link as ReactRouterLink } from "react-router-dom";
import {
  Breadcrumbs,
  Stack,
  Typography,
  Link as MuiLink,
  useTheme,
} from "@mui/material";
//types
import { BreadcrumbProps, BreadcrumbItem } from "./breadcrumb.types";
import { Svgs } from "index";

const Breadcrumb: FC<BreadcrumbProps> = (props) => {
  const { data, ...rest } = props;
  const theme = useTheme();

  const renderItem = () => {
    return data.map((item, index) => {
      if (item.disabled) {
        return (
          <Stack
            key={index}
            direction="row"
            component="span"
            alignItems="center"
            gap={1}
            title={item.label}
          >
            {item.home ? (
              <Svgs.IconHomeLine stroke={theme.palette.grey[500]} />
            ) : (
              <Typography
                component="span"
                color="text.primary"
                fontWeight="500"
              >
                {item.label}
              </Typography>
            )}
          </Stack>
        );
      }
      return (
        <MuiLink
          key={index}
          component={ReactRouterLink}
          to={item.link ?? ""}
          underline="hover"
          color="grey.600"
        >
          <Stack
            direction="row"
            component="span"
            alignItems="center"
            gap={1}
            title={item.label}
          >
            {item.home ? (
              <Svgs.IconHomeLine stroke={theme.palette.grey[500]} />
            ) : (
              <Typography
                component="span"
                color="inherit"
                fontWeight={index === data.length - 1 ? 600 : 500}
              >
                {item.label}
              </Typography>
            )}
          </Stack>
        </MuiLink>
      );
    });
  };
  return (
    <Breadcrumbs title="Breadcrumb" aria-label="breadcrumb" {...rest}>
      {renderItem()}
    </Breadcrumbs>
  );
};

export { Breadcrumb, type BreadcrumbItem };
