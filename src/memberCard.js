import react from 'react'
import "./style.css"


function memberCard(props) {
  console.log(props)
   const {Name , Image , Post , Year, Insta , id , Desc} = props.contacts  
    
      { if (id%2!==0)
          return (<div className="memberCard" key={id}  style={{backgroundColor:"black"}}>

          <div className="memberimage">
              <img src={Image} alt="Avatar" />
          </div>
          <div className="name">
              <h2>{Name}</h2>
          </div>
          <div className="insta">
              <h5>{Insta}</h5>
          </div>
          <div className="year">
              <h5>{Year} year</h5>
          </div>
          <div className="desc">
              <p> {Desc}</p>
          </div>
  
        </div>)

        else
         return(
          <div className="memberCard" key={id} style={{backgroundColor:"#242424"}} >

          <div className="memberimage">
              <img src={Image} alt="Avatar" />
          </div>
          <div className="name">
              <h2>{Name}</h2>
          </div>
          <div className="insta">
              <h5>{Insta}</h5>
          </div>
          <div className="year">
              <h5>{Year} year</h5>
          </div>
          <div className="desc">
              <p> {Desc}</p>
          </div>
  
        </div>

         )
      }
    
  }

  export default memberCard;