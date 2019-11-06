import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import MyButton from '../Utils/MyButton';


class Discount extends Component {

    //This start is set to initialise the state of discountStart
    state={
        discountStart:0,
        discountEnd:40
    }


    //This function check if the discountStart is less than discountEnd if yes 1 is added to discountStart
    porcentage = () =>{
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
          
    
    //This section update the component that embed function porcentage and it also update the component until the test condition is met
    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        }, 30)
    }



    //This section embed the and render the discount component
    render() {
        return (
            <div className="center_wrapper">
                <div className="discount_wrapper">

                    
                    <Fade
                        onReveal={()=> this.porcentage()}
                    
                    >
                        <div className="discount_porcentage">
                            
                            <span>{this.state.discountStart}%</span>
                            <span>OFF</span>

                        </div>
                    </Fade>
                    
                    <Slide right>
                        <div className="discount_description">
                            <h3>Purchase Ticket before 25th of DECEMBER</h3>
                            <p> It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                            
                            <MyButton
                                text="Purchase ticket"
                                bck="#ffa800"
                                color="#ffffff"
                                link="#"
                            
                            />
                        </div>
                    </Slide>
                    
                </div>
            </div>
        );
    }
}

export default Discount;