import React, { Component } from 'react'
import Loading from './Loading';
import NewsComponent from './NewsComponent';
import NewsItem from './NewsItem';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    

    constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            pageno:1,
            pageResults:0
          }
    }
    async updateNews(){        
      this.setState({loading:true})
      fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e5f7831ec86a4936a36c62d18665c376&page=${this.state.pageno}`)
      .then((response) => response.json())
      .then(pdata => {
        this.setState({ 
          articles:pdata.articles,
          // pageno:this.state.pageno-1,
          pageResults:pdata.totalResults,
          loading:false
         });
    });
    }
    async componentDidMount(){
        this.setState({loading:true})
        fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e5f7831ec86a4936a36c62d18665c376`)
        .then((response)=>response.json())
        .then(pdata=> {
            this.setState(
                {
                    articles:pdata.articles,
                    pageResults:pdata.totalResults,
                    loading:false
                }
            )
        });
       
        
    }
    // nextPage=async ()=>{ 
    //   await this.setState({pageno:this.state.pageno+1});
    //   this.updateNews();
    // }
    // previousPage= async()=>{
    //   await this.setState({pageno:this.state.pageno-1});
    //   this.updateNews();
    // }
    fetchMoreData =async ()=>{
    await this.setState({pageno:this.state.pageno+1});
     fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${this.props.category}&apiKey=e5f7831ec86a4936a36c62d18665c376&pageSize=${this.state.pagesize}`)
      .then((response)=>response.json())
      .then(pdata=> {
          this.setState(
              {
                  articles:pdata.articles.concat(pdata.articles),
                  pageResults:pdata.totalResults,
                  loading:false
              }
          )
      });
    };
    
    

  render() {
    return (
      
      <>
        <NewsComponent />
        <div className="container">{this.state.loading && <Loading />}</div>
       
        <InfiniteScroll style={{overflow:'none'}}
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.pageResults>this.state.articles.length}
          loader={<Loading />}
          scrollableTarget="scrollableDiv"
          endMessage={
            <p style={{ textAlign: "center" }}>
              <b>Yay! You have seen it all</b>
            </p>
          }
        >
      
        <div className='container' >
        <div className="row">
            {this.state.articles.map((element)=>{
                    return <div className="col-md-4 my-3" key={element.url} >
                                <NewsItem title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} date={element.publishedAt} author={element.author} source={element.source.name}/>
                            </div>
            })}
        </div>
        </div>
        
        </InfiniteScroll>
        
        </>    
      
    );
  }
}

export default News
