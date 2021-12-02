import React from "react";
import '../styles/PostContainer.css';
import Post from '../components/Post';
import Images from "./Images";
import StatusContainer from "./StatusContainer";

const PostContainer = () => {

    const posts = [
        {
            id : 1,
            post : Images.Image1,
            authorName : 'silly_fellows',
            authorImage : Images.Image1,
        },
        {
            id : 2,
            post : Images.Image2,
            authorName : 'gully_boys',
            authorImage : Images.Image2,
        },
        {
            id : 3,
            post : Images.Image3,
            authorName : 'singles_zindagi',
            authorImage : Images.Image3,
        },
        {
            id : 4,
            post : Images.Image4,
            authorName : 'we_are_not_the_same_bro',
            authorImage : Images.Image4,
        },
        {
            id : 5,
            post : Images.Image5,
            authorName : 'wassup_mowa',
            authorImage : Images.Image5,
        },
        {
            id : 6,
            post : Images.Image6,
            authorName : 'chill_bro',
            authorImage : Images.Image6,
        },
        {
            id: 7,
            post: Images.Image7,
            authorName: 'ghantaa',
            authorImage: Images.Image7,
        },
        {
            id: 8,
            post: Images.Image8,
            authorName: 'natho_pettukoku',
            authorImage: Images.Image8,
        },
        {
            id: 9,
            post: Images.Image9,
            authorName: 'updates_buzz',
            authorImage: Images.Image9,
        },
        {
            id: 10,
            post: Images.Image10,
            authorName: 'singles_zindagi',
            authorImage: Images.Image10,
        },
        {
            id: 11,
            post: Images.Image11,
            authorName: 'silly_fellows_',
            authorImage: Images.Image11,
        },
    ]

    return (
        <div className="post-container">
            <div>
                <StatusContainer />
                {
                    posts.map(item => {
                        return (
                            <Post key={item.id} post={item.post} authorName={item.authorName} authorImage={item.authorImage} />
                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostContainer;