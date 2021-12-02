import React from "react";
import Status from "../components/Status";
import StatusImages from './Images';
import '../styles/StatusContainer.css';

const StatusContainer = () => {

    const statusPost = [
        {
            id: 1,
            post: StatusImages.Image1,
            authorName: 'silly_fellows',
            authorImage: StatusImages.Image1,
        },
        {
            id: 2,
            post: StatusImages.Image2,
            authorName: 'gully_boys',
            authorImage: StatusImages.Image2,
        },
        {
            id: 3,
            post: StatusImages.Image3,
            authorName: 'singles_zindagi',
            authorImage: StatusImages.Image3,
        },
        {
            id: 4,
            post: StatusImages.Image4,
            authorName: 'we_are_not_the_same_bro',
            authorImage: StatusImages.Image4,
        },
        {
            id: 5,
            post: StatusImages.Image5,
            authorName: 'wassup_mowa',
            authorImage: StatusImages.Image5,
        },
        {
            id: 6,
            post: StatusImages.Image6,
            authorName: 'chill_bro',
            authorImage: StatusImages.Image6,
        },
        {
            id: 7,
            post: StatusImages.Image7,
            authorName: 'ghantaa',
            authorImage: StatusImages.Image7,
        },
        {
            id: 8,
            post: StatusImages.Image8,
            authorName: 'natho_pettukoku',
            authorImage: StatusImages.Image8,
        },
        {
            id: 9,
            post: StatusImages.Image9,
            authorName: 'updates_buzz',
            authorImage: StatusImages.Image9,
        },
        {
            id: 10,
            post: StatusImages.Image10,
            authorName: 'singles_zindagi',
            authorImage: StatusImages.Image10,
        },
        {
            id: 11,
            post: StatusImages.Image11,
            authorName: 'silly_fellows_',
            authorImage: StatusImages.Image11,
        },
    ]

    return(
    <div className="status-container">
        {
            statusPost.map(item => {
                return (
                    <Status key={item.id} authorName = {item.authorName} authorImage = {item.authorImage}/>
                )
            })
        }
    </div>
    )
}

export default StatusContainer;