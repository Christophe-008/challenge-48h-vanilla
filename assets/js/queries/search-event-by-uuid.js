import { supabaseClient } from "./../db-config.js";

export const searchEventByUuid = async (uuid) => {
    try {
        const { data, error } = await supabaseClient
            .from("events")
            .select("id")
            .eq("uuid", uuid);

        if (error) {
            console.error(
                "Connexion à Supabase réussie, mais une erreur s'est produite :",
                error.message
            );
        } else {
            // console.log("Connexion réussie et données récupérées :", data);
            return data[0].id;
        }
    } catch (err) {
        console.error("Erreur de connexion à Supabase :", err);
    }
};
