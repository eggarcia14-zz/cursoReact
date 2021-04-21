import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: this.props.value,
        imageUrl: 'https://picsum.photos/200',
        tags: []
    };

    styles = {
        fontSize: 30,
    };

    RenderTags(){
        if(this.state.tags.length === 0) return <p>' No hay tags '</p>;
            return <ul> {this.state.tags.map(tag => <li key={tag}>{tag}</li>)} </ul>;
    }

//    constructor(){
//        super();
//        this.handelIncrement = this.handelIncrement.bind(this);
//        console.log('Constructor: ', this);
//   }

    componentDidUpdate(prevProps, prevState){
        console.log('prevState ', prevState)
        console.log('prevProps ', prevProps)
        if(prevProps.value !== this.props.value){
            //ajax request
        }
    }

    componentWillUnmount(){
        console.log('counter unMount')
    }

    handelIncrement = () => {
        //console.log('Increment Clicked!', this.state.count);
        this.setState({
            count: this.state.count + 1
        })
    }

    render(){
        console.log('props', this.props);
        return (
            <React.Fragment>
                {this.props.children} @ {this.props.CounId}
                <img src={this.state.imageUrl} alt=""/>
                <span className={this.GetClass()}>{ this.Change() }</span>
                <button onClick={this.handelIncrement} className="btn btn-primary">Increment</button>
                <button onClick={() => this.props.onDelete(this.props.CounId)} className="btn btn-danger btn-sm m-2">Delete</button>
                {this.RenderTags()}
              
            </React.Fragment>
        )
    }

    GetClass(){
        let classes = "badge m-2 badge-";
        classes+= this.state.count === 0 ? "warning" : "primary";
        return classes;
    }

    Change(){
        return this.state.count === 0 ? 'Zero': this.state.count;
    }
}

export default Counter;