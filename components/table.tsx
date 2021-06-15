import * as Next from 'next';
import { withStyles, makeStyles,Theme, createStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme: Theme) =>
	createStyles({
		head: {
			backgroundColor: theme.palette.common.black,
			color: theme.palette.common.white,
		},
		body: {
			fontSize: 14,
		},
	}),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
	createStyles({
		root: {
			'&:nth-of-type(odd)': {
				backgroundColor: theme.palette.action.hover,
			},
		},
	}),
)(TableRow);

const useStyles = makeStyles({
	table: {
		minWidth: 700,
	},
});

export default  function CustomTable(props: any) {
	const classes = useStyles();
	return (<TableContainer component={Paper}>
		<Table className={classes.table}  aria-label="simple table">
			<TableHead>
				<TableRow>
					<StyledTableCell align="right">POSITION</StyledTableCell>
					<StyledTableCell align="right">COMPANY</StyledTableCell>
					<StyledTableCell align="right">REFERRAL</StyledTableCell>
					<StyledTableCell align="right">PROGRESS</StyledTableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{props.list.map((row, index) => (
					<StyledTableRow  key={index}>
						<StyledTableCell align="right">{row.position}</StyledTableCell>
						<StyledTableCell align="right">{row.company}</StyledTableCell>
						<StyledTableCell align="right">{row.referral}</StyledTableCell>
						<StyledTableCell align="right">{row.progress}</StyledTableCell>
					</StyledTableRow >
				))}
			</TableBody>
		</Table>
	</TableContainer>)
}