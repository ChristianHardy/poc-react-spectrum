import { DatePicker as AdobeDatePicker, SpectrumDatePickerProps, View } from '@adobe/react-spectrum';
import { parseDate } from '@internationalized/date';
import React from 'react';
import styles from './styles.module.css';

export type DatePickerProps = {
  onChange?: (date: string) => void;
};

function DatePicker(props: DatePickerProps) {
  /**
   * Initializers
   */
  // Set the actual date
  const date = new Date();

  // Parse the month
  const m = date.getMonth() + 1;
  const month = m > 9 ? m.toString() : `0${m}`;

  // Parse the day
  const d = date.getDate();
  const day = d > 9 ? d.toString() : `0${d}`;

  // Set the ISO 8601 date format
  const formattedDate = `${date.getFullYear()}-${month}-${day}`;

  /**
   * States
   */
  // value could be null | CalendarDate | ZonedDateTime | CalendarDateTime
  const [value, setValue] = React.useState(parseDate(formattedDate));

  /**
   * Functions
   */
  function handleChange(date: any): void {
    // Update the date state
    setValue(date);

    // Propagate the change to parent component
    if (!props.onChange) {
      return;
    }
    props.onChange(date ? date.toString() : '');
  }

  /**
   * Component props
   */
  const labelProps1: React.LabelHTMLAttributes<HTMLLabelElement> = {
    children: 'Start Date (built in text color)',
    className: styles.label1,
  };

  const labelProps2: React.LabelHTMLAttributes<HTMLLabelElement> = {
    children: 'Start Date (Color taken from NDS)',
    className: styles.label2,
  };

  const datepickerLabel1 = <label {...labelProps1}/>;
  const datepickerLabel2 = <label {...labelProps2}/>;

  const datePickerProps1: SpectrumDatePickerProps<any> = {
    label: datepickerLabel1,
    'aria-label': 'Start Date',
    onChange: handleChange,
    value,
  };

  const datePickerProps2: SpectrumDatePickerProps<any> = {
    label: datepickerLabel2,
    'aria-label': 'Start Date',
    onChange: handleChange,
    value,
  };

  /**
   * Renders
   */
  return (
    <>
      <View>
        <AdobeDatePicker {...datePickerProps1}/>
      </View>

      <View marginTop='size-200'>
        <AdobeDatePicker {...datePickerProps2}/>
      </View>
    </>
  );
}

export { DatePicker };
