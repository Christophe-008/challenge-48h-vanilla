import { supabaseClient } from "./../db-config.js";
import { insertPicture } from "./insert-picture.js";

export const uploadTo = async function uploadToSupabase(blob) {
    const uuid = localStorage.getItem("uuid");
    const fileName = `${uuid}/photo-${Date.now()}.jpeg`;
    const { data, error } = await supabaseClient.storage
        .from("snap")
        .upload(fileName, blob, {
            contentType: "image/jpeg",
        });

    insertPicture(fileName);

    if (error) {
        console.error("Erreur lors de l'upload :", error.message);
    } else {
        console.log("Image sauvegardée avec succès :", data);
    }
};
