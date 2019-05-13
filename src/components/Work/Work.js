import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import axios from 'axios';

const styles = theme => ({
    card: {
      maxWidth: 250,
      margin: 'auto',
      textAlign: 'center',
      boxShadow: '0 0 5px 5px rgba(1,1,1,.07)'
        
    },
    media: {
      height: 140,
    },
  });

class Work extends Component {

state = {
    repos: [],
    showImg: true,
    galleryList: []
}

getStarredRepos = () => {
    axios({
        url:'https://api.github.com/users/bennyrags/starred',
        type:'get'
    }).then(response=>{
console.log(response.data)
let newObj = {};
let newArr = []; 
for (let i of response.data) {
     newObj = {
         name: i.name,
         description: i.description,
         url: i.url,
     }
newArr.push(newObj);
this.setState({
    ...this.state,
    repos: newArr
})
 }

console.log(`this is newArr,`, newArr)
console.log(`this is state,`, this.state)

})
    .catch(error =>{
        console.log(error);
    })
}


    handleFlip = () => {
        this.setState({
            showImg: !this.state.showImg
        })
    }

    componentDidMount() {
        this.getStarredRepos();
    }

    render() {
        const { classes } = this.props;

        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={24} >
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card} >
                    <CardContent>
                {this.state.showImg
                    ? 
                    <>
                    <img src={require('../../images/dreamcatcher-400x435.jpg')} onClick={this.handleFlip} alt='Dreamcatcher homepage' height="218" width="200" />
                    <h4>Dreamcatcher</h4>
                    <h5>Built with</h5>
                    <i class="devicon-react-original"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-nodejs-plain"></i>
                    <i class="devicon-express-original"></i>

                    <i class="devicon-postgresql-plain"></i>


                    </>
                    : <span className="flipText"><p onClick={this.handleFlip}>This is a description</p></span>
                }
                </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card} >
                    <CardContent>
                {this.state.showImg
                    ? 
                    <>
                    <img src={require('../../images/feedback-400x435.jpg')} onClick={this.handleFlip} alt='Dreamcatcher homepage' height="218" width="200" />
                    <h4>Feedback Loop</h4>
                    <h5>Built with</h5>
                    <i class="devicon-react-original"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-nodejs-plain"></i>
                    <i class="devicon-express-original"></i>

                    <i class="devicon-postgresql-plain"></i>
                    </>
                    : <span className="flipText"><p onClick={this.handleFlip}>This is a description</p></span>
                }
                </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card} >
                    <CardContent>
                {this.state.showImg
                    ? 
                    <>
                    <img src={require('../../images/damn_thangs_400x435.jpg')} onClick={this.handleFlip} alt='Dreamcatcher homepage' height="218" width="200" />
                    <h4>DAMN THANGS!</h4>
                    <h5>Built with</h5>
                    <i class="devicon-jquery-plain"></i>
                    <i class="devicon-bootstrap-plain"></i>

                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-nodejs-plain"></i>
                    <i class="devicon-postgresql-plain"></i>
                    </>
                    : <span className="flipText"><p onClick={this.handleFlip}>This is a description</p></span>
                }
                </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <Card className={classes.card} >
                    <CardContent>
                {this.state.showImg
                    ? 
                    <>
                    <img src={require('../../images/calculator-400x435.jpg')} onClick={this.handleFlip} alt='Dreamcatcher homepage' height="218" width="200" />
                    <h4>Server Side Calculator</h4>
                    <h5>Built with</h5>
                    <i class="devicon-react-original"></i>
                    <i class="devicon-css3-plain"></i>
                    <i class="devicon-nodejs-plain"></i>
                    <i class="devicon-postgresql-plain"></i>
                    </>
                    : <span className="flipText"><p onClick={this.handleFlip}>This is a description</p></span>
                }
                </CardContent>
                    </Card>
                </Grid>
               

            </Grid>

        )
    }

}








export default withStyles(styles)(Work);