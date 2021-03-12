import React from 'react'

export default class Profile extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <h1>Profile</h1>
            </div>
        )
    }
}