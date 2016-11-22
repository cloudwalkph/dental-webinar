import React, {Component} from 'react';
import {Toolbar,ToolbarGroup,ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

const styles = {
	labelColor : {
		color : '#959597',
		fontWeight : 'bold',
		fontFamily: 'Oxygen, sans-serif'
	}
}

export default class Header extends Component {



	render() {
		return (
			<div className="row">
				<div className="col-md-12">
					<Toolbar style={{backgroundColor : 'transparent',boxShadow : '0 2px 5px rgba(0, 0, 0, 0.26)'}}>
						<ToolbarGroup firstChild={true}>
							<ToolbarTitle text="DENTAL ACCESS WEBINARS" style={{paddingLeft : '16px'}}/>
						</ToolbarGroup>
						<ToolbarGroup>
							<FlatButton label="TOP COURSES" labelStyle={styles.labelColor} />
						    <FlatButton label="NEW COURSES" labelStyle={styles.labelColor} />
						    <FlatButton label="ABOUT" labelStyle={styles.labelColor} />
						    <FlatButton label="LOG IN" labelStyle={styles.labelColor} />
							<RaisedButton label="SIGN IN" backgroundColor="#0c2c60" labelColor="#fff" />
						</ToolbarGroup>
					</Toolbar>
				</div>
			</div>
		)
	}
}
