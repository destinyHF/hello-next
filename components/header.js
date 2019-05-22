import React from "react";
import Link from "next/link";

const PostLink = (props)=>{
	return(
		<li>
			<Link as={`/p/${props.id}`} href={`/post?page=${props.id}`}>
				<a>{props.title}</a>
			</Link>
		</li>
	)
};

export default ()=>{
	return(
		<ul>
			<PostLink id={"1"} title={"first page"}>first page</PostLink>
			<PostLink id={"2"} title={"second page"}>second page</PostLink>
			<PostLink id={"3"} title={"third page"}>third page</PostLink>
		</ul>
	)
}