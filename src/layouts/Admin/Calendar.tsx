import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar'
import moment from 'moment'

import Header from '../../components/Admin/Header';
import events from './events';

type DescribeFn = {
  start: any;
  end: any;
}

export default function CalendarC () {
  const [eventsList, setEvents] = useState(events);
  const localizer = momentLocalizer(moment);
  const handleSelect = (fn: DescribeFn) => {
    const title = window.prompt('New Event name')
    const id = eventsList.length + 1;
    setEvents([...eventsList,
      {
        start: fn.start,
        end: fn.end,
        id: id,
        title: 'All Day Event very long title'
      } ]);
  }

  return (
    <>
      <div className="header bg-gradient-info pb-2 pt-5 pt-md-8">
      </div>
      <Container fluid>
        <Row>
          <Col>
            <Calendar
              selectable
              localizer={localizer}
              events={eventsList}
              defaultView='month'
              onSelectEvent={event => alert(event.title)}
              onSelectSlot={handleSelect}
            />
          </Col>
        </Row>
      </Container>
    </>
  )
}
