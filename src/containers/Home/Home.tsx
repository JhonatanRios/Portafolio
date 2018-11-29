import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';
import ReactAccelerometer from 'react-accelerometer';

import "./Home.scss"

interface Props {
}

interface State {
}

@observer export class Home extends React.Component<Props, State> {
    shadowStyle: any;
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        if(store.accelerationIncludingGravity) {
        this.shadowStyle = {
            transform: `translate3d(${store.accelerationIncludingGravity.x * 8}px, ${store.accelerationIncludingGravity.y * 5 + 30}px, 0) rotateY(${-store.accelerationIncludingGravity.x * 3}deg)`
          }
          const imageStyle = {
            transform: `translate3d(${store.accelerationIncludingGravity.x * 2}px, ${store.accelerationIncludingGravity.y * -2 - 10}px, 0) rotateY(${-store.accelerationIncludingGravity.x * 3}deg)`
          }
        }

        return (
            <section className="homePadre">
                <section className="landing">
                    <div className="cont-logo">
                        <img src={store.logo} alt="" className="logo" style={this.shadowStyle} />
                    </div>
                </section>
                <section className="aboutmeHome">
                    <div className="cont-description">
                        <div className="description">
                            <h1>Acerca de Mi</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem non unde facilis impedit vitae illo corrupti quam placeat eveniet. Inventore, atque aut. Odit illo recusandae sed rem deserunt? Harum, perferendis!</p>
                        </div>
                    </div>
                    <div className="cont-myImage">
                    <img src={store.men} alt="" className="men" />
                    </div>
                </section>
                <section className="viewProjects">
                    <h1>PROYECTOS</h1>
                    <div className="cont-projects">
                        <div className="projectSelect">

                        </div>
                        <div className="moreProjects">
                            <div className="otherProject">

                            </div>
                        </div>
                    </div>
                </section>
            </section>
        )
    }
}