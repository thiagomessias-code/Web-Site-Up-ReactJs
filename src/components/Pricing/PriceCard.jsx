
import { Container } from './style'
import {price} from '../../Dummydata'

export default function PriceCard() {
  return (
    <>
        {price.map((val) => (
            <Container>
                <div className="items shadow">
                <h4>{val.name}</h4>
                <h1>
                    <span>$</span>
                    {val.price}
                    </h1>
                    <p>{val.desc}</p>
                    <button className="outline-btn">
                Get Started
                    </button>
                </div>
            </Container>
        ))}
    </>
  )
}
