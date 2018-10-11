import * as React from 'react'

interface IProps {
    onClick: any,
    print: string,
}
export default class PrintButton extends React.PureComponent<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    render() {
        return (
            <div>
                <button onClick={() => this.props.onClick()}>{this.props.print}</button>
            </div>
        )
    }
}
