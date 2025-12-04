import { Component } from "react";
import {
  Table,
  TableBody,
  TableContainer,
  TableRow,
  TableFooter,
} from "@mui/material";
//components
import { HeadDataTable } from "./headDataTable/headDataTable";
import { ColumnDialogDataTable } from "./columnDialogDataTable/columnDialogDataTable";
import { Pagination } from "./pagination/pagination";
import { LoaderRowDataTable } from "./loaderRowDataTable/loaderRowDataTable";
//Types
import { AnimatedRow, DataTableProps, DataTableState } from "./dataTable.types";

class DataTable<T> extends Component<DataTableProps<T>, DataTableState<T>> {
  constructor(props: any) {
    super(props);
    this.state = { order: "asc", orderBy: undefined, animatedRow: null };
  }

  setAnimatedRow = (animatedRow: AnimatedRow<T>) => {
    this.setState({ animatedRow: animatedRow });
    setTimeout(() => {
      this.setState({ animatedRow: null });
    }, 1000);
  };

  handleRequestSort = (
    _event: React.MouseEvent<unknown>,
    property?: keyof T
  ) => {
    const { onRequestSort } = this.props;
    const { order, orderBy } = this.state;
    const isAsc = orderBy === property && order === "asc";
    this.setState({ order: isAsc ? "desc" : "asc", orderBy: property });
    if (onRequestSort) {
      onRequestSort({ orderBy: isAsc ? "desc" : "asc", property });
    }
  };

  handleClickItemRow =
    ({ item, index }: { item: T; index: number }) =>
    (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
      event.stopPropagation();
      const { onClickItemRow } = this.props;
      if (onClickItemRow) {
        onClickItemRow({ item, index });
      }
    };

  renderContent = () => {
    const {
      columns,
      loading,
      data,
      hidePagination,
      size,
      limit = 10,
      hideCheckbox,
      renderItem,
    } = this.props;
    const { animatedRow } = this.state;

    const filterColumns = columns?.filter((o) => o.displayed);

    if (loading) {
      return (
        <LoaderRowDataTable
          limit={limit}
          hideCheckbox={hideCheckbox}
          columns={filterColumns}
        />
      );
    }
    return data.map((item, index) => {
      const isLast = index + 1 === data.length;
      const isAnimatedRow = animatedRow
        ? item[animatedRow.prop] === animatedRow.id
        : false;
      return (
        <TableRow
          key={index}
          hover
          onClick={this.handleClickItemRow({ item, index })}
          tabIndex={-1}
          sx={(theme) => ({
            "& > td": {
              bgcolor: isAnimatedRow ? theme.palette.success[50] : undefined,
              transition: "all .5s ease",
              borderBottom: isLast && hidePagination ? "none" : undefined,
            },
          })}
        >
          {renderItem({ item, index, hideCheckbox, size })}
        </TableRow>
      );
    });
  };

  renderPagination = () => {
    const {
      loading,
      hidePagination,
      count,
      page = 0,
      limit = 10,
      labelRowsPerPage,
      labelDisplayedRows,
      language,
      onChangePage,
      onRowsPerPageChange,
    } = this.props;
    if (hidePagination) return null;
    else if (!loading) {
      return (
        <TableFooter>
          <TableRow>
            <Pagination
              language={language}
              page={page}
              limit={limit}
              count={count}
              labelRowsPerPage={labelRowsPerPage}
              labelDisplayedRows={labelDisplayedRows}
              onRowsPerPageChange={onRowsPerPageChange}
              onChangePage={onChangePage}
            />
          </TableRow>
        </TableFooter>
      );
    }
  };

  render() {
    const { order, orderBy } = this.state;
    const {
      t,
      refSettingsColumns,
      defaultsColumns,
      columns,
      loading,
      data,
      alignHead,
      size,
      labelColumnDialogDisplayMoreData,
      labelColumnDialogReset,
      labelColumnDialogSave,
      checkboxValues,
      hideCheckbox,
      groupedColumns,
      sxTableContainer,
      stickyHeader,
      renderListEmpty,
      onClickCloseSettingsColumns,
      onClickSaveSettingsColumns,
      onChangeCheckBox,
    } = this.props;
    const filterColumns = columns?.filter((o) => o.displayed);

    if (data.length === 0 && !loading && renderListEmpty) {
      return <>{renderListEmpty()}</>;
    }
    return (
      <>
        <TableContainer sx={sxTableContainer}>
          <Table stickyHeader={stickyHeader} size={size}>
            <HeadDataTable
              t={t}
              alignHead={alignHead}
              columns={filterColumns}
              hideCheckbox={hideCheckbox}
              checkboxValues={checkboxValues}
              order={order}
              orderBy={orderBy}
              onRequestSort={this.handleRequestSort}
              onChangeCheckBox={onChangeCheckBox}
            />
            <TableBody>{this.renderContent()}</TableBody>
            {this.renderPagination()}
          </Table>
        </TableContainer>
        <ColumnDialogDataTable
          t={t}
          groupedColumns={groupedColumns}
          labelColumnDialogDisplayMoreData={labelColumnDialogDisplayMoreData}
          labelColumnDialogReset={labelColumnDialogReset}
          labelColumnDialogSave={labelColumnDialogSave}
          mRef={refSettingsColumns}
          columns={columns}
          defaultsColumns={defaultsColumns}
          onClickSave={onClickSaveSettingsColumns}
          onClickCloseDialog={onClickCloseSettingsColumns}
        />
      </>
    );
  }
}
export { DataTable };

// function DataTable<T>(props: DataTableProps<T>): JSX.Element {
//   const {
//     defaultsColumns,
//     columns,
//     loading,
//     data,
//     hidePagination,
//     alignHead,
//     count,
//     size,
//     page = 0,
//     limit = 10,
//     labelRowsPerPage,
//     labelDisplayedRows,
//     labelColumnDialogDisplayMoreData,
//     labelColumnDialogReset,
//     labelColumnDialogSave,
//     checkboxValues,
//     hideCheckbox,
//     groupedColumns,
//     language,
//     renderListEmpty,
//     renderItem,
//     onChangePage,
//     onRequestSort,
//     onRowsPerPageChange,
//     onClickItemRow,
//     onClickCloseSettingsColumns,
//     onClickSaveSettingsColumns,
//     onChangeCheckBox,
//   } = props;
//   const [order, setOrder] = useState<Order>("asc");
//   const [orderBy, setOrderBy] = useState<keyof T>();

//   const filterColumns = useMemo(
//     () => columns?.filter((o) => o.displayed),
//     [columns]
//   );

//   const handleRequestSort = (
//     _event: React.MouseEvent<unknown>,
//     property?: keyof T
//   ) => {
//     const isAsc = orderBy === property && order === "asc";
//     setOrder(isAsc ? "desc" : "asc");
//     setOrderBy(property);
//     if (onRequestSort) {
//       onRequestSort({ orderBy: isAsc ? "desc" : "asc", property });
//     }
//   };

//   const handleClickItemRow =
//     ({ item, index }: { item: T; index: number }) =>
//     (event: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
//       event.stopPropagation();
//       if (onClickItemRow) {
//         onClickItemRow({ item, index });
//       }
//     };

//   //render
//   const renderContent = () => {
//     if (loading) {
//       return (
//         <LoaderRowDataTable
//           limit={limit}
//           hideCheckbox={hideCheckbox}
//           columns={filterColumns}
//         />
//       );
//     }
//     return data.map((item, index) => {
//       const isLast = index + 1 === data.length;
//       return (
//         <TableRow
//           key={index}
//           hover
//           onClick={handleClickItemRow({ item, index })}
//           tabIndex={-1}
//           sx={{
//             "& > td": {
//               borderBottom: isLast && hidePagination ? "none" : undefined,
//             },
//           }}
//         >
//           {renderItem({ item, index, hideCheckbox, size })}
//         </TableRow>
//       );
//     });
//   };

//   const renderPagination = () => {
//     if (hidePagination) return null;
//     else if (!loading) {
//       return (
//         <TableFooter>
//           <TableRow>
//             <Pagination
//               language={language}
//               page={page}
//               limit={limit}
//               count={count}
//               labelRowsPerPage={labelRowsPerPage}
//               labelDisplayedRows={labelDisplayedRows}
//               onRowsPerPageChange={onRowsPerPageChange}
//               onChangePage={onChangePage}
//             />
//           </TableRow>
//         </TableFooter>
//       );
//     }
//   };
//   if (data.length === 0 && !loading && renderListEmpty) {
//     return <>{renderListEmpty()}</>;
//   }
//   return (
//     <>
//       <TableContainer>
//         <Table size={size}>
//           <HeadDataTable
//             t={props.t}
//             alignHead={alignHead}
//             columns={filterColumns}
//             hideCheckbox={hideCheckbox}
//             checkboxValues={checkboxValues}
//             order={order}
//             orderBy={orderBy}
//             onRequestSort={handleRequestSort}
//             onChangeCheckBox={onChangeCheckBox}
//           />
//           <TableBody>{renderContent()}</TableBody>
//           {renderPagination()}
//         </Table>
//       </TableContainer>
//       <ColumnDialogDataTable
//         t={props.t}
//         groupedColumns={groupedColumns}
//         labelColumnDialogDisplayMoreData={labelColumnDialogDisplayMoreData}
//         labelColumnDialogReset={labelColumnDialogReset}
//         labelColumnDialogSave={labelColumnDialogSave}
//         mRef={props.refSettingsColumns}
//         columns={columns}
//         defaultsColumns={defaultsColumns}
//         onClickSave={onClickSaveSettingsColumns}
//         onClickCloseDialog={onClickCloseSettingsColumns}
//       />
//     </>
//   );
// }
