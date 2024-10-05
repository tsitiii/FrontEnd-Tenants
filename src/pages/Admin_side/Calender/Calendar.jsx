import { useState } from 'react';
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import Sidebar from "../../../components/Sidebar/Sidebar";

function Calendar() {
  const [events, setEvents] = useState(()=>{
    const storedEvents = localStorage.getItem('calendarEvents');
    return storedEvents ? JSON.parse(storedEvents) : [];
  });

  // Function to handle adding events
  const handleDateClick = (selected) => {
    const title = prompt("Please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      const newEvent = {
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      };

      // Update events state and localStorage
      const updatedEvents = [...events, newEvent];
      setEvents(updatedEvents);
      localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));

      calendarApi.addEvent(newEvent);
    }
  };

  const handleEventClick = (selected) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }

    const updatedEvents = events.filter(event => event.id !== selected.event.id);
    setEvents(updatedEvents);
    localStorage.setItem('calendarEvents', JSON.stringify(updatedEvents));
  }
  


  return (
    <div className='flex flex-row h-screen'>
      <Sidebar />
      <div className="h-screen w-full flex flex-col bg-gray-50"> {/* Light background for contrast */}
        <div className="bg-blue-600 text-white shadow-lg p-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">Event Calendar</h1>
        </div>

        <div className="flex-grow p-4"> {/* Space between header and calendar */}
          <div className="bg-white rounded-lg shadow-lg h-full p-6">
            <FullCalendar
              plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
              initialView='dayGridMonth' // Use state to manage initial view
              events={events}
              slotLabelFormat={{
                hour: "numeric",
                hour12: true,
              }}
              headerToolbar={{
                left: 'prev,next today',
                center: 'title',
                right: 'dayGridMonth,timeGridWeek,timeGridDay'
              }}
              height="100%"
              editable={true}
              selectMirror={true}
              selectable={true}
              select={handleDateClick}
              eventClick={handleEventClick}
              // eventsSet={(e) => setEvents(e)}
            

              
            />
          </div>
        </div>
      </div>
    </div>
  );

}
export default Calendar;
