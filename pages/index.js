import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../dummy-data";

function MainPage() {

  const featuredEvents = getFeaturedEvents();


  return (
    <div>
      <EventList events={featuredEvents}/>
    </div>
  )
}

export default MainPage;