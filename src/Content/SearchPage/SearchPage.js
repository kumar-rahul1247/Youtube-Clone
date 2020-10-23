import React from 'react';
import './SearchPage.css';
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';
import ChannelRow from './ChannelRow';
import VideoRow from './VideoRow';

function SearchPage() {
    return (
        <div className = "searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>FILTER</h2>
            </div>
            <hr/>

            <ChannelRow 
                image="https://lh3.googleusercontent.com/ogw/ADGmqu9-SMicBaoPkNxxGOZ71w73VvFL68Ano6FD4mz0=s32-c-mo"
                channel="Code the Happiness"
                verified
                subs="999K"
                noOfVideos={999}
                description="lets meet us guy have a drasti change and code ur upcomming beauty happiness"
            />

            <hr/>

            <VideoRow 
                views="2.3M Views"               
                subs="999K"
                description="lets meet us guy have a drasti change and code ur upcomming beauty happiness"
                timestamp="3 days ago"
                channel="Code the Happiness"
                title="Let Code The Danger Discovery"
                image="https://upload.wikimedia.org/wikipedia/jv/thumb/0/09/Discovery_Channel.jpg/250px-Discovery_Channel.jpg"
                
                
            />
            <VideoRow 
                views="2.3M Views"               
                subs="999K"
                description="lets meet us guy have a drasti change and code ur upcomming beauty happiness"
                timestamp="3 days ago"
                channel="Code the Happiness"
                title="Let Code The Danger Discovery"
                image="https://upload.wikimedia.org/wikipedia/jv/thumb/0/09/Discovery_Channel.jpg/250px-Discovery_Channel.jpg"
                
                
            />
            <VideoRow 
                views="2.3M Views"               
                subs="999K"
                description="lets meet us guy have a drasti change and code ur upcomming beauty happiness"
                timestamp="3 days ago"
                channel="Code the Happiness"
                title="Let Code The Danger Discovery"
                image="https://upload.wikimedia.org/wikipedia/jv/thumb/0/09/Discovery_Channel.jpg/250px-Discovery_Channel.jpg"
                
                
            />
            <VideoRow 
                views="2.3M Views"               
                subs="999K"
                description="lets meet us guy have a drasti change and code ur upcomming beauty happiness"
                timestamp="3 days ago"
                channel="Code the Happiness"
                title="Let Code The Danger Discovery"
                image="https://upload.wikimedia.org/wikipedia/jv/thumb/0/09/Discovery_Channel.jpg/250px-Discovery_Channel.jpg"
                
                
            />
        </div>
    )
}

export default SearchPage;