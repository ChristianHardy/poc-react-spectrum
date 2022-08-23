import React from 'react';
import { DatePicker as AdobeDatePicker, SpectrumDatePickerProps } from '@adobe/react-spectrum';

function DatePicker() {
  /**
   * Contexts
   */

  /**
   * Functions
   */

  /**
   * Initializers
   */
  const datePickerProps: SpectrumDatePickerProps<any> = {
    label: 'Start Date',
    'aria-label': 'Start Date',
  };

  /**
   * Hooks
   */

  /**
   * Renders
   */
  return (
    <>
      <AdobeDatePicker {...datePickerProps}/>
    </>
  );
}

export { DatePicker };
