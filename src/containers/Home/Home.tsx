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
            <section className="home">
                <section className="homePadre">
                    <h1>hola</h1>
                </section>
            </section>
        )
    }
}