import React from 'react';
import './NewsArticle.css';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function NewsArticle({heading,subtitle}) {
  return (
    <div className="news__article">
    <div className="news__articleleft">
        <FiberManualRecordIcon/>
    </div>
    <div className="news__articleright">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
    </div>
</div>
  )
}

export default NewsArticle
