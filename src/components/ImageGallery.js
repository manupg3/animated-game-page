import React from 'react'
import ImageGallery from 'react-image-gallery';
import ImgQuantum1 from '../assets/img/quantum1.jpg'

const images = [
  {
    original: 'https://cdn.mos.cms.futurecdn.net/20a9480b6b93f89d2915d854d3a3e9e0.jpg',
    thumbnail: 'https://picsum.photos/id/1018/250/150/',
  },
  {
    original: 'https://i.ytimg.com/vi/FxouQDOyz10/maxresdefault.jpg',
    thumbnail: 'https://picsum.photos/id/1015/250/150/',
  },
  {
    original: 'https://cdn.cloudflare.steamstatic.com/steam/apps/474960/ss_a5501cff76671066df183949d96e4587a387fdf8.1920x1080.jpg?t=1580256966',
    thumbnail: 'https://picsum.photos/id/1019/250/150/',
  },
];

class MyGallery extends React.Component {
  render() {
    return <ImageGallery items={images} showThumbnails={false} />;
  }
}
export default MyGallery