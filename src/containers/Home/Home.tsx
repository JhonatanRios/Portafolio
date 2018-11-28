import * as React from 'react';
import { observer } from 'mobx-react';
import { store } from '../../stores/store';

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
                    
                </section>
            </section>
        )
    }
}