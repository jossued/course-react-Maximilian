import NewMeetupForm from "../components/meetups/NewMeetupForm";
import { useHistory } from "react-router-dom";

function NewMeetupPage() {
    const history = useHistory();

    function addMeetupHandler(meetupData) {
        const firebaseDatabaseURL = 'https://react-course-meetup-app-default-rtdb.firebaseio.com/';
        const meetupTableURL = firebaseDatabaseURL + 'meetup.json';
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