
import PriceCard from '../Pricing/PriceCard'
import Title from './heading/Title'
import { Container } from '../Pricing/style'
export default function HPrice() {
  return (
    <>
        <Container>
          <section className="price padding">
          <Title subtitle="OUR PRICING" title="Pricing & Packages"/>
              <div className="container grid">
                  <PriceCard/>
              </div>
          </section>
        </Container>
    </>
  )
}
