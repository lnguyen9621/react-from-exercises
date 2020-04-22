
import React, { Component } from 'react';
import { UserList } from './user-list.component';

class UserForm extends Component {
    constructor(props) {
        super(props);
        this.state = { 

            newUser: {
                fullname: '',
                email: '',
                password: '',
                address: '',
                suite: '',
                city: '',
                state: '',
                zip: ''
            },

            checkMeOut: '',

            users: []
         }
    }//end constructor

    inputHandler = (e) => {
        
        const { name, value } = e.target;
        this.setState(prevState => ({newUser: {...prevState.newUser, [name]: value}}));

    }
    

    /*
    formSubmitHandler(e) is a function which does three things:
    1. Cleans the input field after a submit action is triggered, by resetting newUser to the initial empty string value.
    2. Pushes every newUser to the array of users after submit.
    3. The preventDefault() method stops the default action of an element from happening.
    */
    formSubmitHandler = (e) => {
        
        e.preventDefault();
        
        this.setState({    
            newUser: {fullname: '', email: '', password: '', address: '', suite: '', 
                          city: '', state: '', zip: ''},

            users: [...this.state.users, this.state.newUser]
        });
    }//end formSubmitHandler

    render() { 
        //console.log(this.state.users);
        return ( 
            <div>
                <h1>User Registration Form</h1>
                <form onSubmit={this.formSubmitHandler}>
                    <div className="form-group">
                        <label htmlFor="inputFullname">Full name</label>
                        <input name="fullname" type="text" className="form-control" id="inputFullname" placeholder="full name" value={this.state.newUser.fullname} onChange={this.inputHandler}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input name="email" type="email" className="form-control" id="inputEmail4" placeholder="email" value={this.state.newUser.email} onChange={this.inputHandler}/>
                        </div>
                        <div className="form-group col-md-6">
                        <label htmlFor="inputPassword4">Password</label>
                        <input name="password" type="password" className="form-control" id="inputPassword4" placeholder="password" value={this.state.newUser.password} autoComplete="true" onChange={this.inputHandler}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Address</label>
                        <input name="address" type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" value={this.state.newUser.address} onChange={this.inputHandler}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Address 2</label>
                        <input name="suite" type="text" className="form-control" id="inputAddress2" placeholder="apartment, studio, or floor" value={this.state.newUser.suite} onChange={this.inputHandler}/>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                        <label htmlFor="inputCity">City</label>
                        <input name="city" type="text" className="form-control" id="inputCity" value={this.state.newUser.city} onChange={this.inputHandler}/>
                        </div>
                        <div className="form-group col-md-4">
                        <label htmlFor="inputState">State</label>
                        <select name="state" id="inputState" className="form-control" defaultValue onChange={this.inputHandler}>
                            <option>Choose...</option>
                            <option>Alabama</option>
                            <option>California</option>
                            <option>Colorado</option>
                            <option>Floria</option>
                            <option>Texas</option>
                            <option>Wiscosin</option>
                            <option>Wyoming</option>
                        </select>
                        </div>
                        <div className="form-group col-md-2">
                        <label htmlFor="inputZip">Zip</label>
                        <input name="zip" type="text" className="form-control" id="inputZip" value={this.state.newUser.zip} onChange={this.inputHandler}/>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="gridCheck"/>
                        <label className="form-check-label" htmlFor="gridCheck">
                            Check me out
                        </label>
                        </div>
                    </div>
                    <button type="submit" className="btn btn-primary">submit</button>
                    
                </form>
                <hr></hr>

                <UserList users={this.state.users}/>
            
            </div>
         );
    }
}
 
export default UserForm;

/*
fullnameInputHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ newUser: {...prevState.newUser, fullname: value}}))
    }

    emailInputHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ newUser: {...prevState.newUser, email: value}}))
    }

    passwordInputHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ newUser: {...prevState.newUser, password: value}}));
    }  
    
    
    addressInputHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ newUser: {...prevState.newUser, address: value}}))
    }
    
    suiteInputHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({ newUser: {...prevState.newUser, suite: value}}))
    }

    cityInputHandler = (e) => {
        let value = e.target.value;    
        this.setState(prevState => ( {newUser: {...prevState.newUser, city: value}}))
    }

    stateSelectHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({newUser: {...prevState.newUser, state: value}}))
    }

    zipInputHandler = (e) => {
        let value = e.target.value;
        this.setState(prevState => ({newUser: {...prevState.newUser, zip: value}}))
    }
*/