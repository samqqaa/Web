import React from 'react'
import { connect } from 'react-redux'
import { postArticle } from './articleActions'
//Posting new article card
const NewArticle = ({dispatch}) => {
    return(
      <div className="row">
        <div className="col-sm-12">
          <div className="panel panel-default text-left">

            <div className="panel-body">
              <textarea id="newPost" className="form-control" rows="3"placeholder="Share something.."></textarea>
              <br/>
              <button type="button" className="btn btn-default btn-sm" onClick={()=>{posting(dispatch)}}>
                <span className="glyphicon glyphicon-thumbs-up"></span> Post
              </button>
              <button type="button" className="btn btn-default btn-sm" onClick={()=>{document.getElementById('newPost').value = ""}}>Clear</button>
              <button type="button" className="btn btn-default btn-sm">
              <input  type="file" />
              </button>
            </div>
          </div>
        </div>
      </div>
    )
}
//Post the context in the input textarea
const posting = (dispatch) => {
  var newArticle=document.getElementById("newPost").value
  if (newArticle){
    dispatch(postArticle(newArticle))
    // dispatch({type:'getArticles'})
    //and FILE
  }
  newArticle=document.getElementById("newPost").value = ""
}

//Dispatch the posting action to the main reducer to add new post into articles
export default connect()(NewArticle)
  