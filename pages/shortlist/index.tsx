import * as Next from 'next';
import * as React from 'react';
import { fetchShortlist } from '../api/shorlist'
import { Shortlist } from '../../model/shortlist'
import ShortTable from "../../components/table"

interface Props {
	lists: Shortlist[]
}

const ShortlistPage: Next.NextStatelessComponent = (props) => {
	const [lists] = React.useState(props.lists);
	return (<ShortTable list={lists}/>)
}

ShortlistPage.getInitialProps = async () => {
	const lists = await fetchShortlist()
	console.log(lists)
	return {
		lists,
	}
}
export  default  ShortlistPage