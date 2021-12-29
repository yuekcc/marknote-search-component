const REPO_NAME = `yuekcc`;
const url = `http://localhost:10086/api/v1/${REPO_NAME}/search`;

const searchParams = new URLSearchParams({
  pageSize: 20,
  pageIndex: 1,
  keyword: 'java',
});

fetch(`${url}?${searchParams.toString()}`)
  .then(res => res.json())
  .then(resp => {
    console.log(resp);
  });
