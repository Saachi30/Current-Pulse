import React, { useEffect } from "react";
import axios from "axios";
import NewsCard from "./NewsCard"
function Data(props){
    let value=props.val;
    
    let baseURL="";
    props.val?baseURL=`https://newsapi.org/v2/top-headlines?country=in&category=${props.val}&apiKey=583a0a80147c44689c5b4f0d6771246e`:baseURL=`https://newsapi.org/v2/top-headlines?country=in&apiKey=583a0a80147c44689c5b4f0d6771246e`;
    const [data, setData]=React.useState([]);
    const fetchData=async()=>{
        await axios.get(baseURL).then((res)=>{setData(res.data.articles)});
    };

    useEffect(()=>{
        fetchData();
    }, [props.val]);

    return(
        <div>
        <h3 className="d-flex justify-content-center align-items-center my-4 text-decoration-underline">TOP HEADLINES</h3>
        <div className="container">
        <div className="container-box"  style={{maxWidth:"100vw"}}>
            {data?data.map((items, index)=>{
                return(
                    <div className="column">
                    <NewsCard title={items.title} image={items.urlToImage} desc={items.description} url={items.url}></NewsCard>
                    </div>
                );
            }):"Loading"} 
            
        </div>
        </div>
        </div>
    )
}
export default Data;
