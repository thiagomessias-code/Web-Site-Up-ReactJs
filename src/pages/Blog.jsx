
import BlogCard from '../components/Blog/BlogCard'
import { Container } from '../components/Blog/style'
import  Back from '../components/common/Back/Back'


export default function Blog() {
  return (
    <>
    <Back title='Blog Posts'/>
    <Container>
    <div className="blog padding">
        <div className="container grid2">
            <BlogCard/>
            
        </div>
    </div>
    </Container>
  </>
  )
}
