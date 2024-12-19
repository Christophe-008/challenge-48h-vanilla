import { supabaseClient } from "./../db-config.js";

export const uploadTo = async function uploadToSupabase(blob) {
    const fileName = `uploads/photo-${Date.now()}.jpeg`;
    const { data, error } = await supabaseClient.storage
        .from("snap")
        .upload(fileName, blob, {
            contentType: "image/jpeg",
        });

    if (error) {
        console.error("Erreur lors de l'upload :", error.message);
    } else {
        console.log("Image sauvegardée avec succès :", data);
    }
};
