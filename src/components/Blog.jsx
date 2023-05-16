import React from "react";

const Blog = () => {
  return (
    <div className="bg-accent p-12">
      <div className="p-8">
        <h1 className="text-4xl">what is the purpose of react router dom? .</h1>
        <p>
          The purpose of React Router DOM is to provide routing capabilities to
          React applications. It allows you to create multiple pages or views
          within a single-page application (SPA) and handle navigation between
          them. React Router DOM enables developers to define routes, render
          specific components based on the current URL, and manage browser
          history
        </p>
      </div>
      <div className="p-8">
        <h1 className="text-4xl">How does Context api works? .</h1>
        <p>
          The Context API in React provides a way to share data between
          components without passing props through each level of the component
          tree. Here's how it works:
          <ol type="1">
            <li>
              Create a Context: Use the createContext() function to create a new
              context. This returns an object with two components: a Provider
              and a Consumer. Set up a Provider: Wrap the components that need
              access to the shared data with the Provider component. The
              Provider component accepts a value prop, which can be any
              JavaScript value or object.
            </li>
            <li>
              Consume the Context: To access the shared data within a component,
              use the Consumer component or the useContext() hook. The Consumer
              component renders a function as its child, allowing you to access
              the context value. The useContext() hook can be used within
              functional components to retrieve the context value.
            </li>
            <li>
              Update the Context: To update the context value, you need to
              modify the value within the Provider component. Any component that
              consumes the context will automatically re-render when the context
              value changes. By using the Context API, you can avoid prop
              drilling and make it easier to manage and share state or other
              data across multiple components in your React application.
            </li>
          </ol>
        </p>
      </div>
      <div className="p-8">
        <h1 className="text-4xl">useRef() hook in react </h1>
        <p>
          The useRef() hook in React is used to create a mutable reference that
          persists across re-renders of a component. It returns a mutable ref
          object that can hold a value. Here&apos;s how useRef() works: 
          Create a Ref:
          Call the useRef() hook and assign the result to a variable. For
          example: const myRef = useRef(); Attach the Ref to an Element: In JSX,
          you can assign the ref property of an element to the ref object
          created with useRef(). 
          Access the Ref&apos;s Value: To access the value stored in the ref, you can
          use myRef.current. For example: console.log(myRef.current.value); The
          useRef() hook is often used to store references to DOM elements or to
          store any mutable value that needs to persist across re-renders. It&apos;s
          important to note that changing the ref.current value doesn&apos;t trigger
          a re-render of the component, making it suitable for storing mutable
          data that doesn&apos;t affect the component&apos;s rendering.
        </p>
      </div>
    </div>
  );
};

export default Blog;
