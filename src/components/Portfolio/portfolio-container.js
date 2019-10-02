import React, { Component } from "react";

import PortfolioItem from "./portfolio-item"; 

export default class PortfoiioContainer extends Component { 
constructor () {
    super(); 

    console.log("Portfolio Container as rendered"); 
}  

PortfolioItems() {
    const data = ["Keller Williams" , "Realtypath" , "Open Air Cinema", "Elite Outdoor Movies"]; 

    return data.map(item => {
        return <PortfolioItem title={item} url={"google.com"}/>; 
    })
}

    render() {
        return (
            <div>
                <h2>Portfolio items go here updated...</h2>

                <PortfolioItem />
                {this.PortfolioItems()}
            </div>
        )
    }
}