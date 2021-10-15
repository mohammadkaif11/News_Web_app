import React, { Component } from 'react'

export default class newsitem extends Component {
    render() {
        let { title, discription,img,url,author,date} = this.props;
        return (
            <div className="my-3">
                <div className="card">
                    <img src={!img?"https://i.gzn.jp/img/2021/09/08/apple-event/00.jpg":img} className="card-img-top" alt="/"/>
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{discription}</p>
                        <p className="card-text"><small className="text-muted">By {!author?"author":author} on  { new Date(date).toGMTString()}
                    </small></p>
                        <a href={url} target="_blank" className="btn btn-sm btn-dark">Readmore</a>
                    </div>
                </div>

            </div>
        )
    }
}
