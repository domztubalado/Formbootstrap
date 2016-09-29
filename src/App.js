import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';
import {Button,ButtonGroup,Form,FormGroup,ControlLabel,FormControl,HelpBlock,Checkbox,Radio,Grid,Row,Col} from 'react-bootstrap';


class App extends Component {
    state = {
      name:"",
      color:"",
      movies:[],
      gender:"",
      quote:"",
      dish:[],
      genre:""
    };
  
  onChange = (fieldName)=>{
    return (event)=>{
      var state = this.state;
      state[fieldName]=event.target.value;
      this.setState(state);
    }
  };
  
 checkboxChange = (fieldName)=>{
   return (event)=>{
     var targetArray = this.state[fieldName];
      if(targetArray.indexOf(event.target.value) >=0)
      targetArray.splice(
        targetArray.indexOf(event.target.value),1
      );
      else
        targetArray.push(event.target.value);
          var state = this.state;
          state[fieldName]=targetArray;
          this.setState(state);
   }
 }; 
  
  render() {
    return (
      <div className="container">
        <div className="page-header">
          
          <h2>FAVORITES</h2>
        </div>
        <p className="jumbotron">
          <Grid>
            <Row>
              <Col md={6}>
                   <Form>
          <FormGroup>
            <ControlLabel> Name Please....</ControlLabel>
            <FormControl type="text" placeholder="Name here..." value={this.state.name} onChange={this.onChange('name')}/>
            <HelpBlock> use to identify you</HelpBlock> 
          </FormGroup>
          
          <FormGroup>
            <ControlLabel> Choose Favorite Color</ControlLabel>
            <FormControl componentClass="select" placeholder="Select Color" value={this.state.color} onChange={this.onChange('color')}>
              <option value="red">RED</option>
              <option value="green">GREEN</option>
              <option value="blue">BLUE</option>
            </FormControl>
          </FormGroup>
          
          <FormGroup>
            <ControlLabel> Favorite Movies</ControlLabel>
              <Checkbox value="50 Shades of Gray" checked={this.state.movies.indexOf('50 Shades of Gray')>=0 ? true:false} onChange={this.checkboxChange('movies')}>50 Shades of Grey</Checkbox>
              <Checkbox value="American Pie" checked={this.state.movies.indexOf('American Pie')>=0 ? true:false} onChange={this.checkboxChange('movies')}>American Pie </Checkbox>
              <Checkbox value="Friends with Benefits" checked={this.state.movies.indexOf('Friends with Benefits')>=0 ? true:false} onChange={this.checkboxChange('movies')}>Friends with Benefits </Checkbox>
          </FormGroup>
          
          <FormGroup>
            <ControlLabel> Favorite Movies</ControlLabel>
              <Radio name="gender" value="Male" onChange={this.onChange('gender')}> Male </Radio>
              <Radio name="gender" value="Female" onChange={this.onChange('gender')}> Female </Radio>
          </FormGroup>
        
        <FormGroup>
            <ControlLabel> Quote </ControlLabel>
              <FormControl type="text" placeholder="Type your quote..." value={this.state.quote} onChange={this.onChange('quote')}></FormControl>
          </FormGroup>
        
        <FormGroup>
            <ControlLabel>Favorite Dish</ControlLabel>
              <Checkbox value="Fried Chicken" checked={this.state.dish.indexOf('Fried Chicken')>=0 ? true:false} onChange={this.checkboxChange('dish')}> Fried Chicken </Checkbox>
              <Checkbox value="Spags" checked={this.state.dish.indexOf('Spags')>=0 ? true:false} onChange={this.checkboxChange('dish')}> Spags </Checkbox>
              <Checkbox value="Halang-Halang" checked={this.state.dish.indexOf('Halang-Halang')>=0 ? true:false} onChange={this.checkboxChange('dish')}> Halang-Halang </Checkbox>
              <Checkbox value="Mang Inasal" checked={this.state.dish.indexOf('Mang Inasal')>=0 ? true:false} onChange={this.checkboxChange('dish')}> Mang Inasal </Checkbox>
          </FormGroup>
        
        <FormGroup>
            <ControlLabel> Music Genre </ControlLabel>
              <Radio name="genre" value="Soul" onChange={this.onChange('genre')}> Soul </Radio>
              <Radio name="genre" value="Jazz" onChange={this.onChange('genre')}> Jazz </Radio>
              <Radio name="genre" value="Rock" onChange={this.onChange('genre')}> Rock </Radio>
          </FormGroup>
        
          <ButtonGroup>
         
          <Button bsStyle="info">  <span className="glyphicon glyphicon-star"> </span> Info Button </Button>
          <Button bsStyle="primary">Info Button</Button>
          <Button bsStyle="warning">Info Button</Button>
          <Button bsStyle="danger">Info Button</Button>
          
          </ButtonGroup>
              </Form>                      
              </Col>
              
              <Col md={6}>
                <strong>Name is {this.state.name}</strong><br/>
                <strong>Color is {this.state.color}</strong><br/>
                <strong>Movies are {this.state.movies.map((item,i) =>{
                  return <div>
                  <h4><span className="label label-danger">{item}</span></h4>
                  </div>
                })
              }</strong><br/>
                <strong>Gender is {this.state.gender}</strong><br/>
                <strong>Quote: {this.state.quote}</strong><br/>
                <strong>Dishes: {this.state.dish.map((item,i) =>{
                  return <div>
                  <h4><span className="label label-success">{item}</span></h4>
                  </div>
                })
              }</strong><br/>
                <strong>Music Genre: {this.state.genre}</strong><br/>
                
              </Col>
            </Row>
          </Grid>
          
        
        </p>
      </div>
    );
  }
}

export default App;
