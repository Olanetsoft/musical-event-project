import React, { Component } from 'react';
import Slide from 'react-reveal/Slide';


//This section below set the initial state of the time and it also calculate the time remaining
class TimeUntil extends Component {

    state = {
        deadline: 'Dec, 31, 2019',
        days: '0',
        hours: '0',
        minutes: '0',
        seconds: '0'
    }

    getTimeUntil(deadline){
        const time = Date.parse(deadline) - Date.parse(new Date());
        if (time<0){

        }else{
            const seconds = Math.floor((time/1000)%60);
            const minutes = Math.floor((time/1000/60)%60);
            const hours = Math.floor((time/(1000*60*60))%24); 
            const days = Math.floor(time/(1000*60*60*24)); 

            this.setState({
                days,
                hours,
                minutes,
                seconds
            })
        }
        
    }

    //This triggers immediately the component is mounted and its compared with the deadline set
    componentDidMount(){
        setInterval(()=> this.getTimeUntil(this.state.deadline), 1000)
    }

  
    //This section render the slide containing event start in
    render() {
        return (
            <Slide right delay={1000}>
                <div className="countdown_wrapper">
                    <div className="countdown_top">
                        Event starts In
                </div>
                    <div className="countdown_bottom">
                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.days}
                            </div>
                            <div className="countdown_tag">
                                DAYS
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.hours}
                            </div>
                            <div className="countdown_tag">
                                Hrs
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.minutes}
                            </div>
                            <div className="countdown_tag">
                                Min
                            </div>
                        </div>

                        <div className="countdown_item">
                            <div className="countdown_time">
                                {this.state.seconds}
                            </div>
                            <div className="countdown_tag">
                                Sec
                            </div>
                        </div>
                    </div>
                </div>
            </Slide>

        );
    }
}

export default TimeUntil;