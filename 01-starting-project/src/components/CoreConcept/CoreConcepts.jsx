import CoreConcept from "./CoreConcept.jsx";
import Section from "../Section.jsx";
import { CORE_CONCEPTS } from "../../data.js";

export default function CoreConcepts() {
    return (
        <Section id="core-concepts" title="Core Concepts">
            <ul>
            {/* longer alternative */}
            {/* 
            <CoreConcept 
                title={CORE_CONCEPTS[0].title} 
                description={CORE_CONCEPTS[0].description}
                image={CORE_CONCEPTS[0].image}
            /> 
            */}

            {/* shorter alternative */}
            {/* 
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/> 
            */}

            {/* more efficient */}
            {CORE_CONCEPTS.map((concept) => <CoreConcept key={concept.title} {...concept}/>)}
            </ul>
        </Section>
    );
}