import { Box, Checkbox, VStack } from "@chakra-ui/react";
import React, { useState } from "react";

interface CalendarEntryProps {
  day: string;
  date: number;
  month: number;
  startTime: string;
  endTime: string;
}

export type checkType = "no" | "maybe" | "yes";

const CalendarEntry: React.FC<CalendarEntryProps> = (props) => {
  const [checkState, setCheckState] = useState<checkType>("no");

  return (
    <VStack
      backgroundColor={
        checkState === "yes"
          ? "#33a93399"
          : checkState === "maybe"
          ? "#ada53366"
          : ""
      }
      opacity="50%"
      width={"90px"}
      height={"202px"}
    >
      <Box textColor={"gray"}>{props.day}</Box>
      <Box fontSize={"28px"}>
        <b>{props.date}</b>
      </Box>
      <Box textColor={"gray"}>{props.month}</Box>
      <Box>
        <b>{props.startTime}</b>
      </Box>
      <Box>
        <b>{props.endTime}</b>
      </Box>
      <Box>
        <Checkbox
          isChecked={checkState === "no" ? false : true}
          onChange={() => {
            checkState === "no"
              ? setCheckState("yes")
              : checkState === "yes"
              ? setCheckState("maybe")
              : setCheckState("no");
          }}
          colorScheme={checkState === "yes" ? "green" : "yellow"}
          size={"lg"}
          border={"2px"}
          defaultChecked={false}
        ></Checkbox>
      </Box>
    </VStack>
  );
};

export default CalendarEntry;
