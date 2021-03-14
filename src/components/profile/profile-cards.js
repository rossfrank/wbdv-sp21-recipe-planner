import React from 'react'
import {useParams} from "react-router-dom";

const ProfileCards = ({}) => {

    const {tab} = useParams();

    const items = [1,2,3,4,5];

    return(
        <div className="mt-4">
            <div className="container">
                {
                    items.map(item =>
                        <div>
                            <div className="card flex-column align-items-start">
                                <div className="card-header d-flex w-100 justify-content-between">
                                    <h5 className="mb-1">Heading</h5>
                                    <small>3 days ago</small>
                                </div>
                                <div className="card-body">
                                    <p className="mb-1">Content</p>
                                    <small>{`${item} ${tab}`}</small>
                                </div>
                            </div>
                            <br/>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default ProfileCards
