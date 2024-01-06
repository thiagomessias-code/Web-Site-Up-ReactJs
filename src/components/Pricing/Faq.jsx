import { Container } from "./style";
import Title from '../common/heading/Title'
import { useState } from "react";
import {faq} from '../../Dummydata'
import {FaChevronDown, FaChevronRight} from 'react-icons/fa'


export default function Faq() {
    const [click, setClick] = useState(false)
    const toggle = (index) => {
        if(click===index){
            return setClick(null)
        }
        setClick(index)
    }
  return (
    <Container>
        <Title subtitle='FAQS' title='Frequesntly Ask Question'/>
        <section className="faq">
            <div className="container">
                {faq.map((val, index) =>(
                    <div className="box">
                        <button className="accordion" onClick={() => toggle(index)} key={index}>
                            
                            <h2> {val.title}</h2>
                                <span>{click===index ? <i><FaChevronDown/></i> : <i><FaChevronRight/></i>}</span>
                        </button>
                        {click === index ? (
                    <div className='text'>
                      <p>{val.desc}</p>
                    </div>
                  ) : null}
                    </div>
                ))}
            </div>
        </section>
    </Container>
  )
}
