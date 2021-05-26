import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";
import { FIREBASE_CONFIG } from "../constants/firebase";

function NewMeetupPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        const meetupTableURL = FIREBASE_CONFIG.firebaseDatabaseURL + 'meetup.json';
        fetch(meetupTableURL, {
            method: 'POST',
            body: JSON.stringify(meetupData),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(
            () => {
                history.replace('/');
            }
        );
    }
    return <section>
        <h1>Add New Meetup</h1>
        <NewMeetupForm onAddMeetup={addMeetupHandler} />
    </section>
}

export default NewMeetupPage;