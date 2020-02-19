import React, {Component} from 'react';
import {parseDate} from '../interface';
import CalendarList from '../calendar-list';

export default class TrimmedCalendarList extends Component {
  render() {
    const startDate = this.props.startDate;
    const endDate = this.props.endDate;
    const parsedStartDate = parseDate(startDate);
    const dayNumberOfWeek = parsedStartDate.getDay();
    parsedStartDate.addDays(-dayNumberOfWeek);
    return (
      <CalendarList
        {...this.props}
        current={startDate}
        pastScrollRange={0}
        futureScrollRange={1}
        hideDayNames
        disableWeekends
        monthFormat={'MMM'}
        minDate={startDate}
        maxDate={endDate}
        minDateShown={parsedStartDate}
        maxDateShown={endDate}
        theme={{
          'stylesheet.calendar.header': {
            header: {alignItems: 'flex-start', paddingVertical: 15},
            monthText: {textTransform: 'uppercase'},
          },
          ...this.props.theme,
        }}
      />
    );
  }
}
