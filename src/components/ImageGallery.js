import React from 'react';
import { render } from 'react-dom';
import Gallery from 'react-photo-gallery';
import Measure from 'react-measure';

import './css/ImageGallery.css';

import Harbour from '../assets/gallery/harbour.jpg'
import RenderWide from '../assets/gallery/render-wide.jpg'
import RenderWideVar from '../assets/gallery/Lot-42-WIDE.jpg'
import EarthWksBanner from '../assets/gallery/earthw-banner.jpg'
import LotOne from '../assets/gallery/lot-1-gall.jpg'
import LotThree from '../assets/gallery/lot-3-gall.jpg'
import LotFourty from '../assets/gallery/lot-40-gall.jpg'
import LotFourtyTwo from '../assets/gallery/lot-42-gall.jpg'

const photos = [
  { src: LotThree, width: 6, height: 3 },
  { src: LotOne, width: 6, height: 3 },
  { src: LotFourty, width: 6, height: 3 },
  { src: LotFourtyTwo, width: 6, height: 3 }
];

// to best see the results, click the popout button in the preview browser
// and resize your browser

class ImageGallery extends React.Component {
  constructor() {
    super();
    this.state = { width: -1 };
  }
  render() {
    const width = this.state.width;
    return (
        <Measure bounds onResize={(contentRect) => this.setState({ width: contentRect.bounds.width })}>
          {
          ({measureRef}) => {
            if (width < 1 ){
              return <div ref={measureRef}></div>;
            }
            let columns = 1;
            if (width >= 769){
              columns = 2;
            }
            if (width >= 1824){
              columns = 4;
            }
            return <div ref={measureRef}><Gallery photos={photos} columns={columns} /></div>
          }
        }
        </Measure>
    )
  }
}

  export default ImageGallery;
