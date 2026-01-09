import { useRouter } from "next/router";
import { MongoClient, ObjectId } from "mongodb";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import Head from "next/head";
import { Fragment } from "react/jsx-runtime";

function MeetupDetails(props) {
    useRouter();
    return (
        <Fragment>
            <Head>
                <title>{props.meetupData.title}</title>
                <meta 
                    name="description" 
                    content={props.meetupData.description}
                />
            </Head>
            <MeetupDetail 
                image={props.meetupData.image}
                title={props.meetupData.title}
                address={props.meetupData.address}
                description={props.meetupData.description}
            />
        </Fragment>
    );
}

export async function getStaticPaths() {
    const client = await MongoClient.connect(
        'mongodb+srv://emmapersephonepurvis:zOCSqs78upKil1Py@meetups.bphzlox.mongodb.net/'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const meetups = await meetupsCollection.find({}, {_id: 1}).toArray();

    client.close();

    return {
        fallback: 'blocking',
        paths: meetups.map(meetup => ({ 
            params:  { meetupId: meetup._id.toString() },
        }))
    }
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    const client = await MongoClient.connect(
        'mongodb+srv://emmapersephonepurvis:zOCSqs78upKil1Py@meetups.bphzlox.mongodb.net/'
    );
    const db = client.db();

    const meetupsCollection = db.collection('meetups');

    const selectedMeetup = await meetupsCollection.findOne({_id: new ObjectId(meetupId)});

    client.close();

    

    return {
        props: {
            meetupData: {
                id: selectedMeetup._id.toString(),
                titles: selectedMeetup.title,
                address: selectedMeetup.address,
                image: selectedMeetup.image,
                description: selectedMeetup.description,
            },
        }
    }
}

export default MeetupDetails;