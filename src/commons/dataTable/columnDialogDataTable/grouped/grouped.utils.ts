import { ColumnCell } from "../../headDataTable/headDataTable.types";

export function groupBy<T>(array: Array<T>, key: keyof T) {
  return array.reduce((objectsByKeyValue, obj) => {
    const value = obj[key];
    //@ts-ignore
    objectsByKeyValue[value] = (objectsByKeyValue[value] || []).concat(obj);
    return objectsByKeyValue;
  }, {});
}

export function groupColumnList<T>(defaultColumns: Array<ColumnCell<T>>) {
  const groupedList = groupBy(defaultColumns, "group");
  const groupedColumnsList: Array<{
    group: string;
    label: string;
    data: Array<ColumnCell<T>>;
  }> = [];
  Object.keys(groupedList).map((key) => {
    if (key !== "undefined") {
      //@ts-ignore
      const groupColumns = groupedList[key];
      groupedColumnsList.push({
        group: key,
        label: groupColumns?.[0]?.groupLabel,
        data: groupColumns,
      });
    }
  });
  return groupedColumnsList;
}
