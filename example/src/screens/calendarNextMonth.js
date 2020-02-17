import React, {Component} from 'react';
import {CalendarList} from 'react-native-calendars';

export default class CalendarNextMonth extends Component {
  render() {
    return (
      <CalendarList
        calendarHeight={300}
        current={'2020-02-17'}
        pastScrollRange={0}
        futureScrollRange={1}
        hideDayNames
        monthFormat={'MMM'}
        minDateShown={'2020-02-17'}
        maxDateShown={'2020-03-16'}
        theme={{
          'stylesheet.calendar.header': {
            header: { alignItems: 'flex-start', paddingVertical: 15},
            monthText: { textTransform: 'uppercase' }
          },
        }}
      />
    );
  }
}
