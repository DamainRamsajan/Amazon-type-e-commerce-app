import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
        <div className = "home">            
            <div className = "home__container">
                <img className ="home__image" src ="/images/calabashBanner3.jpg" alt ="" border = "0" />               

                <div className = "home__row">
                <Product 
                    id= "00011"
                     title = "FancyPans Steel Drum w/ Stand."
                     price ={399.00} 
                     image = "/images/fancyPan.jpg" alt =""
                     rating = {3}
                     />
                <Product 
                    id= "00010"
                     title = "The double second pan: Used for melody, counterpoint and harmonies."
                     price ={2400.00} 
                     image = "/images/doublePan.jpg" alt =""
                     rating = {5}
                     />
                    <Product 
                    id= "000001"
                    title = "Rhythm Band GStyle Minipan Steel Drum in G Major"
                     price ={999.99} 
                     image = "/images/panLand.jpg" alt =""
                     rating = {4}
                     />
                    <Product 
                    id= "000002"
                     title = "Panyard stainless steel Jambie jam Pan"
                     price ={1119.99} 
                     image = "/images/ssPan.jpg" alt =""
                     rating = {5}
                     />

                     
                </div>

                <div className = "home__row">
                    <Product
                    id= "000003"
                     title = "Trinidad Carnival: The Cultural Politics of a Transnational Festival"
                     price ={19.99} 
                     image = "/images/TriniCarnivalBook.jpg" alt =""
                     rating = {4}
                     />
                    <Product 
                    id= "000004"
                     title = "Folklore and Legends of Trinidad and Tobago"
                     price ={29.99} 
                     image = "/images/triniFolklore.jpg" alt =""
                     rating = {5}
                     />
                    <Product 
                    id= "000005"
                     title = "An Archaeological Study of the Red Hous Port of Spain, Trinidad and Tobago"
                     price ={24.99} 
                     image = "/images/redHouse.jpg" alt =""
                     rating = {5}
                     />
                </div>

                <div className = "home__row">
                    <Product 
                    id= "000006"
                     title = "Trinidad and Tobago National Flag color t-shirt"
                     price ={25.00} 
                     image = "/images/triniTshirt.jpg" alt =""
                     rating = {5}
                     />    
                     <Product 
                     id= "000007"
                     title = "T-shirt Jersey Clothing Sleeve - Trinidad And Tobago"
                     price ={35.99} 
                     image = "/images/triniFemaleT.jpg" alt =""
                     rating = {5}
                     />        
                     <Product 
                     id= "000008"  
                     title = "Patriotic Trinidad and Tobago Trini to the Bone Leggings"
                     price ={35.99} 
                     image = "/images/triniLeggings.jpg" alt =""
                     rating = {5}
                     />   
                     <Product 
                     id= "000009"
                     title = "Trinidad Carnival Bash Wire Bra & Panty Gold+RED COLOR"
                     price ={35.99} 
                     image = "/images/carnivalCostume2.jpg" alt =""
                     rating = {5}
                     />           
                </div>                
            </div>
        </div>
    )
}

export default Home
