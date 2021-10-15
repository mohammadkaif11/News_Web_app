import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export default class News extends Component {
        static defaultProps={
           country:'in',
           pagesize:6,
           category:'genral'
        }
       static propTypes={
           country:PropTypes.string,
           pagesize:PropTypes.number,
           category:PropTypes.string
        }

    constructor(props) {
        super(props);
            this.state={
                articles:[],
                loading:false,
                page:1
            }
            document.title=`NewsDomain ${this.props.category}`
    }

       async updateNews(){
        const url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=18f30ccbe8074223951c057194a1df68&page=${this.state.page}&pagesize=${this.props.pagesize}`
        this.setState({loading:true})
        let data= await fetch(url);
        let prasedata= await data.json();
        this.setState({articles:prasedata.articles,
            totalResults:prasedata.totalResults,
            loading:false
    });
    
       } 
    async componentDidMount(){
       this.updateNews();
     }
      
     handleNext = async()=>{ 
   this.setState({
       page:this.state.page+1
   })
   this.updateNews();
    }          
       
    handlePrevious= async ()=>{
        this.setState({
            page:this.state.page-1
        })
        this.updateNews();
   }

     render() {
        return (
          <>
x            <div className="container">
                 {this.state.loading && <Spinner/>}
                <div className="row">
                { !this.state.loading &&  this.state.articles.map((element)=>{
                                return <div className="col-md-4" key={element.url}>
                                <Newsitem title={element.title} discription={element.description} img={element.urlToImage} url={element.url} author={element.author} date={element.publishedAt}/>
                                </div>
                            })}
                </div>
                 <div className="container d-flex justify-content-between">
                 <button disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>Pervious</button>
                <button  disabled={this.state.page+1 > Math.ceil(this.state.totalResults/this.props.pagesize)}  className="btn btn-dark" onClick={this.handleNext}>Next</button>
                </div>
            </div>
            </>
        )
    }
}
