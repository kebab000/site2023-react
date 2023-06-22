import React, { useEffect , useState} from 'react';
import Contents from '../layout/Contents'   ;
import ContTitle from '../layout/ContTitle';
import YoutubeSlider from '../youtube/YoutubeSlider';
import YoutubeSearch from '../youtube/YoutubeSearch';
import YoutubeTag from '../youtube/YoutubeTag';
import YoutubeCont from '../youtube/YoutubeCont';
const YoutubePage = () => {
  const [youtubes, setYoutubes] = useState([]); // 리액트 변수로 api의 바뀐 정보를 인지해준다

  const search = async(query) => {
   
    await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${query}&type=video&key=AIzaSyDu13VB1Y6cnu4y9DKqA3bLgAXuqaw4BFU`)
      .then(response => response.json())
      .then(result => setYoutubes(result.items))
      .catch(error => console.log('error', error));
  }

  useEffect(() => {
    fetch('https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=%EC%BD%94%EB%94%A9%EC%95%A0%ED%94%8C&type=video&key=AIzaSyDu13VB1Y6cnu4y9DKqA3bLgAXuqaw4BFU'
    ).then(response => response.json())
    .then((result) => setYoutubes(result.items))
    .catch((error) => console.log(error))
  }, [])
  
  return (
    <>
        <Contents>
            <ContTitle title='YOUTUBE'/>
            <YoutubeSlider youtubes={youtubes}/>
            <YoutubeSearch onSearch={search} />
            <YoutubeTag onSearch={search}/>
            <YoutubeCont youtubes={youtubes}/>
        </Contents>
    </>
  )
}

export default YoutubePage

