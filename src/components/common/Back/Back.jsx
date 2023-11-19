import { useLocation } from "react-router-dom"
import { Container } from "./style"


export default function Back({title}) {
    const location = useLocation()
  return (
    <>
        <Container>
            <h2>Home / {location.pathname.split("/")[1]}</h2>
            <h1>{title}</h1>
        </Container>
        <div className="margin"></div>
    </>
  )
}

