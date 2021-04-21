import axios from 'axios';
import React, { Component } from 'react';

class form extends Component{
    state = { 
        name:'',
        email:''
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmitHandel = (e) => {
        console.log('state', this.state);
        e.preventDefault();
    }

    componentDidMount(){
    //    fetch('http://localhost:3004/post')
    //    .then((res) => {
    //        return res.json();
    //    })
    //    .then((myjson) => {
    //        console.log(myjson);
    //    })
    axios.get('http://localhost:3004/post')    
    .then(res => console.log(res.data))
    }


    render() {
        return (
            <>
            <center>
                <div className='col-md-6'>
                    <form className='form-group'>
                        <input name='name' type='text' placeholder='name'className='form-control' value={this.state.name}
                        onChange={e => this.changeHandler(e)}/>
                        <input type='email' placeholder='email'className='form-control' value={this.state.email}
                        onChange={e => this.setState({
                            email: e.target.value
                        })}
                        />

                        <hr></hr>
                        <button className='btn btn-success' onClick={(e) => this.onSubmitHandel(e)}>
                            Submit
                        </button>

                    </form>
                </div>
            </center>
            </>
        );
    }
}

export default form;