import React, {Component} from "react";
import SignUpForm from "../molecules/SignUpForm";
import Card from "../atoms/Card";
import StyledButton from "../atoms/StyledButton";


class SignUpCard extends Component{
     constructor(props){
           super(props);

           this.state={
               email:"",
               firstName:"",
               lastName:"",
               userame:"",
               password:""
           }
           this.handleChange=this.handleChange.bind(this);
           this.handleSubmit=this.handleSubmit.bind(this);

       }

     handleChange(e){
         this.setState({[e.target.name] : e.target.value})
     }

     handleSubmit(e){
         e.preventDefault();
         // this.props.addSignUpInfo(this.state);
      //   this.props.history.push("/jobs");
     }

     render(){
         return(
             <div>
                 <Card width='360'>
                    <h3>New User Form</h3>
                     <SignUpForm
                        handleSubmit={this.handleSubmit}
                        handleChange={this.handleChange}
                        email={this.state.email}
                        firstName={this.state.firstName}
                        lastName={this.state.lastName}
                        username={this.state.userame}
                        password={this.state.password}
                     />
                     <a href="url">Profile Photo</a>
                     <StyledButton>Im In!</StyledButton>
                  </Card>
             </div>
        )
    }
}
export default SignUpCard;
