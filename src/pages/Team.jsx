import Back from '../components/common/Back/Back'
import TeamCard from '../components/Team/TeamCard'
import Awrapper from '../components/About/AWrapper'
import { Container } from '../components/Team/style'

export default function Team() {
  return (
    <>
      <Back title='Team' />
      <Container>
        <section className='team padding'>
          <div className='container grid'>
            <TeamCard />
          </div>
        </section>
      </Container>
      <Awrapper />
    </>
  )
}
