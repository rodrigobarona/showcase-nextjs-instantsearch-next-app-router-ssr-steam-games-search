"use client";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useState } from "react";
import { useRange, type UseRangeProps } from "react-instantsearch";

interface DateRangeFilterProps extends UseRangeProps {
  attribute: string;
}

export function DateRangeFilter({ attribute }: DateRangeFilterProps) {
  const { refine, start, canRefine } = useRange({
    attribute,
  });

  const [date, setDate] = useState<Date | undefined>(start[0] ? new Date(start[0]) : undefined);

  if (!canRefine) return null;

  return (
    <div className="flex flex-col space-y-2">
      <Popover>
        <PopoverTrigger asChild>
          <Button
            variant={"outline"}
            className={cn(
              "w-full justify-start text-left font-normal",
              !date && "text-muted-foreground",
            )}
          >
            <CalendarIcon className="mr-2 h-4 w-4" />
            {date ? format(date, "PPP") : <span>Pick a date</span>}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            onSelect={(newDate) => {
              setDate(newDate);
              if (newDate) {
                const timestamp = newDate.getTime();
                refine([timestamp, timestamp + 86400000]); // Add 24 hours in milliseconds
              }
            }}
            initialFocus
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
