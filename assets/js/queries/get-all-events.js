import { supabaseClient } from "./../db-config.js";
import { displayEvents } from "./../display-events.js";
export const getAllEvents = async () => {
    try {
        // Effectuer une requête simple sur une table (par exemple "users")
        const { data, error } = await supabaseClient.from("events").select("*");

        if (error) {
            console.error(
                "Connexion à Supabase réussie, mais une erreur s'est produite :",
                error.message
            );
        } else {
            // console.log("Connexion réussie et données récupérées :", data);
            displayEvents(data);
        }
    } catch (err) {
        console.error("Erreur de connexion à Supabase :", err);
    }
};
