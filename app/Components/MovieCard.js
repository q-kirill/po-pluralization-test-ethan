import React from 'react';

import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import Divider from 'material-ui/Divider';

//Uses MaterialUI Card component to render info about the movie
//Had to do CSS inline to overwrite Material-UI's native styling (more detail in README)
//In production, would DEFINITELY fix occasional image error (more detail in README)

//Stateful React Component -- state used to control card expansion
//NOT Redux container (doesn't need to know App level state)

export default class MovieCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expanded: false,
    };

    this.handleExpandChange = this.handleExpandChange.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
    this.handleExpand = this.handleExpand.bind(this);
    this.handleReduce = this.handleReduce.bind(this);
  }

  handleExpandChange(expanded){
    this.setState({expanded: expanded});
  };

  handleToggle(event, toggle){
    this.setState({expanded: toggle});
  };

  handleExpand(){
    this.setState({expanded: true});
  };

  handleReduce(){
    this.setState({expanded: false});
  };

  render() {
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader
          title={this.props.movie.show_title}
          subtitle={`Rating: ${this.props.movie.rating} stars`}
          avatar={this.props.movie.poster}
          actAsExpander={true}
          showExpandableButton={true}
        />
        <Divider />
        <CardMedia expandable={true} onTouchTap={this.handleReduce}>
          <div style= {{display:'flex'}}>
            <img src={this.props.movie.poster} alt="Image Not found" style={{width:'auto', maxHeight: '75vh',}}/>
            <CardText expandable={true} style={{display:'flex', flexDirection:'column', justifyContent:'space-around'}}>
                <CardTitle title={this.props.movie.show_title} subtitle={this.props.movie.release_year} expandable={true} style={{padding: '0px'}} />
                <h3>{this.props.movie.summary}</h3>
                <h3>{`Directed by: ${this.props.movie.director}`}</h3>
                <div>{`Starring: ${this.props.movie.show_cast}`}</div>
            </CardText>
          </div>
        </CardMedia>
      </Card>
    );
  }
}