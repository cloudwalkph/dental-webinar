import React, {Component} from 'react';
import {Toolbar,ToolbarGroup,ToolbarTitle} from 'material-ui/Toolbar';
import RaisedButton from 'material-ui/RaisedButton';

export default class Header extends Component {

	render() {
		return (
			<Toolbar>
				<ToolbarGroup firstChild={true}>
					<ToolbarTitle text="DENTAL ACCESS WEBINARS"/>
				</ToolbarGroup>
				<ToolbarGroup>
					<RaisedButton label="Create Broadcast" primary={true} />
				</ToolbarGroup>
			</Toolbar>
		)
	}
}
