import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
import "./contact.css";

class Contact extends Component {

  constructor(props) {
  super(props);
}



  render() {
    return(
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
          </Cell>
          <Cell col={6}>
            <h2>Contact Us</h2>
            <hr/>

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-phone-square" aria-hidden="true"/>
                    000000000
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '30px', fontFamily: 'Anton'}}>
                    <i className="fa fa-fax" aria-hidden="true"/>
                    (123) 456-7890
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent style={{fontSize: '28px', fontFamily: 'Anton'}}>
                    <i className="fa fa-envelope" aria-hidden="true"/>  janedoe@gmail.com                

                   </ListItemContent>
                </ListItem>


              </List>


            </div>
          </Cell>
          <Cell col={6}>
            
  

          </Cell>
        </Grid>










      </div>
      
    )
  }
}

export default Contact;
