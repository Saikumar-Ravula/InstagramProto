import React from "react";
import '../styles/PostContainer.css';
import Post from '../components/Post';
import Images from "./Images";

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
    ]


    return (
        <div className="post-container">
            <div>
                {
                    posts.map(item => {
                        return (
                            <Post post={item.post} authorName={item.authorName} authorImage={item.authorImage} />
                        )
                    })
                }
                
            </div>
        </div>
    )
}

export default PostContainer;