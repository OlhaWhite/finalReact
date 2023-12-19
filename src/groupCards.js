import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import consultimg from './consult.avif';
import designimg from './design.jpg';
import permitimg from './permit.jpg';
import constructionimg from './construction.jpg';

function GroupExample() {
  return (
    <CardGroup className='cards'>
      <Card className='single-card'>
        <Card.Img variant="top" src={consultimg} />
        <Card.Body>
          <Card.Title className='text-center mb-3'>Free Consult</Card.Title>
          <Card.Text>
          Meet with one of our skilled home renovation specialists to explore your ideas for transforming your living space! Following this discussion, you will be provided with a detailed project proposal that breaks down all costs, ensuring complete transparency and eliminating unexpected surprises.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Step 1</small>
        </Card.Footer>
      </Card>
      <Card className='single-card'>
        <Card.Img variant="top" src={designimg} />
        <Card.Body>
          <Card.Title className='text-center mb-3'>Design</Card.Title>
          <Card.Text>
          We match you with an interior designer from our team who collaborates with you to create a home that aligns with both your functional requirements and aesthetic preferences. This involves crafting the layout and style, accompanied by a showroom tour to assist you in choosing materials, fittings, and fixtures.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Step 2</small>
        </Card.Footer>
      </Card>
      <Card className='single-card'>
        <Card.Img variant="top" src={permitimg} />
        <Card.Body>
          <Card.Title className='text-center mb-3'>Permits</Card.Title>
          <Card.Text>
           Having undertaken numerous home renovation projects, we have become proficient in New York State's building regulations and permits. We take care of all the necessary permits and paperwork for your construction project, including liaising with your building's management.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Step 3</small>
        </Card.Footer>
      </Card>
      <Card className='single-card'>
        <Card.Img variant="top" src={constructionimg} />
        <Card.Body>
          <Card.Title className='text-center mb-3'>Construction</Card.Title>
          <Card.Text>
          Throughout the construction phase, a dedicated project manager will supervise every aspect of the project, ensuring that each detail is executed precisely according to the plan and achieving the highest possible level of craftsmanship.
          </Card.Text>
        </Card.Body>
        <Card.Footer>
          <small className="text-muted">Step 4</small>
        </Card.Footer>
      </Card>
    </CardGroup>
  );
}

export default GroupExample;