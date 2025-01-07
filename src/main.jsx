import ReactDOM from 'react-dom/client';
import "./index.css";
import Header from './components/Header';
import Section from './components/Section';
import HelpfulResource from './components/HelpfulResource';
import AboutMe from './components/AboutMe';

function App() {
    return <div className="app">
        <Header />
        <Section title="What is react?">
            React is a JavaScript library that streamlines building complex interactive UIs with the use of components. Props allow for individual components to be written once and then reused in multiple places, and states and effects allow for those components to be very interactive.
        </Section>
        <Section title="Benefits of react">
            <ul>
                <li>
                    Reusability - write the bulk of a component's code once, and use it as you would use a regular HTML tag.
                </li>
                <li>
                    Statefulness - manage internal data of components, and the overall app itself, through the use of state - set and use data with easily written setters and getters.
                </li>
                <li>
                    Simplicity - though not required to use React, JSX vastly simplifies and streamlines the process of writing components.
                </li>
                <li>
                    Modularity - React plays nicely with other libraries and frameworks, and can slot nicely into any other stack - and it has a thriving ecosystem of third-party libraries all its own, as well!
                </li>
                <li>
                    Support - React possesses extensive documentation and in-depth learning material, making learning how to use it a breeze.
                </li>
            </ul>
        </Section>
        <Section title='Helpful Resources' >
            <HelpfulResource label='React Quick Start' link='https://react.dev/learn' />
            <HelpfulResource label='W3schools React Tutorial' link='https://www.w3schools.com/REACT/default.asp' />
            <HelpfulResource label='React Reference Documentation' link='https://react.dev/reference/react' />
        </Section>
        <AboutMe />
    </div>
}
const div = document.getElementById('root');
const root = ReactDOM.createRoot(div)

root.render(<App />);

// Render the App component to the root element
