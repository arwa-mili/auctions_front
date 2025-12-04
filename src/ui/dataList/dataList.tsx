import { Fragment } from "react";
import { Grid } from "@mui/material";
//styles
import { Container, Content } from "./dataList.styles";
//api
//types
import { DataListProps } from "./dataList.types";

function DataList<T>(props: DataListProps<T>): JSX.Element {
  const {
    data,
    loading,
    placeholderLoader,
    numberPlaceholder = 3,
    sx,
    renderListHeaderComponent,
    renderListEmptyComponent,
    renderListFooterComponent,
  } = props;

  //render
  const renderContentList = () => {
    if (loading && placeholderLoader) {
      return new Array(numberPlaceholder)
        .fill(numberPlaceholder)
        .map((_, index) => (
          <Fragment key={index}>{placeholderLoader}</Fragment>
        ));
    } else if (loading) {
      return <p>Loading....</p>;
    } else if (!loading && data.length === 0 && renderListEmptyComponent) {
      return <>{renderListEmptyComponent()}</>;
    }
    return data.map((item, index) => {
      return (
        <Fragment key={index}>{props.renderItem({ item, index })}</Fragment>
      );
    });
  };
  const renderContentGrid = () => {
    if (props.mode === "GRID") {
      const { breakpoints } = props;
      if (loading && placeholderLoader) {
        return new Array(numberPlaceholder)
          .fill(numberPlaceholder)
          .map((_, index) => (
            <Grid
              item
              key={index}
              xl={breakpoints?.xl || 4}
              lg={breakpoints?.lg || 4}
              md={breakpoints?.md || 6}
              sm={breakpoints?.sm || 12}
              xs={breakpoints?.xs || 12}
            >
              {placeholderLoader}
            </Grid>
          ));
      } else if (loading) {
        return <p>Loading....</p>;
      } else if (!loading && data.length === 0 && renderListEmptyComponent) {
        return <>{renderListEmptyComponent()}</>;
      }
      return data.map((item, index) => {
        return (
          <Grid
            item
            key={index}
            xl={breakpoints?.xl || 4}
            lg={breakpoints?.lg || 4}
            md={breakpoints?.md || 6}
            sm={breakpoints?.sm || 12}
            xs={breakpoints?.xs || 12}
          >
            {props.renderItem({ item, index })}
          </Grid>
        );
      });
    }
  };

  const renderBody = () => {
    if (props.mode === "LIST") {
      const { gap = 1, sxContentList } = props;
      return (
        <Content gap={gap} sx={sxContentList}>
          {renderContentList()}
        </Content>
      );
    } else if (props.mode === "GRID") {
      const { spacing = 2, p = 2, sxContentGrid } = props;
      return (
        <Grid container spacing={spacing} p={p} sx={sxContentGrid}>
          {renderContentGrid()}
        </Grid>
      );
    }
  };
  return (
    <Container sx={sx}>
      {renderListHeaderComponent && renderListHeaderComponent()}
      {renderBody()}
      {renderListFooterComponent && renderListFooterComponent()}
    </Container>
  );
}

export { DataList };
