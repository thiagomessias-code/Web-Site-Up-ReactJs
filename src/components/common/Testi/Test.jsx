import {FaQuoteLeft} from 'react-icons/fa'
import { Container } from './style'
import { testimonal } from '../../../Dummydata'
import Title from '../heading/Title'

export default function Test() {
  return (
    <Container>
        <section className='testimonal padding'>
        <div className='container'>
          <Title subtitle='TESTIMONIAL' title='Our Successful Students' />

          <div className='content grid2'>
            {testimonal.map((val) => (
              <div className='items shadow'>
                <div className='box flex'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                    <i className='icon'><FaQuoteLeft/> </i>
                  </div>
                  <div className='name'>
                    <h2>{val.name}</h2>
                    <span>{val.post}</span>
                  </div>
                </div>
                <p>{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Container>
  )
}
