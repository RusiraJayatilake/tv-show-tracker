export const fetchTvShowData = async () => {
    try{
        const res = await fetch('https://api.tvmaze.com/shows');
        const jsonData = await res.json();
        return jsonData;
    } catch (err){
        console.error("Error fetching data", err);
    }
}