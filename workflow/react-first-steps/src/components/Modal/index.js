import { Dialog, DialogTitle } from '@material-ui/core';
import useStyles from './style.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import Loading from '../Loading/';
import Toast from '../Toast';

const Modal = ({ handleCloseModal, showModal, title, children }) => {
	const classes = useStyles();

	const state = useSelector((state) => state);

	return (
		<Dialog onClose={handleCloseModal} open={showModal}>
			<DialogTitle
				id="modal-title"
				onClose={handleCloseModal}
				className={classes.title}
			>
				<div className={classes.wrapper}>
					<div>{title}</div>
					<div>
						<FontAwesomeIcon
							onClick={handleCloseModal}
							icon={faTimes}
							size={'lg'}
							className={classes.close}
						/>
					</div>
				</div>
			</DialogTitle>
			<div className={classes.content}>
				{state.auth.loading ? <Loading /> : children}
			</div>
			{state.auth.error && (
				<Toast message={'Wrong credentials'} success={false} />
			)}
		</Dialog>
	);
};

export default Modal;
