import { supabaseClient } from "./../db-config.js";
import { searchEventByUuid } from "./search-event-by-uuid.js";
export const getAllPictures = async () => {
    const uuid = localStorage.getItem("uuid");
    const eventId = await searchEventByUuid(uuid);
    try {
        const { data, error } = await supabaseClient
            .from("pictures")
            .select("*")
            .eq("event_id", eventId);

        if (error) {
            console.error(
                "Connexion à Supabase réussie, mais une erreur s'est produite :",
                error.message
            );
        } else {
            // console.log("Connexion réussie et données récupérées :", data);
            // displayEvents(data);
            console.log(data);
        }
    } catch (err) {
        console.error("Erreur de connexion à Supabase :", err);
    }
};
