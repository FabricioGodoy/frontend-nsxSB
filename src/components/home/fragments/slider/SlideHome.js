import React from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from "react-router-dom";
import './SliderHome.css'

function SlideHome() {
	return (
		<Carousel className="carousel-cont">
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/pax.webp`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/collection`} className="boton-slider">PAX EAST 2023</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/asus.webp`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/collection`} className="boton-slider">SHOP NOW</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/teclado-corsair.webp`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/collection`} className="boton-slider bg-secondary">SHOP NOW</Link>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item className="img-carousel-item">
				<img className="d-block w-100 img-carousel" src={`${process.env.PUBLIC_URL}/img/mother-asus2.webp`} alt="Second slide" />
				<Carousel.Caption className="item-carousel-caption">
					<Link to={`/collection`} className="boton-slider">SHOP NOW</Link>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
}

export default SlideHome;