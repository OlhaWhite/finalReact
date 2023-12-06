import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';


function Slider() { 
return (
    <div className='carousel'>
    <Carousel fade className='data-bs-ride="carousel" w-75'>
      <Carousel.Item>
      <img 
			className="d-block w-100"
src="https://images.unsplash.com/photo-1582913130137-003af7b353b4?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHJlbW9kZWx8ZW58MHx8MHx8fDA%3D"
			alt="One"
 		/> 
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img 
			className="d-block w-100"
src="https://images.unsplash.com/photo-1613849925362-38fb4c16ff36?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjN8fHJlbW9kZWx8ZW58MHx8MHx8fDA%3D"
			alt="Two"
 		/> 
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img className="d-block w-100"
            src="https://images.unsplash.com/photo-1564540579594-0930edb6de43?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTJ8fHJlbW9kZWx8ZW58MHx8MHx8fDA%3D"
			alt="Three"
 	    /> 
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img 
			className="d-block w-100"
src="https://images.unsplash.com/photo-1617104678098-de229db51175?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzk5fHxyZW1vZGVsJTIwYmVkcm9vbXxlbnwwfHwwfHx8MA%3D%3D"
			alt="Four"
 		/> 
        {/* <Carousel.Caption>
          <h3>Fourth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img 
			className="d-block w-100"
src="https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTQ0fHxyZW1vZGVsfGVufDB8fDB8fHww"
			alt="Five"
 		/> 
        {/* <Carousel.Caption>
          <h3>Fifth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img 
			className="d-block w-100"
src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=700&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OTR8fHJlbW9kZWwlMjBiZWRyb29tfGVufDB8fDB8fHww"
			alt="Six"
 		/> 
        {/* <Carousel.Caption>
          <h3>Sixth slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
    </Carousel>
    </div>
  );
}
export default Slider;
