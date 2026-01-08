import MeetupList from '../components/meetups/MeetupList';
import Layout from '../components/layout/Layout';

const DUMMY_MEETUPS = [
    {
        id:'m1',
        title: 'A first meetup',
        image: 'https://images.nationalgeographic.org/image/upload/t_edhub_resource_key_image/v1652341395/EducationHub/photos/sonoran-desert.jpg',
        address: 'Some address 5, 12345 Some City',
        description: 'This is a first meetup!',
    }
]

function HomePage() {
    return (
        <>
            <MeetupList meetups={DUMMY_MEETUPS}/>
        </>
    );
}

export default HomePage;