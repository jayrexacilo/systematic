import React from 'react'
import { Container } from 'reactstrap';
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';

import Header from '../../components/Admin/Header';

export default function Calendar () {
  return (
    <>
      <Header />
      <Container className="mt--7" fluid>
        <FullCalendar
          plugins={[ dayGridPlugin ]}
          initialView="dayGridMonth"
        />
      </Container>
    </>
  )
}
