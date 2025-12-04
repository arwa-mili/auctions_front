export type ActivityTodayProps = {
  title?: string;
  bordered?: boolean;
  data: Array<ActivityTodayItem>;
};

type ActivityTodayItem = {
  pointColor: string;
  text: string;
  total?: number | string;
};
