import React, { Component } from 'react';
import harbour from '../assets/gallery/harbour.jpg'
import earthw from '../assets/gallery/earth-w.jpg'
import earthwLg from '../assets/gallery/earthw-lg.jpg'
import renderWide from '../assets/gallery/render-wide.jpg'

class ImageGallery extends Component {
    render() {
      return (
        <div id="portfolio" class="portfolio grid-container portfolio-nomargin portfolio-full portfolio-masonry mixed-masonry clearfix">
          <article class="portfolio-item pf-media pf-icons wide">
            <div class="portfolio-image">
              <a href="#">
                <img src={harbour} alt="Augusta Rise Sign"/>
              </a>
              <div class="portfolio-overlay">
                <div class="portfolio-desc">
                  <h3>Minutes to Omokoroa Harbour</h3>
                  <span>&#38; the coastal walkway</span>
                </div>
              </div>
            </div>
          </article>
          <article class="portfolio-item pf-illustrations">
            <div class="portfolio-image">
              <a href="#">
                <img src={earthwLg} alt="Omokoroa Harbour"/>
              </a>
              <div class="portfolio-overlay">
                <div class="portfolio-desc">
                  <h3>Earthworks</h3>
                  <span>October, 2017</span>
                </div>
              </div>
            </div>
          </article>
          <article class="portfolio-item pf-graphics pf-uielements">
            <div class="portfolio-image">
              <a href="#">
                <img src={earthw} alt="Earthworks at Augusta Rise"/>
              </a>
              <div class="portfolio-overlay">
                <div class="portfolio-desc">
                  <h3>Earthworks</h3>
                  <span>October, 2017</span>
                </div>
              </div>
            </div>
          </article>
          <article class="portfolio-item pf-media pf-icons wide">
            <div class="portfolio-image">
              <a href="https://barretthomes.co.nz/property-search/?location=augusta-rise&bedrooms=0" target="blank">
                <img src={renderWide} alt="Lot 40 Augusta Rise"/>
              
              <div class="portfolio-overlay">
                <div class="portfolio-desc">
                  <h3>Pictured: Lot 40</h3>
                  <span>View all Hosue and Land Packages</span>
                </div>
              </div>
            </a>
          </div>
          </article>
        </div>
      );
    }
  }
  
  export default ImageGallery;