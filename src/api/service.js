import token from "@/redux/token";
// загрузка книг согласно запросу
export async function fetchData({ serchRequest, categories, sort, index }) {
    const chekCategories = categories === 'all'?'':categories
  try {
    const response = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=intitle:${serchRequest}+subject:${chekCategories}&orderBy=${sort}&startIndex=${index}&maxResults=30&key=${token}`
    );
    const data = await response.json()
    console.log(data)
    if(data.items){
      return data
    }
    throw new Error(`По запросу ${serchRequest} ничего не найдено`);
  } catch (error) {
    alert(error);
    return error.response?.status || error
  }
}
//загрузка конкретной книги по ID
export async function fetchBookData(id) {
try {
  const response = await fetch(`https://www.googleapis.com/books/v1/volumes/${id}`);
  const data = await response.json()
  return data
} catch (error) {
  console.log('err', error);
  return error
}
}
