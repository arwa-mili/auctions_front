import {
  Components,
  Event,
  EventPropGetter,
  Messages,
  NavigateAction,
  SlotInfo,
  View,
} from "react-big-calendar";
import {
  EventInteractionArgs,
  withDragAndDropProps,
} from "react-big-calendar/lib/addons/dragAndDrop";

export type CalendarProps = {
  locales: any;
  events?: Array<Event>;
  messages?: Messages;
  culture?: string;
  style?: React.CSSProperties;
  draggableAccessor?: (event: object) => boolean;
  onEventDrop?: (args: EventInteractionArgs<Event>) => void;
  onSelectSlot?: (slotInfo: SlotInfo) => void;
  onSelectEvent?: (event: object, e: React.SyntheticEvent<HTMLElement>) => void;
  components?: Components<CalendarEvent, object>;
  onNavigate?: (newDate: Date, view: View, action: NavigateAction) => void;
  eventPropGetter?: EventPropGetter<object>;
  onShowMore?: ((events: object[], date: Date) => void) | undefined;
  onView?: ((view: View) => void) | undefined;
  onRangeChange?: (
    range:
      | Date[]
      | {
          start: Date;
          end: Date;
        },
    view?: View
  ) => void | undefined;
};

export type CalendarEvent = Event;
export type { EventInteractionArgs, SlotInfo, withDragAndDropProps };
