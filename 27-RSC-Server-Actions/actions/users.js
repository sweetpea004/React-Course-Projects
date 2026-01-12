'use server'; // <-- important keyword
import fs from 'node:fs';

/**
 * Server side push data
 * - you can only define a server action inside a component if it
 *   is not a client side component 
 * - can USE them inside client components, just not define
 */

export async function saveUserAction(formData) {
    
    const data = fs.readFileSync('dummy-db.json', 'utf-8');
    const instructors = JSON.parse(data);
    const newInstructor = {
        id: new Date().getTime().toString(),
        name: formData.get('name'),
        title: formData.get('title'),
    };

    instructors.push(newInstructor);
    fs.writeFileSync('dummy-db.json', JSON.stringify(instructors));
}