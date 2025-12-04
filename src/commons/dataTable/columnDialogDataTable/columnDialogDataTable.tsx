import { useState } from "react";
//components
import { ModalRight } from "../../../modals";
import { FormHeader } from "../../form/formHeader/formHeader";
import { FormFooter } from "../../form/formFooter/formFooter";
import { FormContainer } from "../../form/formContainer/formContainer";
import Default from "./default/default";
import Grouped from "./grouped/grouped";
//types
import { ColumnDialogDataTableProps } from "./columnDialogDataTable.types";
import { ColumnCell } from "../headDataTable/headDataTable.types";
import { Button } from "../../button/button";

function ColumnDialogDataTable<T>(
  props: ColumnDialogDataTableProps<T>
): JSX.Element {
  //props
  const {
    mRef,
    t,
    labelColumnDialogDisplayMoreData,
    labelColumnDialogReset,
    labelColumnDialogSave,
    groupedColumns,
    onClickCloseDialog,
    onClickSave,
  } = props;
  //state
  const [columns, setColumns] = useState<Array<ColumnCell<T>>>(props.columns);

  //functions
  const onChangeColumns = (newColumns: Array<ColumnCell<T>>) => {
    setColumns(newColumns);
  };
  const onClickResetSelects = () => {
    setColumns(props.defaultsColumns || []);
  };
  const onSubmit = () => {
    if (onClickSave) {
      onClickSave(columns);
    }
  };
  const onClickClose = () => {
    setColumns(props.columns);
    if (onClickCloseDialog) {
      onClickCloseDialog();
    }
  };
  const onClickCloseButton = () => {
    setColumns(props.columns);
    if (onClickCloseDialog) {
      onClickCloseDialog();
    }
  };
  const onClickSelectAll = () => {
    const newColumns: Array<ColumnCell<T>> =
      props.defaultsColumns?.map((o) => ({ ...o, displayed: true })) || [];
    setColumns(newColumns);
  };

  //render
  const renderContent = () => {
    if (groupedColumns) {
      return (
        <Grouped columns={columns} t={t} onChangeColumns={onChangeColumns} />
      );
    }
    return (
      <Default columns={columns} t={t} onChangeColumns={onChangeColumns} />
    );
  };
  return (
    <ModalRight ref={mRef} size="medium" onClickClose={onClickClose}>
      <FormHeader
        headerTitle={labelColumnDialogDisplayMoreData || ""}
        onClickCloseButton={onClickCloseButton}
        renderRight={() => (
          <Button size="large" onClick={onClickSelectAll}>
            {t("common:tables.select_all")}
          </Button>
        )}
      />
      <FormContainer py={0}>{renderContent()}</FormContainer>
      <FormFooter
        textButtonLeft={labelColumnDialogReset}
        textButtonRight={labelColumnDialogSave}
        onClickButtonLeft={onClickResetSelects}
        onClickButtonRight={onSubmit}
      />
    </ModalRight>
  );
}

export { ColumnDialogDataTable };
