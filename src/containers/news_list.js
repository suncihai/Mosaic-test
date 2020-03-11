import React, { Component } from "react";
import {connect} from 'react-redux';

class NewsList extends Component {

   render(){
     const news = this.props.news[0];
     if(!news) {
        return <div/>
     } else {
      return(
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Author</th>
              <th>Title</th>
              <th>Description</th>
              <th>Link</th>
              <th>LinkImage</th>
              <th>Published Time</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {news.articles.map((item, index)=>{
               return (
                  <tr key={index}>
                     {
                        Object.keys(item).map((article, order)=>{
                           if(typeof(item[article]) === 'string') {
                              if(article === 'url') {
                                return <td key={order}><a target="_blank" href={item[article]}>{item[article]}</a></td>
                              } else {
                                return <td key={order}>{item[article]}</td>
                              }
                           } else if(!item[article]) {
                              return <td key={order}>None</td>
                           }
                        })
                     }
                  </tr>
               )
            })}
          </tbody>
        </table>
   	 );
     }
   	 
   }
}

function mapStateToProps({news}){
  return {news};
}

export default connect(mapStateToProps)(NewsList);