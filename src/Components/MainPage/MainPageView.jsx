import {
	Typography,
	Divider,
	Button,
} from "@material-ui/core";

import { Zoom, Fade } from "react-reveal";

// Import Own Components
import { openWindow }    from "~/Util";
import GithubIcon        from "~/Resources/icons/Github.jsx";
import TodoListContainer from "~/Components/TodoListContainer";
import useStyles         from "./styles";

const MainPageView = () => {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<div className="todoListContainer">

				<Fade>
					<div className="header">
						<Typography
							variant="h2"
							className="title"
						>
							<span>
								TodoList
								{" "}
							</span>

							Component

						</Typography>

						<Button
							variant="contained"
							className="seeOnGithub"
							onClick={openWindow("https://github.com/martline1/InprodiTestComponent")}
						>
							<GithubIcon />

							{" "}
							Ver código en Github
						</Button>
					</div>
				</Fade>

				<Divider className="divider" />

				<Zoom>
					<TodoListContainer />
				</Zoom>
			</div>
		</div>
	);
};

export default MainPageView;
