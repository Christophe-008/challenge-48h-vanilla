import { supabaseClient } from "./../db-config.js";
import { searchEventByUuid } from "./search-event-by-uuid.js";

export const insertPicture = async (imageUrl) => {
    const uuid = localStorage.getItem("uuid");
    const eventId = await searchEventByUuid(uuid);

    const { data: insertData, error: insertError } = await supabaseClient
        .from("pictures")
        .insert([
            {
                url: imageUrl,
                event_id: eventId,
            },
        ]);

    if (insertError) {
        console.error(
            "Erreur lors de l'insertion dans la table 'pictures' :",
            insertError.message
        );
    } else {
        console.log(
            "URL et ID d'événement insérés avec succès dans la table 'pictures' :",
            insertData
        );
    }
};
