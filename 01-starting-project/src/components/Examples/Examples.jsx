import { useState } from 'react';

import { EXAMPLES } from "../../data.js";
import TabButton from "../TabButton/TabButton.jsx";
import Tabs from '../Tabs.jsx';
import Section from "../Section.jsx";

export default function Examples() {
    const [ selected, setSelected ] = useState();

    function handleClick(selectedButton) {
        // selectedButton => 'components', 'jsx', 'props', 'state'
        setSelected(selectedButton); // saved into 'selected'
    }

    let tabContent = <p>Please Select a Topic.</p>

    if (selected) {
        tabContent = ( 
        <div id='tab-content'>
            <h3>{EXAMPLES[selected].title}</h3>
            <p>{EXAMPLES[selected].description}</p>
            <pre>
            <code>
                {EXAMPLES[selected].code}
            </code>
            </pre>
        </div> 
        )
    }

    return (
        <Section id="examples" title="Examples">
            <Tabs
                buttons={
                    <>
                        <TabButton 
                            isSelected={selected === 'components'} 
                            onClick={() => handleClick('components')}>
                            Components
                        </TabButton>
                        <TabButton 
                            isSelected={selected === 'jsx'} 
                            onClick={() => handleClick('jsx')}>
                            JSX
                        </TabButton>
                        <TabButton 
                            isSelected={selected === 'props'} 
                            onClick={() => handleClick('props')}>
                            Props
                        </TabButton>
                        <TabButton 
                            isSelected={selected === 'state'} 
                            onClick={() => handleClick('state')}>
                            State
                        </TabButton>
                    </>
                }>
                {tabContent}
            </Tabs>
        </Section>
    );
}