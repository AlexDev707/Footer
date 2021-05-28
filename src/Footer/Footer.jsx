import React, { Component } from 'react'

export default class Footer extends Component {

    state={
        name:"",
        email:"",
        description:"",
    };

    habdleChange = (e) =>{
        this.setState({[e.target.name]: e.target.value});
        }
    handleFormSubmit = (e)=>{
            e.preventDefault();
        console.log("submited...all okey")
        } 
    render() {
        return (
            <div className='bg-black flex flex-col text-center'>
            
                <h1 className='text-white text-5xl my-16'>Get in touch</h1>
                <form onSubmit={this.handleFormSubmit}>
                    <div className='flex justify-center'>
                    <div className='flex flex-col text-center w-2/6 h-60 justify-between'>
                    <div className='flex justify-between'>
                    <input
                    className='w-56 bg-gray-800' 
                    type="text"
                    placeholder='Enter name'
                    name="name"
                    value={this.state.name} 
                    onChange={this.habdleChange}
                    checked/>
                        <input 
                        className='w-56 bg-gray-800' 
                        type="email"
                        placeholder='Enter email'
                        name="email"
                        value={this.state.email}
                        onChange={this.habdleChange}
                        checked/>
                    </div>
                    <textarea
                    className='bg-gray-800 h-36' 
                    name="description" 
                    id="" cols="30" 
                    placeholder='Enter message'
                    rows="10" 
                    value={this.state.description}
                    onChange={this.habdleChange}
                    checked>
                    </textarea>
                    <div className='flex justify-center'>
                    <button className='bg-purple-800 h-10 w-40 rounded-3xl text-white' type="submit">Submit</button>
                    </div>
                    </div>
                    </div>
                </form>
            </div>
        )
    }
}