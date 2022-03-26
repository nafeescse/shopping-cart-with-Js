import React from 'react';

const Answers = () => {
    return (
        <div className='flex flex-col m-3'>
            <div className='bg-green-200 m-3 p-3 rounded-lg'>
            <h2 className='text-2xl'>Q-1: How does React workk?</h2>
            <p className='text-xl'>React.js is generally thought of as the view layer in an application. You might have used library like Handlebars, or jQuery in the past. Just as jQuery manipulates UI elements, or Handlebars templates are inserted onto the page, React components change what the user sees.The syntax used by React components is called JSX (JavaScript XML). The idea is actually quite simple. A component renders content by returning some JSX. The JSX itself is usually HTML markup, mixed with custom tags for the React components. What’s absolutely groundbreaking here is that we don’t have to perform little micro-operations to change the content of a component.</p>
            </div>
            <div className='bg-green-200 m-3 p-3 rounded-lg'>
            <h2 className='text-2xl'>Q-3: How does useState work?</h2>
            <p className='text-xl'>useState is a Hook that allows you to have state variables in functional components. You pass the initial state to this function and it returns a variable with the current state value (not necessarily the initial state) and another function to update this value. As stated previously, useState enables you to add state to function components. Calling React.useState inside a function component generates a single piece of state associated with that component. Whereas the state in a class is always an object, with Hooks, the state can be any type. Each piece of state holds a single value, which can be an object, an array, a boolean, or any other type you can imagine. So when should you use the useState Hook? It’s especially useful for local component state, but larger projects might require additional state management solutions.</p>
            </div>
            
        </div>
    );
};

export default Answers;