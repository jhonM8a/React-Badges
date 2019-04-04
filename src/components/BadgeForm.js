import React from 'react';

class BadgeForm extends React.Component{
    handleChange = e =>{
        console.log({e});
        
    };
    handleclick = e =>{
        console.log("Button");
        
    };
    handleSubmit = e =>{
        e.preventDefault(); //Evita que el formulario se envie
        console.log("HandleSubmit");
        
    };

    render(){
        return(
            <div>
                <h1>New Person</h1>
                <form onSubmit={this.handleSubmit} className="">
                    <div className="form-group">
                        <label>Firts Name</label>
                        <input onChange={this.handleChange} className="form-control" type="text" name="firstName"/>
                    </div>
                    <button onClick={this.handleclick} className="btn btn-primary">Save</button>
                </form>
            </div>
        )
    }
}

export default BadgeForm;