
import Faq from '../components/Pricing/Faq'
import PriceCard from '../components/Pricing/PriceCard'
import Back from '../components/common/Back/Back'
import { Container } from '../components/Pricing/style'

export default function Pricing() {
  return (
    <>
    <Back title="Choose The Right Plan"/>
    <Container>
      <section className="padding price">
          <div className="container grid">
          <PriceCard/>
          </div>
      </section>
    </Container>
    <Faq/>
    </>
  )
}
