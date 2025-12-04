import { format, getDay, parse, startOfWeek } from "date-fns";
import { FC, useMemo } from "react";
import { Calendar as BigCalendar, dateFnsLocalizer } from "react-big-calendar";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
//styles
import "react-big-calendar/lib/addons/dragAndDrop/styles.css";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Container } from "./calendar.styles";
//types
import { CalendarProps } from "./calendar.types";

const DnDCalendar = withDragAndDrop(BigCalendar);

const Calendar: FC<CalendarProps> = (props) => {
  const {
    locales,
    events = [],
    messages,
    culture,
    style,
    onShowMore,
    onRangeChange,
    onView,
    onEventDrop,
    onSelectSlot,
    onSelectEvent,
    draggableAccessor,
    onNavigate,
    components,
    eventPropGetter,
  } = props;

  const localizer = useMemo(
    () =>
      dateFnsLocalizer({
        format,
        parse,
        startOfWeek,
        getDay,
        locales,
      }),
    [locales]
  );

  return (
    <Container>
      <DnDCalendar
        style={style}
        localizer={localizer}
        events={events}
        messages={messages}
        culture={culture}
        onNavigate={onNavigate}
        selectable
        views={{ agenda: false, month: true, week: true, day: true }}
        draggableAccessor={draggableAccessor}
        onEventDrop={onEventDrop}
        onSelectSlot={onSelectSlot}
        onSelectEvent={onSelectEvent}
        components={components}
        eventPropGetter={eventPropGetter}
        onView={onView}
        onShowMore={onShowMore}
        onRangeChange={onRangeChange}
      />
    </Container>
  );
};

export { Calendar };
