import { MongoClient } from 'mongodb';
import Head from 'next/head';
import MeetupList from '../components/meetups/MeetupList';

function HomePage(props) {
    
    return (
        <>
            <Head>
                <title>React Meetups</title>
                <meta 
                    name="description" 
                    content="Browse a huge list of active React Meetups!"
                />
            </Head>
            <MeetupList meetups={props.meetups}/>
        </>
    );
}

export async function getStaticProps() {
    // fetch data from an API
    
    const client = await MongoClient.connect(
      'mongodb+srv://emmapersephonepurvis:zOCSqs78upKil1Py@meetups.bphzlox.mongodb.net/'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find().toArray();

    client.close();

    return {
        props: {
            meetups: meetups.map(meetup => ({
                title: meetup.title,
                address: meetup.address,
                image: meetup.image,
                id: meetup._id.toString(),
            }))
        },
        revalidate: 10
    }
}

export default HomePage;