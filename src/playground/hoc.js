// HOC higher order component - A component that renders other components
// Purpose of HOC
// - Reuse code
// - Render hijacking
// - Prop Manipulation
// - Abstract state

import React from 'react'
import ReactDom from 'react-dom'

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The Info is: {props.info}</p>
    </div>
)

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info. Please don't share</p>}
            <WrappedComponent {...props}/>
        </div>
    )
}

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAuthenticated ? (<WrappedComponent {...props}/>) : (<p>Please login to view info</p>) }
        </div>
    )
}

const AdminInfo = withAdminWarning(Info)
const AuthInfo = requireAuthentication(Info)

// ReactDom.render(<AdminInfo isAdmin={true} info="these are the details"/>, document.getElementById('app'))
ReactDom.render(<AuthInfo isAuthenticated={true} info="these are the details"/>, document.getElementById('app'))