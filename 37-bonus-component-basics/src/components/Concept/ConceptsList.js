import Concept from "./Concept";

export default function ConceptsList({ concepts }) {
    return (
        <ul id="concepts">
            {concepts.map((concept) => 
                <Concept concept={concept}/>
            )}
        </ul>
    );
}
