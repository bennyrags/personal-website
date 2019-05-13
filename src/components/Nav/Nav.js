import React, { Component } from 'react';
import './Nav.css'
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import { Link } from 'react-router-dom'

class Nav extends Component {
    state = {
        drawer: {
          top: false,
          bottom: false,
          right: false,
          left: false
        }
      }
    
      toggleDrawer = (side, open) => {
        this.setState({
          [side]: open,
        })
      }
    
    

    render() {
        return(
            <>
            <header>
                <Button className='navButton' onClick={()=>this.toggleDrawer('left', true)} >
                Menu
                </Button>
            </header>   
            <Drawer
            open={this.state.left}
            onClose={() => this.toggleDrawer('left', false)}
          >
            <div className='navContainer'>
            <Link onClick={()=>this.toggleDrawer('left', false)}  className="nav-link" to="/">
            Home
            </Link>
            <Link onClick={()=>this.toggleDrawer('left', false)} className="nav-link" to="/about">
              About
             </Link>
          </div>
        </Drawer>

      </>
        )
    }
}

export default Nav;
