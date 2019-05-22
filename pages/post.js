import React from "react";
import Header from "../components/header";
import {withRouter} from "next/router";
import fetch from "isomorphic-unfetch";
import PostStyle from "../styles/post";

const Section = (props)=>{
	return <section>{props.children}</section>
};
const PoetryList = withRouter(props=>{
	return(
		<div>
			<Header/>
			<h1>古诗列表（第{props.router.query.page}页）：</h1>
			<ul>
				{
					props.poetries.map(item=>(
						<li key={item.title}>
							<h3>{item.title}</h3>
							<h6>({item.authors})</h6>
							<Section>{item.content}</Section>
						</li>
					))
				}
			</ul>
			<style jsx={"true"}>
				{`
				h3{
					color:green;
				}
				section{
					color:blue;
				}
				`}
			</style>
		</div>
	)
});
PoetryList.defaultProps = {
	poetries:[]
};
PoetryList.getInitialProps = async function(context){
	console.log(context.query);
	const res = await fetch("https://api.apiopen.top/getTangPoetry");
	const data = await res.json();
	return {
		poetries: data.result
	}
};


export default PoetryList;