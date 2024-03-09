import * as React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import TVShows from "../components/tvshows";


const IndexPage = () => {
  return (
    <React.Fragment>
      <TVShows />
    </React.Fragment>
    
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
