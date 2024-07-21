import React from "react";

const AppointmentForm = () => {
  return (
    <div>
      {/* 
        <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <div className="input">
                    <DatePicker
                      locale={"pl"}
                      className="w-full bg-background cursor-pointer"
                      selected={field.value}
                      onChange={(date: Date | null) =>
                        field.onChange(date)
                      }
                      showTimeSelect
                      minDate={minDate}
                      dateFormat="dd/MM/yyy HH:mm"
                      minTime={
                        new Date("2024-07-14T08:00:00")
                      }
                      timeIntervals={15}
                      maxTime={
                        new Date("2024-07-14T16:00:00")
                      }
                      wrapperClassName="datePicker"
                    />
                    <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                  </div>
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          /> */}
    </div>
  );
};

export default AppointmentForm;
