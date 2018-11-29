import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

import "./Home.scss"

interface Props {
}

interface State {
}

@observer export class Home extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <section className="homePadre">
                <section className="landing">
                    <img src={store.imgFondo} alt="" className="portada" />
                    <div className="cont-logo">
                        <img src={store.logo} alt="" className="portada" />
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
                        <img src="src/logo.png" alt="" />
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