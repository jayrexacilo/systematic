import React, {useState} from 'react'
import { Container, Row, Col } from 'reactstrap';
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import Header from '../../components/Admin/Header';
import events from './events';

type DescribeFn = {
  start: any;
  end: any;
}

export default function CalendarC () {
  const MySwal = withReactContent(Swal);
  const [eventsList, setEvents] = useState(events);
  const localizer = momentLocalizer(moment);
  const handleSelect = async (fn: DescribeFn) => {
    const { value: title } = await MySwal.fire({
      title: 'Event Title',
      input: 'text',
      inputPlaceholder: 'Enter your event title'
    })

    const id = eventsList.length + 1;
    setEvents([...eventsList,
      {
        start: fn.start,
        end: fn.end,
        id: id,
        title: title
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
