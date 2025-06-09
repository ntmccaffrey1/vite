import SpaceTravelApi from "../services/SpaceTravelApi";

export const fetchSpacecrafts = async () => {
    try {
        const res = await SpaceTravelApi.getSpacecrafts();
        return res.data;
    } catch (e) {
        console.error("Failed to load spacecrafts.");
        return [];
    } 
};