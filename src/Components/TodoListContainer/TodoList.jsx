import PropTypes from "prop-types";

import {
	Card,
	List,
	ListItem,
	ListItemText,
	ListItemSecondaryAction,
	Checkbox,
} from "@material-ui/core";

// Import Own Components
import useStyles from "./styles";

const TodoList = ({ items, onItemClick }) => {
	const classes = useStyles();

	return (
		<Card className={classes.root}>
			<div className="listContainer">
				<List>
					{ items.map(item => (
						<ListItem
							key={item.text}
							button
							onClick={evnt => onItemClick(item, evnt)}
							className={item?.done ? "itemDone" : ""}
						>
							<ListItemText primary={item.text} />

							<ListItemSecondaryAction>
								<Checkbox
									checked={Boolean(item.done)}
									onChange={evnt => onItemClick(item, evnt)}
								/>
							</ListItemSecondaryAction>
						</ListItem>
					)) }
				</List>
			</div>
		</Card>
	);
};

TodoList.propTypes = {
	items : PropTypes.arrayOf(PropTypes.shape({
		text : PropTypes.string.isRequired,
		done : PropTypes.bool,
	})),
	onItemClick : PropTypes.func.isRequired,
};

TodoList.defaultProps = {
	items : [],
};

export default TodoList;
