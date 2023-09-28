import { SingleDatepicker } from "chakra-dayzed-datepicker";

type Props = {
  date: Date;
  setDate: (date: Date) => void;
};

export default function DatePicker({ date, setDate }: Props) {
  return (
    <SingleDatepicker
      name={"churras-date"}
      date={date}
      onDateChange={setDate}
      propsConfigs={{
        dateNavBtnProps: {
          variant: "outline",
        },
        dayOfMonthBtnProps: {
          selectedBtnProps: {
            background: "yellow",
            color: "black",
          },
        },
        inputProps: {
          borderRadius: 8,
          border: "1px solid ",
          borderColor: "gray.100",
          fontSize: "18px",
          height: "50px",
          size: "sm",
        },
        popoverCompProps: {
          popoverContentProps: {
            background: "gray.800",
            color: "white",
          },
        },
        calendarPanelProps: {
          wrapperProps: {
            borderColor: "green",
          },
          contentProps: {
            borderWidth: 0,
          },
          headerProps: {
            padding: "5px",
          },
          dividerProps: {
            display: "none",
          },
        },
        weekdayLabelProps: {
          fontWeight: "normal",
        },
        dateHeadingProps: {
          fontWeight: "semibold",
        },
      }}
    />
  );
}
