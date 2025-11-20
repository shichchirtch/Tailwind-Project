const fetchCat = async () => {
    const res = await fetch("http://localhost:9000/categories");

    if (!res.ok) {
        throw new Response("Failed to fetch posts)))", {
            status: res.status,
            statusText: res.statusText,
        });
    }

    return res.json();
};

export default fetchCat;