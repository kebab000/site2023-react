import { Link } from 'react-router-dom';
import React from 'react'
// const youtubeTag = [
//   {name: "react.js"},
//   {name: "vue.js"},
//   {name: "next.js"},
//   {name: "node.js"},
//   {name: "music.js"},
// ]


const YoutubeTag = ({onSearch}) => {
  const onClick = (value)=>{
    onSearch(value);
    // console.log(value)
  }
  return (
    <div className="youtube__tag">
        <ul>
            <li><Link onClick={() => onClick("코딩 애플")}>코딩 애플</Link></li>
            <li><Link onClick={() => onClick("react.js")}>리액트</Link></li>
            <li><Link onClick={() => onClick("Next.js")}>Next.js</Link></li>
            <li><Link onClick={() => onClick("JavaScript")}>JavaScript</Link></li>
            <li><Link onClick={() => onClick("프론트앤드")}>프론트앤드</Link></li>
        </ul>
    </div>
  )
}

export default YoutubeTag