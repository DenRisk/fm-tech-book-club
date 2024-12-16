import Overview from './sections/overview/overview.jsx'
import Benefits from './sections/benefits/benefits.jsx'
import Languages from './sections/languages/languages.jsx'
import Journey from './sections/journey/journey.jsx'
import Rating from './sections/rating/rating.jsx'
import Announcement from './sections/announcement/announcement.jsx'
import Membership from './sections/membership/membership.jsx'
import { useRef } from 'react';

function App() {
    const membershipRef = useRef(null);

    const scrollToMembership = () => {
        console.log(membershipRef.current)
        membershipRef.current.scrollIntoView({ behavior: "smooth"});
    }


    return (
        <main className='main-container'>
            <Overview scrollToMembership={scrollToMembership}/>
            <Benefits/>
            <Languages/>
            <Journey/>
            <Membership targetRef={membershipRef}/>
            <Rating/>
            <Announcement scrollToMembership={scrollToMembership}/>
        </main>
    )
}

export default App
