import axios from "axios";

function getArticleList(page, pageSize, keyword) {
	let url = `https://panda-market-api-crud.vercel.app/articles?page=${page}&pageSize=${pageSize}&orderBy=recent&keyword=${keyword}`;

	let response = axios.get(url);
	return response.then((response) => response.data.list).then(console.log);
}

