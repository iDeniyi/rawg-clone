import useData from "./useData";

interface Platform {
    id: number;
    name: string;
    slug: string;
}

const usePlatofrms = () => useData<Platform>("/platforms/lists/parents");

export default usePlatofrms;
