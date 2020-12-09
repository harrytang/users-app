import React, { Link } from 'react-router-dom';
import './ShowPost.css';
import Map from '../Map/Map';

const dateRaw = new Date();
const dateString = dateRaw.toDateString();
const user = {
    id: 1,
    username: "Harry"
}

function ShowPost({ imgSource, adress, title, description }) {
    return (
        <div className="ShowPost-container">
            <div className="ShowPost-card">
                <Link to="/post/id"><img src={imgSource}></img></Link>
                <p className="ShowPost-infoBox"><em><strong>Submitted </strong><br />{dateString}</em><br /><br /> <strong>by </strong><a href="/User/:id">{user.username}</a></p>
                <h2 className="ShowPost-title">{title}</h2>
                <div className="desc-and-map">
                <div>
                    <p className="ShowPost-desc">{description}</p>
                    <p className="ShowPost-adress"><i class="fas fa-map-marked-alt"></i> {adress}</p>
                    </div>
                    <Map adress={adress} />
                </div>
            </div>
        </div>
    );
}

export default ShowPost;