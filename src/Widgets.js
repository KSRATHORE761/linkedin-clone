import React from 'react';
import './Widgets.css'
import InfoIcon from '@mui/icons-material/Info';
import NewsArticle from './NewsArticle';


function Widgets() {

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon/>
      </div>
      <NewsArticle heading= "Papa React is back" subtitle = "Top news - 9899 reader" />
      <NewsArticle heading= 'Papa React is back' subtitle='Top news - 9899 reader'/> 
      <NewsArticle heading="Papa React is back" subtitle="Top news - 9899 reader" />
      <NewsArticle heading ="CoronaVirus UK updates" subtitle="Top news - 886 reader"/>
      <NewsArticle heading="Tesla hits new high" subtitle="Car & auto - 300 reader" />
      <NewsArticle heading="Bitcoin breaks $72k" subtitle="Top news - 123 reader" />
      <NewsArticle heading="Papa React launches course?!" subtitle="Top news - 6583 reader" />
    </div>
  )
}

export default Widgets
