import React, {Component} from 'react';
import {TrimmedCalendarList} from 'react-native-calendars';

export default class TrimmedCalendarListExample extends Component {
  render() {
    const startDate = '2020-03-20';
    const endDate = '2020-04-20';
    return (
      <TrimmedCalendarList
        startDate={startDate}
        endDate={endDate}
      />
    );
  }
}
